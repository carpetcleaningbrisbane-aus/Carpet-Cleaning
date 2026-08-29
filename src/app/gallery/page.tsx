'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { GALLERY_ITEMS, GalleryItem } from '@/data/siteData';
import { ArrowRight, X, ChevronLeft, ChevronRight, Star, GripVertical } from 'lucide-react';

const FILTERS = [
  { id: 'all', label: 'All Results' },
  { id: 'carpet', label: 'Carpet' },
  { id: 'stain', label: 'Stain Removal' },
  { id: 'upholstery', label: 'Upholstery' },
  { id: 'rug', label: 'Rugs' },
];

const CATEGORY_COLORS: Record<string, string> = {
  carpet: 'bg-blue-100 text-blue-800',
  stain: 'bg-amber-100 text-amber-800',
  upholstery: 'bg-purple-100 text-purple-800',
  rug: 'bg-emerald-100 text-emerald-800',
};

/* ── Drag-to-reveal Before/After Slider ── */
function BeforeAfterSlider({ beforeImage, afterImage, title }: { beforeImage: string; afterImage: string; title: string }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-64 md:h-80 overflow-hidden select-none cursor-col-resize bg-[#f4faff]"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseUp}
    >
      {/* AFTER image — full width base */}
      <img
        src={afterImage}
        alt={`${title} after`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* BEFORE image — clipped to left of slider */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImage}
          alt={`${title} before`}
          className="absolute inset-0 h-full object-cover pointer-events-none"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none' }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Drag handle */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center z-10 transition-transform duration-100 ${isDragging ? 'scale-110' : 'scale-100'}`}
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <GripVertical className="w-5 h-5 text-[#2d6675]" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-black/60 text-white rounded-full backdrop-blur-sm">
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#2d6675]/90 text-white rounded-full backdrop-blur-sm">
          After
        </span>
      </div>

      {/* Drag hint — fades after first interaction */}
      {position === 50 && !isDragging && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2 animate-pulse">
            <ChevronLeft className="w-3.5 h-3.5 text-[#2d6675]" />
            <span className="text-xs font-bold text-[#001b31]">Drag to compare</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#2d6675]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const closeModal = () => setSelectedIdx(null);
  const prevModal = () => setSelectedIdx((i) => (i !== null ? (i > 0 ? i - 1 : filteredItems.length - 1) : 0));
  const nextModal = () => setSelectedIdx((i) => (i !== null ? (i < filteredItems.length - 1 ? i + 1 : 0) : 0));

  const selectedItem = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  return (
    <div className="pt-24 md:pt-32 pb-24">

      {/* Hero Banner — real photo background (before/after transformation) */}
      <section className="relative py-24 md:py-32 px-5 md:px-16 mb-16 overflow-hidden">
        {/* Background photo */}
        <img
          src="/gallery-banner.png"
          alt="Before and after carpet cleaning transformation in a Brisbane home"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Neutral dark overlay — readable text, natural photo colors */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/45" />

        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
            <div className="flex text-[#D5A85A]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
            </div>
            <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">Real Results, Real Homes</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight drop-shadow-lg">
            Before & After <span className="text-[#b4ebfd]">Showcase</span>
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Drag the slider on each photo to reveal the transformation — real results from real Brisbane homes and businesses.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {FILTERS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${filter === tab.id
                ? 'bg-[#001b31] text-white shadow-md scale-105'
                : 'bg-white text-[#43474d] hover:bg-[#e9f6fd] border border-[#d7e4ec]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#d7e4ec] shadow-sm hover:shadow-xl hover:border-[#b1e8fa] transition-all duration-300"
            >
              {/* Drag-to-reveal slider */}
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                title={item.title}
              />

              {/* Card footer */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full capitalize inline-block mb-2 ${CATEGORY_COLORS[item.category]}`}>
                      {item.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#001b31] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedIdx(idx)}
                    className="shrink-0 w-9 h-9 rounded-full bg-[#e9f6fd] flex items-center justify-center group-hover:bg-[#001b31] transition-colors duration-300"
                    aria-label="Expand"
                  >
                    <ArrowRight className="w-4 h-4 text-[#2d6675] group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>
                <p className="text-xs text-[#73777e] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-[#73777e]">
            <p className="text-base">No results found for this category yet.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 relative overflow-hidden bg-[#001b31] rounded-3xl p-10 md:p-14 text-center">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#0094B8]/20 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">Want Results Like These?</h3>
            <p className="text-white/65 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Book our certified cleaning team and experience the same transformation in your home or business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/book-now" className="px-8 py-3.5 bg-[#b4ebfd] text-[#001b31] rounded-xl font-bold text-sm hover:bg-white transition-all shadow-md">
                Book Your Clean Now
              </Link>
              <Link href="/contact" className="px-8 py-3.5 border border-white/30 text-white rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">
                Ask Us a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-7 py-5 border-b border-[#ddeaf2]">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full capitalize ${CATEGORY_COLORS[selectedItem.category]}`}>
                  {selectedItem.category}
                </span>
                <h3 className="font-display font-bold text-xl text-[#001b31]">{selectedItem.title}</h3>
              </div>
              <button onClick={closeModal} className="w-9 h-9 rounded-full bg-[#f4faff] hover:bg-[#e9f6fd] flex items-center justify-center transition-colors">
                <X className="w-4 h-4 text-[#001b31]" />
              </button>
            </div>

            {/* Full slider in modal */}
            <div className="h-80 md:h-[420px]">
              <BeforeAfterSlider
                beforeImage={selectedItem.beforeImage}
                afterImage={selectedItem.afterImage}
                title={selectedItem.title}
              />
            </div>

            <div className="px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-[#43474d] leading-relaxed max-w-lg">{selectedItem.description}</p>
              <Link
                href="/book-now"
                className="px-5 py-2.5 bg-[#001b31] text-white rounded-xl font-semibold text-sm hover:bg-[#12304a] transition-all inline-flex items-center gap-2 shrink-0"
              >
                Book This Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <button onClick={prevModal} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#e9f6fd] transition-colors">
              <ChevronLeft className="w-5 h-5 text-[#001b31]" />
            </button>
            <button onClick={nextModal} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#e9f6fd] transition-colors">
              <ChevronRight className="w-5 h-5 text-[#001b31]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}