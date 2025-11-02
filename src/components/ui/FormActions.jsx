import { Check, Plus } from "lucide-react";

export default function FormActions({ onCancel, isEdit = false }) {
  const submitLabel = isEdit ? "Simpan Perubahan" : "Buat Film";
  const submitColor = isEdit ? "bg-yellow-600 hover:bg-yellow-700" : "bg-indigo-600 hover:bg-indigo-700";

  return (
    <div className="flex gap-2 mt-4">
      <button type="button" onClick={onCancel} className="flex-1 px-3 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded font-semibold text-sm transition">
        Batal
      </button>
      <button type="submit" className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-white rounded font-semibold text-sm transition ${submitColor}`}>
        <Check size={16} />
        {submitLabel}
      </button>
    </div>
  );
}
