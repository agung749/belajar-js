"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTableIfNotExists("user", (table) => {
        table.string("id", 255).notNullable().primary();
        table.string("email", 180).notNullable().unique();
        table.string('password', 255).notNullable();
        table.string('role', 1).notNullable().defaultTo("1");
    }).createTableIfNotExists('jurusan', (table) => {
        table.string('id', 255).notNullable().primary();
        table.string('nama', 30).notNullable();
        table.timestamps(true);
    }).createTableIfNotExists('tahun_ajaran', (table) => {
        table.string('id', 255).notNullable().primary();
        table.string('tahun_ajaran', 10).notNullable();
        table.timestamps(true);
    }).createTable('guru', (table) => {
        table.string('id', 255).primary();
        table.string('id_user', 255).references('id').inTable('user');
        table.string('nip').unique().notNullable();
        table.string('nama').notNullable();
        table.string('jenis_kelamin').notNullable();
        table.date('tanggal_lahir').notNullable();
        table.string('tempat_lahir').notNullable();
        table.string('agama').notNullable();
        table.string('jalan').notNullable();
        table.string('kecamatan').notNullable();
        table.string('kelurahan').notNullable();
        table.string('rt').notNullable();
        table.string('rw').notNullable();
        table.string('tingkat_pendidikan').notNullable();
        table.string('gelar_pendidikan');
        table.string('status_perkawinan');
        table.integer('jumlah_anak');
        table.string('email');
        table.string('nomor_telepon');
        table.string('foto_profil');
        table.timestamps(true, true);
    }).createTableIfNotExists('mata_pelajaran', (table) => {
        table.string('id', 255).notNullable().primary();
        table.string('matpel', 30).notNullable();
        table.string('jenis_matpel', 1).notNullable();
        table.string('matpel_jurusan', 255).references('id').inTable('jurusan').nullable();
        table.tinyint('jam');
        table.timestamps(true);
    }).createTableIfNotExists('kelas', (table) => {
        table.string('id', 255).notNullable().primary();
        table.string('angkatan', 1).notNullable();
        table.string('tahun_ajaran').notNullable();
        table.string('status', 1).notNullable();
        table.string('akronim', 6).notNullable();
        table.string('id_jurusan', 255).references('id').inTable('jurusan');
        table.timestamps(true);
    }).createTableIfNotExists('mata_pelajaran_ampuan', (table) => {
        table.string('id', 255).primary();
        table.string('id_guru', 255).references('id').inTable('guru');
        table.string('id_matpel', 255).references('id').inTable('mata_pelajaran');
        table.string('id_kelas', 255).references('id').inTable('kelas');
        table.string('id_tahun_ajaran', 255).references('id').inTable('tahun_ajaran');
        table.timestamps(true);
    }).createTableIfNotExists('siswa', (table) => {
        table.string('id', 255).notNullable().primary();
        table.string('id_user', 255).references('id').inTable('user');
        table.string("nama", 100).notNullable();
        table.string('telphone', 16).notNullable().unique();
        table.string('nik', 16).notNullable().unique();
        table.string('nik_ibu', 16).notNullable().unique();
        table.string('nik_ayah', 16).notNullable().unique();
        table.string('nik_wali', 16).notNullable().unique();
        table.string('no_ayah', 14).notNullable().defaultTo('0');
        table.string('no_ibu', 14).notNullable().defaultTo('0');
        table.string('no_wali', 14).notNullable().defaultTo('0');
        table.string('rt', 3).notNullable();
        table.string('rw', 3).notNullable();
        table.string('jalan', 100).notNullable();
        table.string('provice_id', 14).notNullable();
        table.string('regency_id', 14).notNullable();
        table.string('district_id', 14).notNullable();
        table.mediumint('penghasilan_ayah').notNullable().defaultTo('0');
        table.mediumint('penghasilan_ibu').notNullable().defaultTo('0');
        table.mediumint('pekerjaan_wali').notNullable().defaultTo('0');
        table.string('keadaan_wali', 1).notNullable().defaultTo('0');
        table.string('keadaan_ibu', 1).notNullable().defaultTo('0');
        table.string('keadaan_ayah', 1).notNullable().defaultTo('0');
        table.string('anak_ke', 2).notNullable();
        table.string('total_saudara', 2).notNullable();
        table.string('nisn', 10).notNullable().defaultTo('0');
        table.string('kip', 16).notNullable().defaultTo('0');
        table.string('pkh', 16).notNullable().defaultTo('0');
        table.string('status', 1).notNullable().defaultTo('0');
        table.string('jurusan', 255).references('id').inTable('jurusan');
        table.string('kelas', 255).references('id').inTable('kelas');
        table.timestamps(true);
    }).createTableIfNotExists('nilai', (table) => {
        table.string('id', 255).primary();
        table.string('id_siswa', 255).references('id').inTable('guru');
        table.string('id_matpel', 255).references('id').inTable('mata_pelajaran_ampuan');
        table.smallint('nilai');
        table.smallint('status');
        table.timestamps(true);
    })
        .createTableIfNotExists('toko', (table) => {
        table.string('id', 255).primary();
        table.string('id_user', 255).references('id').inTable('user');
        table.string('toko_online', 100);
        table.string('link_toko_shopee', 255);
        table.string('link_toko_tokped', 255);
        table.string('link_toko_tiktok', 255);
        table.string('link_toko_lazada', 255);
        table.string('link_toko_ig', 255);
        table.string('link_toko_fb', 255);
        table.string('link_toko_wa', 255);
        table.string('link_toko_tele', 255);
        table.string('telephone', 100);
        table.string('logo', 255);
        table.date('tanggal_berdiri');
        table.text('deskripsi');
        table.timestamps(true);
    }).createTableIfNotExists('omzet', (table) => {
        table.string('id', 255).primary();
        table.string('id_toko', 255).references('id').inTable('toko');
        table.integer('omzet');
        table.string('foto_omzet');
        table.smallint('status');
        table.timestamps(true);
    }).createTableIfNotExists('dokumen', (table) => {
        table.string('id', 255).primary();
        table.string('id_user', 255).references('id').inTable('user');
        table.string('jenis_dokumen', 30);
        table.string('foto_dokumen');
        table.timestamps(true);
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('user').dropTable('siswa');
}
exports.down = down;
