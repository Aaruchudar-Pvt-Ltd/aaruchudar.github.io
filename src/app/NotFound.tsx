import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">404</p>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-slate-300 mb-8">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-cyan-500 text-slate-950"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
