import { useState } from "react";

/**
 * Hook buat handle modal tambah/edit film
 */
export const useMovieModal = ({ onCreate, onUpdate, onDelete }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingMovie, setEditing] = useState(null);

  // buka modal tambah
  const openAddModal = () => {
    setEditing(null);
    setModalOpen(true);
  };

  // buka modal edit
  const openEditModal = (movie) => {
    setEditing(movie);
    setModalOpen(true);
  };

  // tutup modal
  const closeModal = () => {
    setModalOpen(false);
    setEditing(null);
  };

  // simpen data (buat tambah/update)
  const saveMovie = async (formData) => {
    const res = editingMovie ? await onUpdate(editingMovie.id, formData) : await onCreate(formData);

    if (res.success) closeModal();
    else alert(`gagal nyimpen film: ${res.error}`);
  };

  // hapus film (konfirmasi dulu)
  const removeMovie = async (id) => {
    if (!confirm("hapus film ini?")) return;
    await onDelete(id);
  };

  return {
    isModalOpen,
    editingMovie,
    openAddModal,
    openEditModal,
    closeModal,
    saveMovie,
    removeMovie,
  };
};
