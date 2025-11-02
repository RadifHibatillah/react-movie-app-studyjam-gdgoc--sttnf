import { Plus } from "lucide-react";
import { MovieModal, MovieList } from "../components";
import { useMovieList, useMovieModal } from "../hooks";

export default function MoviePage() {
  const { movies, loading, error, createMovie, updateMovie, deleteMovie } = useMovieList();

  const { isModalOpen, editingMovie, openAddModal, openEditModal, closeModal, saveMovie, removeMovie } = useMovieModal({
    onCreate: createMovie,
    onUpdate: updateMovie,
    onDelete: deleteMovie,
  });

  return (
    <>
      {/* header-nya */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Daftar Film</h2>
          <p className="text-slate-400 text-sm">atur koleksi film favorit kamu</p>
        </div>
        <button onClick={openAddModal} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition">
          <Plus size={18} />
          Tambah
        </button>
      </div>

      {/* list film */}
      <MovieList movies={movies} loading={loading} error={error} onEdit={openEditModal} onDelete={removeMovie} />

      {/* modal form */}
      <MovieModal isOpen={isModalOpen} title={editingMovie ? "Edit Film" : "Tambah Film"} initialData={editingMovie} onSubmit={saveMovie} onClose={closeModal} />
    </>
  );
}
