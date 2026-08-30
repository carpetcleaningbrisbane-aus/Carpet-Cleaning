'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, MessageSquare, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Steam Carpet Cleaning',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        const data = await res.json();
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  const contactItems = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call Us',
      primary: '0435 071 625',
      secondary: 'Mon–Sat: 7:00 AM – 7:00 PM',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email Support',
      primary: 'info.theexpertcleaner@gmail.com',
      secondary: 'Average response: 2 hours',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Service Area',
      primary: 'Brisbane & Surrounds',
      secondary: 'Greater Brisbane Region',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Opening Hours',
      primary: 'Mon – Fri: 7am – 7pm',
      secondary: 'Sat: 8am – 5pm · Sun: Emergencies',
    },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24">

      {/* Hero Banner */}
      <section className="relative bg-[#001b31] py-20 px-5 md:px-16 mb-20 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#0094B8]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#b4ebfd]/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-[#b4ebfd]" />
            <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">We Are Here to Help</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
            Get In <span className="text-[#b4ebfd]">Touch</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Have questions about our services or want to get a quote? Send us a message and our team will respond within 2 business hours.
          </p>
          {/* Quick contact chips */}
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:0435071625" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-semibold transition-all">
              <Phone className="w-4 h-4 text-[#b4ebfd]" /> 0435 071 625
            </a>
            <a href="mailto:info.theexpertcleaner@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-semibold transition-all">
              <Mail className="w-4 h-4 text-[#b4ebfd]" /> Email Us
            </a>
            <Link href="/book-now" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#b4ebfd] hover:bg-white rounded-full text-[#001b31] text-sm font-bold transition-all">
              Book Online <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left sidebar — contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactItems.map((item) => (
                <div key={item.label} className="bg-white rounded-2xl border border-[#d7e4ec] p-5 flex items-start gap-4 ambient-shadow hover:border-[#b1e8fa] transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[#e9f6fd] flex items-center justify-center text-[#2d6675] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#73777e] mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-[#001b31]">{item.primary}</p>
                    <p className="text-xs text-[#73777e] mt-0.5">{item.secondary}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Book CTA card */}
            <div className="bg-[#001b31] rounded-2xl p-7 text-white relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#0094B8]/20 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#b4ebfd] mb-3">Skip the Queue</p>
                <h3 className="font-display font-bold text-xl mb-3 leading-snug">Ready to book? Go online in 2 minutes.</h3>
                <p className="text-white/60 text-xs mb-5 leading-relaxed">No upfront payment. Pick your service, date and time instantly.</p>
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#b4ebfd] text-[#001b31] rounded-xl font-bold text-sm hover:bg-white transition-all"
                >
                  Book Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-[#d7e4ec] ambient-shadow overflow-hidden">
              {/* Form header strip */}
              <div className="bg-[#f4faff] border-b border-[#ddeaf2] px-8 md:px-10 py-6">
                <h2 className="font-display font-bold text-2xl text-[#001b31]">Send Us a Message</h2>
                <p className="text-sm text-[#73777e] mt-1">We'll get back to you within 2 business hours.</p>
              </div>

              <div className="px-8 md:px-10 py-8">
                {status === 'success' ? (
                  <div className="text-center py-10 space-y-5">
                    <div className="w-16 h-16 rounded-full bg-[#e9f6fd] border border-[#b1e8fa] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-[#2d6675]" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#001b31]">Thanks, we'll be in touch soon.</h3>
                    <p className="text-sm text-[#43474d] max-w-sm mx-auto leading-relaxed">
                      Hi <span className="font-bold text-[#001b31]">{formData.name}</span>, your message about <span className="font-semibold">{formData.service}</span> has come through. One of our team will get back to you at <span className="font-semibold text-[#001b31]">{formData.email}</span> or <span className="font-semibold text-[#001b31]">{formData.phone}</span> — usually within 2 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', phone: '', service: 'Steam Carpet Cleaning', message: '' });
                      }}
                      className="px-6 py-3 bg-[#001b31] text-white rounded-xl font-semibold text-sm hover:bg-[#12304a] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-[#f4faff]/60 text-[#001b31] text-sm focus:outline-none focus:border-[#2d6675] focus:bg-white transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-[#f4faff]/60 text-[#001b31] text-sm focus:outline-none focus:border-[#2d6675] focus:bg-white transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          inputMode="numeric"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => {
                            const digits = e.target.value.replace(/\D/g, '');
                            setFormData({ ...formData, phone: digits });
                          }}
                          placeholder="Phone Number"
                          className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-[#f4faff]/60 text-[#001b31] text-sm focus:outline-none focus:border-[#2d6675] focus:bg-white transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">Service Required</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-[#f4faff]/60 text-[#001b31] text-sm focus:outline-none focus:border-[#2d6675] focus:bg-white transition-colors"
                        >
                          <option>Steam Carpet Cleaning</option>
                          <option>End of Lease Cleaning</option>
                          <option>Office & Commercial Cleaning</option>
                          <option>Stain & Odour Removal</option>
                          <option>Carpet Shampooing</option>
                          <option>Carpet Water Extraction</option>
                          <option>Other / Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">Your Message *</label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-[#f4faff]/60 text-[#001b31] text-sm focus:outline-none focus:border-[#2d6675] focus:bg-white transition-colors resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 bg-[#001b31] text-white font-bold rounded-xl text-sm hover:bg-[#12304a] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>Send Message <Send className="w-4 h-4" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
