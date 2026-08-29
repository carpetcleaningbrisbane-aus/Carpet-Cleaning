'use client';

import { useState } from 'react';
import { REVIEWS } from '@/data/siteData';
import { Star, CheckCircle2, ThumbsUp, MessageSquare, Send } from 'lucide-react';

export default function FeedbackPage() {
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const [formData, setFormData] = useState({
    author: '',
    location: '',
    service: 'Steam Carpet Cleaning',
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.author || !formData.comment) return;

    const newReview = {
      id: `r-${Date.now()}`,
      author: formData.author,
      location: formData.location || 'Melbourne',
      rating: rating,
      date: 'Just now',
      service: formData.service,
      comment: formData.comment,
      verified: true,
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Banner */}
      <section className="bg-[#e9f6fd] py-16 px-5 md:px-16 border-b border-[#d7e4ec] mb-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
            Customer Feedback & Reviews
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#001b31] mb-6">
            Client Testimonials
          </h1>
          <p className="text-base md:text-lg text-[#43474d] max-w-xl mx-auto leading-relaxed">
            Read verified reviews from local homeowners or share your experience with FreshNest Carpet Care.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Write a Review Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-[#d7e4ec] ambient-shadow sticky top-28">
              <h3 className="font-display font-bold text-2xl text-[#001b31] mb-2">
                Leave a Review
              </h3>
              <p className="text-xs text-[#43474d] mb-6">
                Your feedback helps us continuously elevate our service quality.
              </p>

              {submitted ? (
                <div className="p-6 bg-[#e9f6fd] rounded-2xl text-center space-y-3 border border-[#b1e8fa]">
                  <CheckCircle2 className="w-8 h-8 text-[#2d6675] mx-auto" />
                  <h4 className="font-bold text-lg text-[#001b31]">Thank You!</h4>
                  <p className="text-xs text-[#43474d]">
                    Your review has been published below. We appreciate your feedback!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ author: '', location: '', service: 'Steam Carpet Cleaning', comment: '' });
                    }}
                    className="text-xs text-[#2d6675] font-bold underline"
                  >
                    Submit another review
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Overall Rating
                    </label>
                    <div className="flex gap-1 text-[#D5A85A]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              (hoverRating || rating) >= star ? 'fill-current' : 'text-[#c3c7ce]'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#c3c7ce] text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Location / Suburb
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Toorak"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#c3c7ce] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Service Received
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#c3c7ce] text-sm"
                    >
                      <option value="Steam Carpet Cleaning">Steam Carpet Cleaning</option>
                      <option value="Stain & Spot Removal">Stain & Spot Removal</option>
                      <option value="Upholstery Care">Upholstery Care</option>
                      <option value="Area Rug Cleaning">Area Rug Cleaning</option>
                      <option value="Pet Odor Elimination">Pet Odor Elimination</option>
                      <option value="End of Lease Cleaning">End of Lease Cleaning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#001b31] uppercase tracking-wider mb-2">
                      Your Feedback *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Describe your cleaning experience..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#c3c7ce] text-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#001b31] text-white font-semibold rounded-xl text-sm hover:bg-[#12304a] transition-all flex items-center justify-center gap-2"
                  >
                    Submit Review <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Published Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center bg-[#e9f6fd] p-6 rounded-2xl border border-[#d7e4ec]">
              <div>
                <span className="font-display font-bold text-3xl text-[#001b31]">4.9 / 5.0</span>
                <p className="text-xs text-[#43474d] mt-1">Based on 140+ verified client ratings</p>
              </div>
              <div className="flex text-[#D5A85A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {reviewsList.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-8 rounded-3xl border border-[#d7e4ec] ambient-shadow space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-[#001b31]">{rev.author}</h4>
                      <span className="text-xs text-[#73777e]">
                        {rev.location} • {rev.service}
                      </span>
                    </div>
                    <div className="flex text-[#D5A85A]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-[#43474d] leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#ddeaf2] text-xs text-[#73777e]">
                    <span>{rev.date}</span>
                    <span className="flex items-center gap-1 text-[#2d6675] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Customer
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
