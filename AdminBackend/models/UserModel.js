import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    nama_kontrakan: DataTypes.STRING,
    harga: DataTypes.STRING,
    disewakan_selama: DataTypes.STRING,
    pemilik: DataTypes.STRING,
    nomor_telepon: DataTypes.STRING,
    alamat_kontrakan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    asal_kota: DataTypes.STRING,
    fasilitas: DataTypes.STRING,
    kategori: DataTypes.STRING,
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();