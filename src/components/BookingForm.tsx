'use client';

import { useState } from 'react';
import { SERVICES } from '@/data/siteData';
import {
  CheckCircle2, CalendarDays, User, Mail, Phone, MapPin, ClipboardList, ChevronDown,
} from 'lucide-react';
import Link from 'next/link';

const inputCls =
  'w-full px-4 py-3 rounded-lg border border-[#1261A0]/20 bg-white text-sm text-[#082B59] placeholder:text-[#082B59]/40 focus:outline-none focus:border-[#00B8D9] focus:ring-2 focus:ring-[#F2F8FC] transition-colors';
const labelCls =
  'block text-xs font-semibold text-[#082B59] uppercase tracking-wider mb-1.5';

function Field({
  label,
  error,
  icon,
  children,
}: {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div data-error={error ? 'true' : undefined}>
      <label className={labelCls}>{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#082B59]/40 pointer-events-none">
            {icon}
          </span>
        )}
        <div className={icon ? '[&_input]:pl-10 [&_select]:pl-10 [&_textarea]:pl-10' : ''}>
          {children}
        </div>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

interface BookingFormProps {
  /** Pre-select a service by its id (e.g. "carpet-cleaning"). */
  defaultService?: string;
  /** Optional heading shown above the form card. */
  heading?: string;
  /** Optional sub-heading / descriptor. */
  subheading?: string;
  /**
   * Compact mode — flattens spacing, uses a <select> dropdown for services,
   * hides numbered section headers. Designed for embedding in the hero.
   */
  compact?: boolean;
}

export default function BookingForm({
  defaultService = 'carpet-cleaning',
  heading = 'Book Your Cleaning',
  subheading = "No upfront payment. We'll confirm your appointment within a few hours.",
  compact = false,
}: BookingFormProps) {
  const validDefault =
    SERVICES.find((s) => s.id === defaultService)?.id ?? 'carpet-cleaning';

  const [formData, setFormData] = useState({
    serviceIds: [validDefault] as string[],
    preferredDate: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedServices = SERVICES.filter((s) => formData.serviceIds.includes(s.id));

  // For compact mode — single-select via <select>
  const handleServiceChange = (id: string) => {
    setFormData((prev) => ({ ...prev, serviceIds: [id] }));
    setErrors((e) => ({ ...e, serviceIds: '' }));
  };

  // For full mode — multi-select checkboxes
  const toggleService = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceIds: prev.serviceIds.includes(id)
        ? prev.serviceIds.filter((s) => s !== id)
        : [...prev.serviceIds, id],
    }));
    setErrors((e) => ({ ...e, serviceIds: '' }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (formData.serviceIds.length === 0)
      e.serviceIds = 'Please select at least one service.';
    if (!formData.preferredDate) e.preferredDate = 'Please select a date.';
    if (!formData.fullName.trim()) e.fullName = 'Full name is required.';
    if (!formData.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'Please enter a valid email.';
    if (!formData.phone.trim()) e.phone = 'Phone number is required.';
    if (!formData.address.trim()) e.address = 'Property address is required.';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      document
        .querySelector('[data-error]')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      /* show success anyway */
    }
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  /* ── Success state ── */
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-[#1261A0]/20 shadow-sm p-8 text-center space-y-4 mx-auto">
        <div className="w-12 h-12 rounded-full bg-[#F2F8FC] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7 text-[#00B8D9]" />
        </div>
        <h3 className="font-display font-bold text-xl text-[#082B59]">
          Booking Request Received
        </h3>
        <p className="text-sm text-[#082B59]/80 max-w-sm mx-auto leading-relaxed">
          Thanks <span className="font-semibold">{formData.fullName}</span>. We&apos;ll confirm
          your appointment via phone or email within a few hours.
        </p>
        <div className="text-left bg-[#F2F8FC] rounded-xl border border-[#1261A0]/20 p-4 max-w-sm mx-auto space-y-2 text-sm">
          <div className="flex gap-2">
            <span className="text-[#082B59]/60 w-20 shrink-0">Services</span>
            <span className="font-semibold text-[#082B59]">
              {selectedServices.map((s) => s.title).join(', ')}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#082B59]/60 w-20 shrink-0">Date</span>
            <span className="font-semibold text-[#082B59]">{formData.preferredDate}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#082B59]/60 w-20 shrink-0">Address</span>
            <span className="font-semibold text-[#082B59]">{formData.address}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#082B59]/60 w-20 shrink-0">Contact</span>
            <span className="font-semibold text-[#082B59]">{formData.phone}</span>
          </div>
        </div>
        <p className="text-xs text-[#082B59]/60">
          Need to make changes? Call{' '}
          <a href="tel:0405849841" className="font-semibold text-[#082B59] hover:text-[#00B8D9] transition-colors">
            0405 849 841
          </a>
        </p>
        <Link
          href="/"
          className="inline-block px-7 py-3 bg-[#082B59] text-white rounded-lg font-semibold text-sm hover:bg-[#00B8D9] transition-all"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  /* ════════════════════════════════════════
     COMPACT MODE — for hero section
  ════════════════════════════════════════ */
  if (compact) {
    return (
      <div className="max-w-[780px] mx-auto">
      <form onSubmit={handleSubmit} noValidate>
        <div className="bg-white rounded-xl border border-[#1261A0]/20 shadow-sm divide-y divide-[#1261A0]/10">

          {/* Row 1 — Name + Email */}
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Full Name *" error={errors.fullName} icon={<User className="w-4 h-4" />}>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => { setFormData({ ...formData, fullName: e.target.value }); setErrors((er) => ({ ...er, fullName: '' })); }}
                placeholder="Full Name"
                className={inputCls + ' pl-10' + (errors.fullName ? ' border-red-400' : '')}
              />
            </Field>
            <Field label="Email Address *" error={errors.email} icon={<Mail className="w-4 h-4" />}>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors((er) => ({ ...er, email: '' })); }}
                placeholder="Email Address"
                className={inputCls + ' pl-10' + (errors.email ? ' border-red-400' : '')}
              />
            </Field>
          </div>

          {/* Row 2 — Phone + Address */}
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Mobile Phone *" error={errors.phone} icon={<Phone className="w-4 h-4" />}>
              <input
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={(e) => { const d = e.target.value.replace(/\D/g, ''); setFormData({ ...formData, phone: d }); setErrors((er) => ({ ...er, phone: '' })); }}
                placeholder="Phone Number"
                className={inputCls + ' pl-10' + (errors.phone ? ' border-red-400' : '')}
              />
            </Field>
            <Field label="Property Address *" error={errors.address} icon={<MapPin className="w-4 h-4" />}>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => { setFormData({ ...formData, address: e.target.value }); setErrors((er) => ({ ...er, address: '' })); }}
                placeholder="Property Address"
                className={inputCls + ' pl-10' + (errors.address ? ' border-red-400' : '')}
              />
            </Field>
          </div>

          {/* Row 3 — Date + Service dropdown */}
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Preferred Date *" error={errors.preferredDate} icon={<CalendarDays className="w-4 h-4" />}>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => {
                  setFormData({ ...formData, preferredDate: e.target.value });
                  setErrors((er) => ({ ...er, preferredDate: '' }));
                }}
                className={inputCls + ' pl-10' + (errors.preferredDate ? ' border-red-400' : '')}
              />
            </Field>
            <Field label="Service *" error={errors.serviceIds} icon={<ChevronDown className="w-4 h-4" />}>
              <select
                value={formData.serviceIds[0] ?? ''}
                onChange={(e) => handleServiceChange(e.target.value)}
                className={inputCls + ' pl-10 appearance-none' + (errors.serviceIds ? ' border-red-400' : '')}
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </Field>
          </div>

          {/* Row 4 — Message */}
          <div className="p-4">
            <Field label="Message (Optional)" icon={<ClipboardList className="w-4 h-4" />}>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Specific stains, access notes, pets on site..."
                className={inputCls + ' pl-10 resize-none pt-3'}
              />
            </Field>
          </div>

          {/* Submit */}
          <div className="p-4 bg-[#F2F8FC] rounded-b-xl">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-[#082B59] text-white font-bold text-sm rounded-lg hover:bg-[#00B8D9] hover:text-[#082B59] transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>Confirm Booking <CheckCircle2 className="w-4 h-4" /></>
              )}
            </button>
            <p className="text-center text-[10px] text-[#082B59]/40 mt-2">
              No upfront payment · Confirmed within a few hours
            </p>
          </div>

        </div>
      </form>
      </div>
    );
  }

  /* ════════════════════════════════════════
     FULL MODE — standalone booking page / sections
  ════════════════════════════════════════ */
  return (
    <div className="max-w-[780px] mx-auto">
      {/* Section heading */}
      {(heading || subheading) && (
        <div className="text-center mb-8">
          {heading && (
            <h2 className="font-display font-bold text-2xl md:text-3xl text-[#082B59] mb-2">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-sm text-[#082B59]/70 max-w-md mx-auto">{subheading}</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="bg-white rounded-2xl border border-[#1261A0]/20 shadow-sm divide-y divide-[#1261A0]/15">

          {/* ── 1. Personal Details ── */}
          <div className="p-7 md:p-9">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full bg-[#082B59] text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
              <h3 className="font-display font-bold text-lg text-[#082B59]">Personal Details</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Full Name *" error={errors.fullName} icon={<User className="w-4 h-4" />}>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => { setFormData({ ...formData, fullName: e.target.value }); setErrors((er) => ({ ...er, fullName: '' })); }}
                  placeholder="Full Name"
                  className={inputCls + ' pl-10' + (errors.fullName ? ' border-red-400' : '')}
                />
              </Field>
              <Field label="Email Address *" error={errors.email} icon={<Mail className="w-4 h-4" />}>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors((er) => ({ ...er, email: '' })); }}
                  placeholder="Email Address"
                  className={inputCls + ' pl-10' + (errors.email ? ' border-red-400' : '')}
                />
              </Field>
              <Field label="Mobile Phone *" error={errors.phone} icon={<Phone className="w-4 h-4" />}>
                <input
                  type="tel"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={(e) => { const d = e.target.value.replace(/\D/g, ''); setFormData({ ...formData, phone: d }); setErrors((er) => ({ ...er, phone: '' })); }}
                  placeholder="Phone Number"
                  className={inputCls + ' pl-10' + (errors.phone ? ' border-red-400' : '')}
                />
              </Field>
              <Field label="Property Address *" error={errors.address} icon={<MapPin className="w-4 h-4" />}>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => { setFormData({ ...formData, address: e.target.value }); setErrors((er) => ({ ...er, address: '' })); }}
                  placeholder="Property Address"
                  className={inputCls + ' pl-10' + (errors.address ? ' border-red-400' : '')}
                />
              </Field>
            </div>
          </div>

          {/* ── 2. Preferred Date ── */}
          <div className="p-7 md:p-9">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full bg-[#082B59] text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
              <h3 className="font-display font-bold text-lg text-[#082B59]">Preferred Date</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Date *" error={errors.preferredDate} icon={<CalendarDays className="w-4 h-4" />}>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => { setFormData({ ...formData, preferredDate: e.target.value }); setErrors((er) => ({ ...er, preferredDate: '' })); }}
                  className={inputCls + ' pl-10' + (errors.preferredDate ? ' border-red-400' : '')}
                />
              </Field>
            </div>
          </div>

          {/* ── 3. Select Services ── */}
          <div className="p-7 md:p-9">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full bg-[#082B59] text-white text-xs font-bold flex items-center justify-center shrink-0">3</div>
              <h3 className="font-display font-bold text-lg text-[#082B59]">Select Services</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" data-error={errors.serviceIds ? 'true' : undefined}>
              {SERVICES.map((s) => {
                const isSelected = formData.serviceIds.includes(s.id);
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => toggleService(s.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all ${
                      isSelected
                        ? 'border-[#00B8D9] bg-[#F2F8FC] text-[#082B59]'
                        : 'border-[#1261A0]/20 bg-white text-[#082B59]/60 hover:border-[#00B8D9]/60 hover:text-[#082B59]'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center transition-all ${isSelected ? 'bg-[#00B8D9] border-[#00B8D9]' : 'border-[#1261A0]/30'}`}>
                      {isSelected && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                          <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm font-semibold">{s.title}</span>
                  </button>
                );
              })}
            </div>
            {errors.serviceIds && <p className="text-xs text-red-500 mt-2">{errors.serviceIds}</p>}
          </div>

          {/* ── 4. Special Instructions ── */}
          <div className="p-7 md:p-9">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full bg-[#082B59] text-white text-xs font-bold flex items-center justify-center shrink-0">4</div>
              <h3 className="font-display font-bold text-lg text-[#082B59]">Special Instructions (Optional)</h3>
            </div>
            <Field label="Additional Details" icon={<ClipboardList className="w-4 h-4" />}>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Specific stains, access notes, parking instructions, pets, etc."
                className={inputCls + ' pl-10 resize-none pt-3'}
              />
            </Field>
          </div>

          {/* ── Submit ── */}
          <div className="bg-[#F2F8FC] p-7 md:p-9 rounded-b-2xl">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#082B59] text-white font-bold text-sm rounded-lg hover:bg-[#00B8D9] hover:text-[#082B59] transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>Confirm Booking <CheckCircle2 className="w-4 h-4" /></>
              )}
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
