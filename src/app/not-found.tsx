import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 px-5 text-center max-w-[600px] mx-auto min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-[#F2F8FC] text-[#082B59] font-display font-bold text-2xl flex items-center justify-center mb-6 border border-[#1261A0]/20">
        404
      </div>
      <h1 className="font-display font-bold text-4xl text-[#082B59] mb-4">
        Page Not Found
      </h1>
      <p className="text-base text-[#082B59]/80 mb-8 leading-relaxed">
        The page you are looking for might have been moved or does not exist. Let us guide you back to our cleaning services.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 bg-[#082B59] text-white rounded-xl font-semibold text-sm hover:bg-[#00B8D9] transition-all shadow-md"
      >
        Return to Home Page
      </Link>
    </div>
  );
}
