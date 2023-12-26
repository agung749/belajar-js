export interface Guru {
    id: string;
    id_user: string;
    nip: string;
    nama: string;
    jenis_kelamin: string;
    tanggal_lahir: Date;
    tempat_lahir: string;
    agama: string;
    jalan: string;
    kecamatan: string;
    kelurahan: string;
    rt: string;
    rw: string;
    tingkat_pendidikan: string;
    gelar_pendidikan: string | null;
    status_perkawinan: string | null;
    jumlah_anak: number | null;
    email: string | null;
    nomor_telepon: string | null;
    foto_profil: string | null;
    created_at: Date;
    updated_at: Date;
  }