export interface MataPelajaran {
    id: string;
    matpel: string;
    jenis_matpel: string;
    matpel_jurusan: string | null;
    jam: number | null;
    created_at: Date;
    updated_at: Date;
  }