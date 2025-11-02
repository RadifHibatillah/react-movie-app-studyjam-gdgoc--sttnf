export default function TextArea({ label, name, placeholder, register, errors, rows = 2 }) {
  const errorMessage = errors?.[name]?.message;
  return (
    <div>
      <label className="block text-slate-300 text-xs font-semibold mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        placeholder={placeholder}
        rows={rows}
        {...register?.(name)}
        className={`w-full bg-slate-700 text-white px-3 py-1.5 rounded text-sm border ${errorMessage ? 'border-red-500' : 'border-slate-600'
          } focus:border-blue-500 outline-none resize-none`}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs mt-0.5">{errorMessage}</p>
      )}
    </div>
  );
}