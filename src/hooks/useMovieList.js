import { useState, useEffect, useCallback } from "react";
import * as movieService from "../services/movieService";

/**
 * Hook buat mengatur data film (ambil, tambah, ubah, hapus)
 */
export const useMovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // Ambil semua data film
  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setFetchError(null);
    try {
      const result = await movieService.getAllMovies();
      setMovieList(Array.isArray(result) ? result : []);
    } catch (err) {
      setFetchError(err.message || "Gagal memuat data");
      setMovieList([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Tambah data film baru
  const addMovie = useCallback(
    async (data) => {
      console.log("📦 Data dikirim ke API:", data); // 🔍 tambahin ini buat ngecek isi data

      try {
        const movie = await movieService.createMovie(data);
        setMovieList((prev) => [...prev, movie]);
        fetchMovies();
        return { success: true };
      } catch (err) {
        console.error("🚨 Error waktu kirim data:", err);
        return { success: false, error: err.message };
      }
    },
    [fetchMovies]
  );

  // Update data film
  const editMovie = useCallback(
    async (id, data) => {
      try {
        const updated = await movieService.updateMovie(id, data);
        setMovieList((prev) => prev.map((item) => (item.id === id ? updated : item)));
        fetchMovies();
        return { success: true };
      } catch (err) {
        return { success: false, error: err.message };
      }
    },
    [fetchMovies]
  );

  // Hapus film berdasarkan id
  const removeMovie = useCallback(
    async (id) => {
      try {
        await movieService.deleteMovie(id);
        setMovieList((prev) => prev.filter((item) => item.id !== id));
        fetchMovies();
        return { success: true };
      } catch (err) {
        return { success: false, error: err.message };
      }
    },
    [fetchMovies]
  );

  return {
    movies: movieList,
    loading: isLoading,
    error: fetchError,
    createMovie: addMovie,
    updateMovie: editMovie,
    deleteMovie: removeMovie,
    loadMovies: fetchMovies,
  };
};
