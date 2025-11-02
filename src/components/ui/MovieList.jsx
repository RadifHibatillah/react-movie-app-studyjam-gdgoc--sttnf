import { MovieCard, ErrorAlert } from "../../components";

export default function MovieList({ movies, loading, error, onEdit, onDelete }) {
  // fase error
  {
    error && <ErrorAlert message={error} />;
  }

  // fase kalo lagi loading
  if (loading) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-slate-400 font-medium">Memuat data film...</p>
      </div>
    );
  }

  // kalo filmnya kosong
  if (movies.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-slate-400 font-medium">Belum ada film bosssss 🎬</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
