import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 px-5 text-center max-w-[600px] mx-auto min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-[#E8F7F7]/50 text-[#0B253A] font-display font-bold text-2xl flex items-center justify-center mb-6">
        404
      </div>
      <h1 className="font-display font-bold text-4xl text-[#0B253A] mb-4">
        Page Not Found
      </h1>
      <p className="text-base text-[#102A3A] mb-8 leading-relaxed">
        The page you are looking for might have been moved or does not exist. Let us guide you back to our cleaning services.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 bg-[#0B253A] text-white rounded-xl font-semibold text-sm hover:bg-[#159A9C] transition-all shadow-md"
      >
        Return to Home Page
      </Link>
    </div>
  );
}
