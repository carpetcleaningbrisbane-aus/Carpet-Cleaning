'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    // Simulate UI form submission
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Header Banner */}
      <section className="bg-[#e9f6fd] py-16 px-5 md:px-16 border-b border-[#d7e4ec] mb-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
            We Are Here to Help
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#001b31] mb-6">
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-[#43474d] max-w-2xl mx-auto leading-relaxed">
            Have questions about our steam cleaning process or custom stain treatments? Send us a message and our team will respond within 2 business hours.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-[#d7e4ec] ambient-shadow">
              <h3 className="font-display font-bold text-2xl text-[#001b31] mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b4ebfd]/30 flex items-center justify-center text-[#2d6675] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#73777e] uppercase tracking-wider">Call Us</h4>
                    <p className="text-base font-semibold text-[#001b31] mt-1">(03) 9123 4567</p>
                    <p className="text-xs text-[#43474d]">Mon-Sat: 7:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b4ebfd]/30 flex items-center justify-center text-[#2d6675] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#73777e] uppercase tracking-wider">Email Support</h4>
                    <p className="text-base font-semibold text-[#001b31] mt-1">hello@freshnestclean.com.au</p>
                    <p className="text-xs text-[#43474d]">Average response: 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b4ebfd]/30 flex items-center justify-center text-[#2d6675] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#73777e] uppercase tracking-wider">Headquarters</h4>
                    <p className="text-sm font-semibold text-[#001b31] mt-1">
                      120 Collins Street, Suite 1400<br />
                      Melbourne VIC 3000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#b4ebfd]/30 flex items-center justify-center text-[#2d6675] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#73777e] uppercase tracking-wider">Hours of Operation</h4>
                    <p className="text-xs text-[#43474d] mt-1">Monday - Friday: 7:00am - 7:00pm</p>
                    <p className="text-xs text-[#43474d]">Saturday: 8:00am - 5:00pm</p>
                    <p className="text-xs text-[#43474d]">Sunday: Emergency cleans only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#d7e4ec] ambient-shadow">
              <h3 className="font-display font-bold text-2xl text-[#001b31] mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-[#43474d] mb-8">
                Fill out the form below and our customer care team will get back to you shortly.
              </p>

              {status === 'success' ? (
                <div className="bg-[#e9f6fd] border border-[#b1e8fa] text-[#001b31] p-8 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#b4ebfd] flex items-center justify-center mx-auto text-[#2d6675]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-2xl">Message Sent Successfully!</h4>
                  <p className="text-sm text-[#43474d] max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. We have received your message regarding {formData.service} and will contact you via phone or email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', phone: '', service: 'Steam Carpet Cleaning', message: '' });
                    }}
                    className="px-6 py-2.5 bg-[#001b31] text-white rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-[#f4faff]/50 text-[#001b31] focus:outline-none focus:border-[#001b31] focus:bg-white text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-[#f4faff]/50 text-[#001b31] focus:outline-none focus:border-[#001b31] focus:bg-white text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(04) 0000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-[#f4faff]/50 text-[#001b31] focus:outline-none focus:border-[#001b31] focus:bg-white text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-[#f4faff]/50 text-[#001b31] focus:outline-none focus:border-[#001b31] focus:bg-white text-sm"
                      >
                        <option value="Steam Carpet Cleaning">Steam Carpet Cleaning</option>
                        <option value="Stain & Spot Removal">Stain & Spot Removal</option>
                        <option value="Upholstery Care">Upholstery Care</option>
                        <option value="Area Rug Cleaning">Area Rug & Specialty Care</option>
                        <option value="Pet Odor Elimination">Pet Odor Elimination</option>
                        <option value="End of Lease Cleaning">End of Lease Cleaning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please tell us about your carpets, room count, or any specific stains..."
                      className="w-full px-4 py-3 rounded-xl border border-[#c3c7ce] bg-[#f4faff]/50 text-[#001b31] focus:outline-none focus:border-[#001b31] focus:bg-white text-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-[#001b31] text-white font-semibold rounded-xl text-base hover:bg-[#12304a] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      'Sending Message...'
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
