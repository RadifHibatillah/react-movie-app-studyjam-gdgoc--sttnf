import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { movieSchema } from "../schemas/movieSchema";

/**
 * Hook untuk mengelola form movie
 * @param {*} initialData 
 * @param {*} onSubmit 
 * @returns { register, formState: { errors }, handleFormSubmit }
 */
export const useMovieForm = (initialData, onSubmit) => {
  const form = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues: formatInitialData(initialData),
  });

  const { reset, handleSubmit } = form;

  useEffect(() => {
    if (initialData) {
      reset(formatInitialData(initialData));
    }
  }, [initialData, reset]);

  const handleFormSubmit = handleSubmit((data) => {
    const formatted = formatSubmitData(data);
    onSubmit(formatted);
    reset();
  });

  return { ...form, handleFormSubmit };
};

/* 🔧 Helper untuk format data masuk */
function formatInitialData(data) {
  if (!data) return {};

  return {
    ...data,
    release_date: data.release_date
      ? new Date(data.release_date).toISOString().split("T")[0]
      : "",
    genre: Array.isArray(data.genre) ? data.genre.join(", ") : data.genre || "",
  };
}

/* 🔧 Helper untuk format data keluar (kirim ke backend) */
function formatSubmitData(data) {
  return {
    ...data,
    genre: Array.isArray(data.genre)
      ? data.genre
      : data.genre
        ? data.genre.split(",").map((g) => g.trim())
        : [],
  };
}
