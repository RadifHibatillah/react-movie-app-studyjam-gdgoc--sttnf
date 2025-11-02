export default function Input({ label, name, type = 'text', placeholder, register, errors, step }) {
  const errorMessage = errors?.[name]?.message;
  return (
    <div>
      <label className="block text-slate-300 text-xs font-semibold mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        step={step}
        {...register?.(name)}
        className={`w-full bg-slate-700 text-white px-3 py-1.5 rounded text-sm border ${errorMessage ? 'border-red-500' : 'border-slate-600'
          } focus:border-blue-500 outline-none`}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs mt-0.5">{errorMessage}</p>
      )}
    </div>
  );
}