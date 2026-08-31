'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SERVICES, LOCATIONS } from '@/data/siteData';
import { CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

function BookNowForm() {
  const searchParams = useSearchParams();
  const formTopRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<number>(1);
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
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-select service from query param e.g. /book-now?service=end-of-lease-cleaning
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
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const scrollToForm = () => {
    if (formTopRef.current) {
      formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNext = () => {
    if (step === 1 && formData.serviceIds.length === 0) return;
    if (step === 2 && !formData.preferredDate) return;
    if (step === 3) {
      if (!formData.fullName || !formData.email || !formData.phone || !formData.address) return;
      if (!isValidEmail(formData.email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
    }
    setEmailError('');
    if (step < 4) {
      setStep(step + 1);
      scrollToForm();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      scrollToForm();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // still show success to user even if email fails
    }
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Header */}
      <section className="bg-[#F0FAFA] py-12 px-5 md:px-16 border-b border-[#D6E8E8] mb-12">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#159A9C] mb-2 block">
            Instant Online Booking
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-[#0B253A] mb-4">
            Book Your Cleaning
          </h1>
          <p className="text-sm md:text-base text-[#102A3A] max-w-xl mx-auto">
            Reserve your preferred date and time in 4 simple steps. No upfront payment required.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-16 max-w-[960px] mx-auto">
        {/* Scroll anchor */}
        <div ref={formTopRef} className="scroll-mt-28" />
        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4 text-xs font-bold text-[#0B253A]">
              <span className={step >= 1 ? 'text-[#159A9C]' : ''}>1. Service</span>
              <span className={step >= 2 ? 'text-[#159A9C]' : ''}>2. Schedule</span>
              <span className={step >= 3 ? 'text-[#159A9C]' : ''}>3. Details</span>
              <span className={step >= 4 ? 'text-[#159A9C]' : ''}>4. Summary</span>
            </div>
            <div className="w-full bg-[#D6E8E8] h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#0B253A] h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {isSubmitted ? (
          <div className="bg-white p-10 md:p-16 rounded-3xl border border-[#D6E8E8] ambient-shadow text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#E8F7F7]/50 text-[#159A9C] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-display font-bold text-3xl text-[#0B253A]">
              We've Got Your Booking!
            </h2>
            <p className="text-base text-[#102A3A] max-w-md mx-auto leading-relaxed">
              Thanks, <span className="font-bold text-[#0B253A]">{formData.fullName}</span>. We've received your request and our team will review it shortly. We'll confirm your appointment via phone or email within a few hours.
            </p>
            <div className="p-6 bg-[#F0FAFA] rounded-2xl text-left max-w-md mx-auto text-sm space-y-2 border border-[#D1EFEF]">
              <p><strong>Services:</strong> {selectedServices.map((s) => s.title).join(', ')}</p>
              <p><strong>Preferred Date:</strong> {formData.preferredDate} — {formData.preferredTime}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>We'll reach you at:</strong> {formData.phone} or {formData.email}</p>
            </div>
            <p className="text-xs text-[#60727F] max-w-sm mx-auto leading-relaxed">
              If you need to make any changes or have questions before your appointment, feel free to call us directly on <span className="font-semibold text-[#0B253A]">0435 071 625</span>.
            </p>
            <div className="pt-4">
              <Link
                href="/"
                className="px-8 py-3.5 bg-[#0B253A] text-white rounded-xl font-semibold text-sm hover:bg-[#159A9C] transition-all"
              >
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#D6E8E8] ambient-shadow">

            {/* Step 1: Select Services (multi-select) */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#0B253A]">
                    Step 1: Choose Your Services
                  </h3>
                  <p className="text-sm text-[#60727F] mt-1">You can select multiple services.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((s) => {
                    const isSelected = formData.serviceIds.includes(s.id);
                    return (
                      <div
                        key={s.id}
                        onClick={() => toggleService(s.id)}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#0B253A] bg-[#F0FAFA] shadow-md'
                            : 'border-[#C8D4D4] bg-white hover:border-[#60727F]'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Checkbox indicator */}
                          <div className={`mt-0.5 w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center transition-all ${
                            isSelected ? 'bg-[#0B253A] border-[#0B253A]' : 'border-[#C8D4D4]'
                          }`}>
                            {isSelected && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                                <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-base text-[#0B253A]">{s.title}</h4>
                            <p className="text-xs text-[#102A3A] leading-relaxed mt-1">{s.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {formData.serviceIds.length === 0 && (
                  <p className="text-xs text-red-500">Please select at least one service to continue.</p>
                )}
              </div>
            )}

            {/* Step 2: Date and Time */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-[#0B253A]">
                  Step 2: Preferred Schedule
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0B253A] uppercase tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C8D4D4] text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B253A] uppercase tracking-wider mb-2">
                      Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C8D4D4] text-sm"
                    >
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Customer Details */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-[#0B253A]">
                  Step 3: Customer Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0B253A] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-xl border border-[#C8D4D4] text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B253A] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setEmailError('');
                      }}
                      placeholder="Email Address"
                      className={`w-full px-4 py-3 rounded-xl border text-sm ${
                        emailError ? 'border-red-400' : 'border-[#C8D4D4]'
                      }`}
                      required
                    />
                    {emailError && (
                      <p className="text-xs text-red-500 mt-1">{emailError}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B253A] uppercase tracking-wider mb-2">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={formData.phone}
                    onChange={(e) => {
                      // only allow digits
                      const digits = e.target.value.replace(/\D/g, '');
                      setFormData({ ...formData, phone: digits });
                    }}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-[#C8D4D4] text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B253A] uppercase tracking-wider mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Property Address"
                    className="w-full px-4 py-3 rounded-xl border border-[#C8D4D4] text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B253A] uppercase tracking-wider mb-2">
                    Special Instructions / Stain Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Special Instructions (Optional)"
                    className="w-full px-4 py-3 rounded-xl border border-[#C8D4D4] text-sm"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Summary */}
            {step === 4 && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-[#0B253A]">
                  Step 4: Review Booking Summary
                </h3>
                <div className="bg-[#F0FAFA] p-6 rounded-2xl border border-[#D1EFEF] space-y-3 text-sm">
                  <div className="flex justify-between border-b border-[#D6E8E8] pb-2">
                    <span className="text-[#60727F]">Selected Services:</span>
                    <span className="font-bold text-[#0B253A] text-right max-w-[60%]">
                      {selectedServices.map((s) => s.title).join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#D6E8E8] pb-2">
                    <span className="text-[#60727F]">Date & Time:</span>
                    <span className="font-bold text-[#0B253A]">{formData.preferredDate} ({formData.preferredTime})</span>
                  </div>
                  <div className="flex justify-between border-b border-[#D6E8E8] pb-2">
                    <span className="text-[#60727F]">Address:</span>
                    <span className="font-bold text-[#0B253A]">{formData.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#60727F]">Contact Details:</span>
                    <span className="font-bold text-[#0B253A]">{formData.fullName} ({formData.phone})</span>
                  </div>
                </div>

                <div className="p-4 bg-[#F7FAFA] rounded-xl border border-[#D6E8E8] flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#159A9C] shrink-0" />
                  <p className="text-xs text-[#102A3A]">
                    No immediate charge. Our technician will confirm final scope on-site before commencing work.
                  </p>
                </div>
              </div>
            )}

            {/* Step Navigation Controls */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-[#D6E8E8]">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2.5 md:px-6 md:py-3 border border-[#60727F] text-[#0B253A] rounded-xl font-semibold text-xs md:text-sm hover:bg-[#F0FAFA] flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
              ) : <div />}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2.5 md:px-8 md:py-3.5 bg-[#0B253A] text-white rounded-xl font-semibold text-xs md:text-sm hover:bg-[#159A9C] transition-all flex items-center gap-2"
                >
                  Next Step <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2.5 md:px-8 md:py-3.5 bg-[#0B253A] text-white rounded-xl font-semibold text-xs md:text-sm hover:bg-[#159A9C] transition-all shadow-md flex items-center gap-2"
                >
                  <span className="hidden sm:inline">Confirm & Reserve Booking</span>
                  <span className="sm:hidden">Confirm Booking</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default function BookNowPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-[#102A3A]">Loading booking form...</div>}>
      <BookNowForm />
    </Suspense>
  );
}
