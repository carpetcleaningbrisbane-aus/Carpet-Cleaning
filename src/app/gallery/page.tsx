'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GALLERY_ITEMS, GalleryItem } from '@/data/siteData';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'carpet' | 'stain' | 'upholstery' | 'rug'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Header Banner */}
      <section className="bg-[#e9f6fd] py-16 px-5 md:px-16 border-b border-[#d7e4ec] mb-12">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6675] mb-2 block">
            Visual Results Gallery
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#001b31] mb-6">
            Before & After Showcase
          </h1>
          <p className="text-base md:text-lg text-[#43474d] max-w-2xl mx-auto leading-relaxed">
            Witness the transformational power of our deep steam extraction and specialized stain restoration techniques.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'carpet', label: 'Carpet Restoration' },
            { id: 'stain', label: 'Stain Lifting' },
            { id: 'upholstery', label: 'Upholstery Care' },
            { id: 'rug', label: 'Specialty Rugs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-[#001b31] text-white shadow-md'
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#d7e4ec] ambient-shadow hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Before / After Dual Image Display */}
              <div className="grid grid-cols-2 h-[260px] sm:h-[320px] relative overflow-hidden bg-gray-100">
                <div className="relative border-r-2 border-white overflow-hidden">
                  <img
                    src={item.beforeImage}
                    alt={`${item.title} Before`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                    BEFORE
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={item.afterImage}
                    alt={`${item.title} After`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-[#2d6675] text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                    AFTER
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2d6675] mb-2">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-[#001b31] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#43474d] leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#ddeaf2]">
                  <span className="text-xs font-semibold text-[#001b31] inline-flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-[#D5A85A]" /> Carpet Cleaner Verified
                  </span>
                  <span className="text-xs text-[#2d6675] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Expand Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-[#e9f6fd] p-10 rounded-3xl border border-[#d7e4ec]">
          <h3 className="font-display font-bold text-2xl text-[#001b31] mb-3">
            Want Similar Results for Your Home?
          </h3>
          <p className="text-sm text-[#43474d] mb-6 max-w-md mx-auto">
            Book our certified cleaning team today and experience pristine carpet restoration firsthand.
          </p>
          <Link
            href="/book-now"
            className="px-8 py-3.5 bg-[#001b31] text-white rounded-lg font-semibold text-sm hover:bg-[#12304a] transition-all shadow-md inline-block"
          >
            Schedule Your Clean
          </Link>
        </div>
      </section>

      {/* Modal Preview */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#e9f6fd] text-[#001b31] font-bold flex items-center justify-center hover:bg-[#b4ebfd] transition-colors"
            >
              ✕
            </button>
            <h3 className="font-display font-bold text-2xl text-[#001b31] mb-4">
              {selectedItem.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 h-[300px]">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={selectedItem.beforeImage}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded">
                  BEFORE CLEANING
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={selectedItem.afterImage}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#2d6675] text-white text-xs font-bold px-2.5 py-1 rounded">
                  AFTER FRESHNEST CLEAN
                </span>
              </div>
            </div>
            <p className="text-sm text-[#43474d] mb-6 leading-relaxed">
              {selectedItem.description}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 border border-[#73777e] text-[#001b31] rounded-lg font-semibold text-sm hover:bg-[#e9f6fd]"
              >
                Close
              </button>
              <Link
                href="/book-now"
                className="px-5 py-2.5 bg-[#001b31] text-white rounded-lg font-semibold text-sm hover:bg-[#12304a]"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
