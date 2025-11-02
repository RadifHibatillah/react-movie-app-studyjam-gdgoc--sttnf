import { z } from "zod";

// Skema validasi untuk data film
export const movieSchema = z.object({
  title: z.string().min(1, "Judul wajib diisi ya"),
  description: z.string().min(1, "Deskripsi jangan dikosongin"),
  poster_url: z.string().url("Link posternya gak valid, coba cek lagi"),
  release_date: z.string().min(1, "Tanggal rilis harus diisi"),
  rating: z.coerce.number().min(1, "Rating gak boleh di bawah 1").max(10, "Rating cuma boleh 1–10 aja"),
  duration_minutes: z.coerce.number().min(10, "Durasi minimal 10 menit biar masuk akal"),
  director: z.string().min(1, "Nama sutradara jangan lupa diisi"),
  genre: z
    .string()
    .default("")
    .transform((v) =>
      v
        .split(",")
        .map((g) => g.trim())
        .filter(Boolean)
    )
    .refine((arr) => arr.length > 0, {
      message: "Isi minimal satu genre, pisahkan pakai koma ya",
    }),
});
