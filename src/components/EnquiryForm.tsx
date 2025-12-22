"use client";

import { useState } from "react";

type FormState = {
  pickup: string;
  destination: string;
  date: string;
  phone: string;
};

function validate(state: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!state.pickup.trim()) errors.pickup = "Pickup location is required";
  if (!state.destination.trim()) errors.destination = "Destination is required";
  if (!state.date) errors.date = "Travel date is required";
  if (!/^\+?\d{10,15}$/.test(state.phone)) errors.phone = "Enter a valid phone number";
  return errors;
}

export default function EnquiryForm() {
  const [state, setState] = useState<FormState>({ pickup: "", destination: "", date: "", phone: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate(state);
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setStatus("submitting");

    try {
      await new Promise((r) => setTimeout(r, 1000));
      alert('Enquiry submitted! We will call you shortly.');
      setState({ pickup: "", destination: "", date: "", phone: "" });
      setStatus("success");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={onSubmit} className="relative mx-auto max-w-4xl">
      {/* Background decoration */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-20 blur-xl"></div>
      
      <div className="relative rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-900/5 sm:p-8">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Get Instant Quote</h3>
          <p className="mt-2 text-slate-600">Fill your details and we'll call you within 2 minutes</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Pickup Location */}
          <div className="relative">
            <input
              type="text"
              name="pickup"
              id="pickup"
              value={state.pickup}
              onChange={(e) => setState({ ...state, pickup: e.target.value })}
              placeholder=" "
              className={`peer w-full rounded-xl border-2 ${
                errors.pickup ? 'border-red-300' : 'border-slate-200'
              } bg-white px-4 pb-2 pt-6 text-slate-900 placeholder-transparent transition-all focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10`}
            />
            <label
              htmlFor="pickup"
              className="absolute left-4 top-2 text-xs font-medium text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-amber-600"
            >
              📍 Pickup Location
            </label>
            {errors.pickup && <p className="mt-1.5 text-sm text-red-600">{errors.pickup}</p>}
          </div>

          {/* Destination */}
          <div className="relative">
            <input
              type="text"
              name="destination"
              id="destination"
              value={state.destination}
              onChange={(e) => setState({ ...state, destination: e.target.value })}
              placeholder=" "
              className={`peer w-full rounded-xl border-2 ${
                errors.destination ? 'border-red-300' : 'border-slate-200'
              } bg-white px-4 pb-2 pt-6 text-slate-900 placeholder-transparent transition-all focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10`}
            />
            <label
              htmlFor="destination"
              className="absolute left-4 top-2 text-xs font-medium text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-amber-600"
            >
              🎯 Drop Location
            </label>
            {errors.destination && <p className="mt-1.5 text-sm text-red-600">{errors.destination}</p>}
          </div>

          {/* Travel Date */}
          <div className="relative">
            <input
              type="date"
              name="date"
              id="date"
              value={state.date}
              onChange={(e) => setState({ ...state, date: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              className={`peer w-full rounded-xl border-2 ${
                errors.date ? 'border-red-300' : 'border-slate-200'
              } bg-white px-4 pb-2 pt-6 text-slate-900 transition-all focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10`}
            />
            <label
              htmlFor="date"
              className="absolute left-4 top-2 text-xs font-medium text-amber-600"
            >
              📅 Travel Date
            </label>
            {errors.date && <p className="mt-1.5 text-sm text-red-600">{errors.date}</p>}
          </div>

          {/* Phone Number */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              id="phone"
              inputMode="tel"
              value={state.phone}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              placeholder=" "
              className={`peer w-full rounded-xl border-2 ${
                errors.phone ? 'border-red-300' : 'border-slate-200'
              } bg-white px-4 pb-2 pt-6 text-slate-900 placeholder-transparent transition-all focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10`}
            />
            <label
              htmlFor="phone"
              className="absolute left-4 top-2 text-xs font-medium text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-amber-600"
            >
              📞 Phone Number
            </label>
            {errors.phone && <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition-all hover:shadow-xl hover:shadow-amber-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative flex items-center justify-center gap-2">
              {status === "submitting" ? (
                <>
                  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Get Free Quote
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </span>
          </button>
          <p className="mt-3 text-center text-sm text-slate-500">
            🔒 Your details are safe with us. We never share your information.
          </p>
        </div>
      </div>
    </form>
  );
}

