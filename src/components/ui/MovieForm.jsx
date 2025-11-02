import { Input, TextArea, FormActions } from '../../components';
import { useMovieForm } from '../../hooks';

export default function MovieForm({ initialData, onSubmit, onCancel }) {
  const {
    register,
    formState: { errors },
    handleFormSubmit,
  } = useMovieForm(initialData, onSubmit);

  return (
    <form onSubmit={handleFormSubmit} className="space-y-2.5">

      {/* Row 1: Title & Director */}
      <div className="grid grid-cols-2 gap-2">
        <Input label="Judul" name="title" placeholder="Inception" register={register} errors={errors} />
        <Input label="Direktur" name="director" placeholder="Christopher Nolan" register={register} errors={errors} />
      </div>

      {/* Row 2: Release Date & Rating */}
      <div className="grid grid-cols-2 gap-2">
        <Input label="Tanggal Rilis" name="release_date" type="date" register={register} errors={errors} />
        <Input label="Rating (0-10)" name="rating" type="number" step="0.1" placeholder="8.8" register={register} errors={errors} />
      </div>

      {/* Row 3: Duration & Genre */}
      <div className="grid grid-cols-2 gap-2">
        <Input label="Durasi (menit)" name="duration_minutes" type="number" placeholder="148" register={register} errors={errors} />
        <Input label="Genre" name="genre" placeholder="Action, Sci-Fi" register={register} errors={errors} />
      </div>

      {/* Poster URL */}
      <Input label="URL Poster" name="poster_url" type="url" placeholder="https://example.com/poster.jpg" register={register} errors={errors} />

      {/* Description */}
      <TextArea label="Deskripsi" name="description" placeholder="Jelaskan tentang film ini..." register={register} errors={errors} rows={2} />

      {/* Actions */}
      <FormActions onCancel={onCancel} isEdit={!!initialData} />
    </form>
  );
}