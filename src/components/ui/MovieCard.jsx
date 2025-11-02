import { Edit2, Trash2, Clock, Calendar, User } from "lucide-react";

export default function MovieCard({ movie, onEdit, onDelete }) {
  // Kadang data genre bisa string atau array, biar aman kita pastiin array aja
  const genres = Array.isArray(movie.genre) ? movie.genre : [];

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-slate-700 flex flex-col h-full">
      {/* Bagian poster film */}
      <div className="relative h-56 overflow-hidden bg-linear-to-br from-blue-600 to-purple-600">
        {movie.poster_url ? (
          <img
            src={movie.poster_url}
            alt={movie.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl">🎬</span>
          </div>
        )}

        {/* Lencana rating (pojok kanan atas) */}
        <div className="absolute top-3 right-3 bg-amber-100 text-black px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1">
          <span>⭐</span>
          {movie.rating}
        </div>
      </div>

      {/* Isi dari kartu film */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{movie.title}</h3>

        {/* Sutradara */}
        {movie.director && (
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
            <User size={14} />
            <span>{movie.director}</span>
          </div>
        )}

        {/* Genre */}
        {genres.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {genres.map((genre, idx) => (
              <span key={idx} className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs font-semibold">
                {genre}
              </span>
            ))}
          </div>
        )}

        {/* Deskripsi singkat */}
        {movie.description && <p className="text-slate-400 text-sm mb-3 line-clamp-2 flex-1">{movie.description}</p>}

        {/* Info tambahan kayak tanggal rilis & durasi */}
        <div className="flex items-center gap-4 text-slate-400 text-xs mb-4 py-2 border-t border-slate-700">
          {movie.release_date && (
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{new Date(movie.release_date).toLocaleDateString("id-ID")}</span>
            </div>
          )}
          {movie.duration_minutes && (
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{movie.duration_minutes} min</span>
            </div>
          )}
        </div>

        {/* Tombol Edit & Hapus */}
        <div className="flex gap-2 mt-auto">
          <button onClick={() => onEdit(movie)} className="flex-1 flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg font-semibold transition">
            <Edit2 size={16} />
            Edit
          </button>
          <button onClick={() => onDelete(movie.id)} className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition">
            <Trash2 size={16} />
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
