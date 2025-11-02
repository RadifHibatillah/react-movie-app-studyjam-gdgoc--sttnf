import { AlertCircle, X } from 'lucide-react';

export default function ErrorAlert({ message, onClose }) {
  return (
    <div className="mb-6 p-4 bg-red-900/30 border border-red-600 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-3">
        <AlertCircle className="text-red-400" size={20} />
        <span className="text-red-300">{message}</span>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-red-300 hover:text-red-200 transition">
          <X size={20} />
        </button>
      )}
    </div>
  );
}