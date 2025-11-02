import { X } from "lucide-react";
import { MovieForm } from "../../components";

export default function MovieModal({ isOpen, title, initialData, onSubmit, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-xl w-full max-w-lg p-6 border border-slate-700 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        <MovieForm initialData={initialData} onSubmit={onSubmit} onCancel={onClose} />
      </div>
    </div>
  );
}
