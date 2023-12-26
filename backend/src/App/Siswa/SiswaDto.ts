export interface SiswaDto {
    id: string;
    id_user: string;
    nama: string;
    telphone: string;
    nik: string;
    nik_ibu: string;
    nik_ayah: string;
    nik_wali: string;
    no_ayah: string;
    no_ibu: string;
    no_wali: string;
    rt: string;
    rw: string;
    jalan: string;
    provice_id: string;
    regency_id: string;
    district_id: string;
    penghasilan_ayah: number;
    penghasilan_ibu: number;
    pekerjaan_wali: number;
    keadaan_wali: string;
    keadaan_ibu: string;
    keadaan_ayah: string;
    anak_ke: string;
    total_saudara: string;
    nisn: string;
    kip: string;
    pkh: string;
    status: string;
    jurusan: string | null;
    kelas: string | null;
    created_at: Date;
    updated_at: Date;
  }
  