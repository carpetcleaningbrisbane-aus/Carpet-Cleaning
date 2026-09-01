'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SERVICES } from '@/data/siteData';
import { CheckCircle2, CalendarDays, Clock, User, Mail, Phone, MapPin, ClipboardList } from 'lucide-react';
import Link from 'next/link';

const inputCls = 'w-full px-4 py-3 rounded-lg border border-[#C8D4D4] bg-white text-sm text-[#102A3A] placeholder:text-[#60727F] focus:outline-none focus:border-[#159A9C] focus:ring-2 focus:ring-[#E8F7F7] transition-colors';
const labelCls = 'block text-xs font-semibold text-[#0B253A] uppercase tracking-wider mb-1.5';

function Field({ label, error, icon, children }: { label: string; error?: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div data-error={error ? 'true' : undefined}>
      <label className={labelCls}>{label}</label>
      <div className="relative">
        {icon && <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#60727F] pointer-events-none">{icon}</span>}
        <div className={icon ? '[&_input]:pl-10 [&_select]:pl-10 [&_textarea]:pl-10' : ''}>{children}</div>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function BookNowForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    serviceIds: ['steam-carpet-cleaning'] as string[],
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && SERVICES.find((s) => s.id === serviceParam)) {
      setFormData((prev) => ({ ...prev, serviceIds: [serviceParam] }));
    }
  }, [searchParams]);

  const selectedServices = SERVICES.filter((s) => formData.serviceIds.includes(s.id));

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
    if (formData.serviceIds.length === 0) e.serviceIds = 'Please select at least one service.';
    if (!formData.preferredDate) e.preferredDate = 'Please select a date.';
    if (!formData.fullName.trim()) e.fullName = 'Full name is required.';
    if (!formData.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email.';
    if (!formData.phone.trim()) e.phone = 'Phone number is required.';
    if (!formData.address.trim()) e.address = 'Property address is required.';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      document.querySelector('[data-error]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch { /* show success anyway */ }
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 md:pt-32 pb-24">
        <div className="px-5 md:px-16 max-w-[680px] mx-auto">
          <div className="bg-white p-10 md:p-14 rounded-2xl border border-[#D6E8E8] ambient-shadow text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#E8F7F7] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#159A9C]" />
            </div>
            <h2 className="font-display font-bold text-2xl text-[#0B253A]">Booking Request Received</h2>
            <p className="text-sm text-[#102A3A] max-w-sm mx-auto leading-relaxed">
              Thanks <span className="font-semibold">{formData.fullName}</span>. We'll confirm your appointment via phone or email within a few hours.
            </p>
            <div className="text-left bg-[#F0FAFA] rounded-xl border border-[#D1EFEF] p-5 max-w-sm mx-auto space-y-2.5 text-sm">
              <div className="flex gap-2"><span className="text-[#60727F] w-20 shrink-0">Services</span><span className="font-semibold text-[#0B253A]">{selectedServices.map(s => s.title).join(', ')}</span></div>
              <div className="flex gap-2"><span className="text-[#60727F] w-20 shrink-0">Date</span><span className="font-semibold text-[#0B253A]">{formData.preferredDate}</span></div>
              <div className="flex gap-2"><span className="text-[#60727F] w-20 shrink-0">Time</span><span className="font-semibold text-[#0B253A]">{formData.preferredTime}</span></div>
              <div className="flex gap-2"><span className="text-[#60727F] w-20 shrink-0">Address</span><span className="font-semibold text-[#0B253A]">{formData.address}</span></div>
              <div className="flex gap-2"><span className="text-[#60727F] w-20 shrink-0">Contact</span><span className="font-semibold text-[#0B253A]">{formData.phone}</span></div>
            </div>
            <p className="text-xs text-[#60727F]">Need to make changes? Call <span className="font-semibold text-[#0B253A]">0435 071 625</span></p>
            <Link href="/" className="inline-block px-7 py-3 bg-[#0B253A] text-white rounded-lg font-semibold text-sm hover:bg-[#159A9C] transition-all">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-24">

      {/* Hero */}
      <section className="bg-[#0B253A] py-14 px-5 md:px-16 mb-10">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#159A9C] mb-3 block">Online Booking</span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">Book Your Cleaning</h1>
          <p className="text-sm text-white/65 max-w-md mx-auto">No upfront payment required. We'll confirm within a few hours.</p>
        </div>
      </section>

      <section className="px-5 md:px-16 max-w-[780px] mx-auto">
        <form onSubmit={handleSubmit} noValidate>
          <div className="bg-white rounded-2xl border border-[#D6E8E8] ambient-shadow divide-y divide-[#D6E8E8]">

            {/* ── 1. Select Services ── */}
            <div className="p-7 md:p-9">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-full bg-[#0B253A] text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
                <h2 className="font-display font-bold text-lg text-[#0B253A]">Select Services</h2>
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
                          ? 'border-[#159A9C] bg-[#F0FAFA] text-[#0B253A]'
                          : 'border-[#C8D4D4] bg-white text-[#60727F] hover:border-[#159A9C]/60 hover:text-[#0B253A]'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center transition-all ${
                        isSelected ? 'bg-[#159A9C] border-[#159A9C]' : 'border-[#C8D4D4]'
                      }`}>
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

            {/* ── 2. Preferred Date & Time ── */}
            <div className="p-7 md:p-9">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-full bg-[#0B253A] text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
                <h2 className="font-display font-bold text-lg text-[#0B253A]">Preferred Date & Time</h2>
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
                <Field label="Time Slot" icon={<Clock className="w-4 h-4" />}>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className={inputCls + ' pl-10'}
                  >
                    <option>Morning (8:00 AM - 12:00 PM)</option>
                    <option>Afternoon (12:00 PM - 4:00 PM)</option>
                    <option>Late Afternoon (4:00 PM - 6:00 PM)</option>
                  </select>
                </Field>
              </div>
            </div>

            {/* ── 3. Contact Details ── */}
            <div className="p-7 md:p-9">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-full bg-[#0B253A] text-white text-xs font-bold flex items-center justify-center shrink-0">3</div>
                <h2 className="font-display font-bold text-lg text-[#0B253A]">Your Details</h2>
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
              <div className="mt-5">
                <Field label="Special Instructions (Optional)" icon={<ClipboardList className="w-4 h-4" />}>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Specific stains, access notes, pets..."
                    className={inputCls + ' pl-10 resize-none pt-3'}
                  />
                </Field>
              </div>
            </div>

            {/* ── Submit ── */}
            <div className="p-7 md:p-9 bg-[#F7FAFA] rounded-b-2xl">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#0B253A] text-white font-bold text-sm rounded-lg hover:bg-[#159A9C] transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
      </section>
    </div>
  );
}

export default function BookNowPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-[#102A3A]">Loading...</div>}>
      <BookNowForm />
    </Suspense>
  );
}
