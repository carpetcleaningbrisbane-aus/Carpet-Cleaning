'use client';

import { useState } from 'react';
import { SERVICES, LOCATIONS } from '@/data/siteData';
import { CheckCircle2, ChevronRight, ChevronLeft, Calendar, Clock, MapPin, User, Mail, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function BookNowPage() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    serviceId: 'steam-carpet-cleaning',
    rooms: '3 Rooms',
    propertyType: 'House',
    address: '',
    suburb: 'Melbourne CBD',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    fullName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const selectedService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

  const handleNext = () => {
    if (step === 1 && !formData.serviceId) return;
    if (step === 2 && !formData.address) return;
    if (step === 3 && !formData.preferredDate) return;
    if (step === 4 && (!formData.fullName || !formData.email || !formData.phone)) return;
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Header */}
      <section className="bg-[#e9f6fd] py-12 px-5 md:px-16 border-b border-[#d7e4ec] mb-12">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
            Instant Online Booking
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-[#001b31] mb-4">
            Book Your Cleaning
          </h1>
          <p className="text-sm md:text-base text-[#43474d] max-w-xl mx-auto">
            Reserve your preferred date and time in 5 simple steps. No upfront payment required.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-16 max-w-[960px] mx-auto">
        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4 text-xs font-bold text-[#001b31]">
              <span className={step >= 1 ? 'text-[#2d6675]' : ''}>1. Service</span>
              <span className={step >= 2 ? 'text-[#2d6675]' : ''}>2. Property</span>
              <span className={step >= 3 ? 'text-[#2d6675]' : ''}>3. Schedule</span>
              <span className={step >= 4 ? 'text-[#2d6675]' : ''}>4. Details</span>
              <span className={step >= 5 ? 'text-[#2d6675]' : ''}>5. Summary</span>
            </div>
            <div className="w-full bg-[#ddeaf2] h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#001b31] h-full transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {isSubmitted ? (
          <div className="bg-white p-10 md:p-16 rounded-3xl border border-[#d7e4ec] ambient-shadow text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#b4ebfd]/50 text-[#2d6675] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-display font-bold text-3xl text-[#001b31]">
              Booking Request Confirmed!
            </h2>
            <p className="text-base text-[#43474d] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-[#001b31]">{formData.fullName}</span>. Your cleaning appointment for <span className="font-bold text-[#001b31]">{selectedService.title}</span> has been provisionally scheduled for <span className="font-bold text-[#001b31]">{formData.preferredDate}</span> ({formData.preferredTime}).
            </p>
            <div className="p-6 bg-[#e9f6fd] rounded-2xl text-left max-w-md mx-auto text-sm space-y-2 border border-[#b1e8fa]">
              <p><strong>Property Address:</strong> {formData.address}, {formData.suburb}</p>
              <p><strong>Rooms / Scope:</strong> {formData.rooms}</p>
              <p><strong>Contact Email:</strong> {formData.email}</p>
              <p><strong>Contact Phone:</strong> {formData.phone}</p>
            </div>
            <p className="text-xs text-[#73777e]">
              A confirmation text message and email receipt have been sent to your details.
            </p>
            <div className="pt-4">
              <Link
                href="/"
                className="px-8 py-3.5 bg-[#001b31] text-white rounded-xl font-semibold text-sm hover:bg-[#12304a] transition-all"
              >
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#d7e4ec] ambient-shadow">
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-[#001b31]">
                  Step 1: Choose Your Service
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setFormData({ ...formData, serviceId: s.id })}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        formData.serviceId === s.id
                          ? 'border-[#001b31] bg-[#e9f6fd] shadow-md'
                          : 'border-[#c3c7ce] bg-white hover:border-[#73777e]'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-base text-[#001b31]">{s.title}</h4>
                        <span className="text-xs font-bold text-[#2d6675]">{s.price}</span>
                      </div>
                      <p className="text-xs text-[#43474d] leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Property Info */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-[#001b31]">
                  Step 2: Property & Scope
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-white text-sm"
                    >
                      <option value="House">Residential House</option>
                      <option value="Apartment">Apartment / Unit</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="Commercial">Commercial Office</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Number of Rooms / Areas
                    </label>
                    <select
                      value={formData.rooms}
                      onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-white text-sm"
                    >
                      <option value="1-2 Rooms">1 - 2 Rooms</option>
                      <option value="3 Rooms">3 Rooms (Standard)</option>
                      <option value="4 Rooms">4 Rooms</option>
                      <option value="5+ Rooms / Whole House">5+ Rooms / Whole House</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. 45 High Street"
                    className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                    Suburb / Location
                  </label>
                  <select
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] text-sm"
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name} ({loc.postalCode})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Date and Time */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-[#001b31]">
                  Step 3: Preferred Schedule
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] text-sm"
                    >
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Customer Details */}
            {step === 4 && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-[#001b31]">
                  Step 4: Customer Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0400 000 000"
                    className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                    Special Instructions / Stain Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any specific stains, parking instructions, or pet info..."
                    className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] text-sm"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Summary */}
            {step === 5 && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-[#001b31]">
                  Step 5: Review Booking Summary
                </h3>
                <div className="bg-[#e9f6fd] p-6 rounded-2xl border border-[#b1e8fa] space-y-3 text-sm">
                  <div className="flex justify-between border-b border-[#ddeaf2] pb-2">
                    <span className="text-[#73777e]">Selected Service:</span>
                    <span className="font-bold text-[#001b31]">{selectedService.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ddeaf2] pb-2">
                    <span className="text-[#73777e]">Estimated Starting Price:</span>
                    <span className="font-bold text-[#2d6675]">{selectedService.price}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ddeaf2] pb-2">
                    <span className="text-[#73777e]">Property / Scope:</span>
                    <span className="font-bold text-[#001b31]">{formData.propertyType} ({formData.rooms})</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ddeaf2] pb-2">
                    <span className="text-[#73777e]">Address:</span>
                    <span className="font-bold text-[#001b31]">{formData.address}, {formData.suburb}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ddeaf2] pb-2">
                    <span className="text-[#73777e]">Date & Time:</span>
                    <span className="font-bold text-[#001b31]">{formData.preferredDate} ({formData.preferredTime})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#73777e]">Contact Details:</span>
                    <span className="font-bold text-[#001b31]">{formData.fullName} ({formData.phone})</span>
                  </div>
                </div>

                <div className="p-4 bg-[#f4faff] rounded-xl border border-[#d7e4ec] flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#2d6675] shrink-0" />
                  <p className="text-xs text-[#43474d]">
                    No immediate charge. Our technician will confirm final scope on-site before commencing work.
                  </p>
                </div>
              </div>
            )}

            {/* Step Navigation Controls */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-[#ddeaf2]">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 border border-[#73777e] text-[#001b31] rounded-xl font-semibold text-sm hover:bg-[#e9f6fd] flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
              ) : <div />}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3.5 bg-[#001b31] text-white rounded-xl font-semibold text-sm hover:bg-[#12304a] transition-all flex items-center gap-2"
                >
                  Next Step <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3.5 bg-[#001b31] text-white rounded-xl font-semibold text-sm hover:bg-[#12304a] transition-all shadow-md flex items-center gap-2"
                >
                  Confirm & Reserve Booking <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
