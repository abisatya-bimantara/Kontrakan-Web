import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [nama_kontrakan, setNama_kontrakan] = useState("");
    const [harga, setHarga] = useState("");
    const [disewakan_selama, setDisewakan_selama] = useState("");
    const [pemilik, setPemilik] = useState("");
    const [nomor_telepon, setNomor_telepon] = useState("");
    const [alamat_kontrakan, setAlamat_kontrakan] = useState("");
    const [kelurahan, setKelurahan] = useState("");
    const [kecamatan, setKecamatan] = useState("");
    const [asal_kota, setAsal_kota] = useState("");
    const [fasilitas, setFasilitas] = useState("");
    const [kategori, setKategori] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const getUserById = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/users/${id}`);
            setNama_kontrakan(response.data.nama_kontrakan);
            setHarga(response.data.harga);
            setDisewakan_selama(response.data.disewakan_selama);
            setPemilik(response.data.pemilik);
            setNomor_telepon(response.data.nomor_telepon);
            setAlamat_kontrakan(response.data.alamat_kontrakan);
            setKelurahan(response.data.kelurahan);
            setKecamatan(response.data.kecamatan);
            setAsal_kota(response.data.asal_kota);
            setFasilitas(response.data.fasilitas);
            setKategori(response.data.kategori);
        } catch (error) {
            console.log(error);
        }
    }, [id]);  // Adding id as a dependency since it is used inside the callback

    useEffect(() => {
        getUserById();
    }, [getUserById]);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                nama_kontrakan,
                harga,
                disewakan_selama,
                pemilik,
                nomor_telepon,
                alamat_kontrakan,
                kelurahan,
                kecamatan,
                asal_kota,
                fasilitas,
                kategori
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="columns mt-5 is-centered">
                <div className="column is-half">
                    <form onSubmit={updateUser}>
                        <div className="field">
                            <label className="label">Nama Kontrakan</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={nama_kontrakan}
                                onChange={(e) => setNama_kontrakan(e.target.value)}
                                placeholder='nama_kontrakan' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Harga</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                                placeholder='harga' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Disewakan Selama</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={disewakan_selama}
                                onChange={(e) => setDisewakan_selama(e.target.value)}
                                placeholder='disewakan_selama' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Pemilik</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={pemilik}
                                onChange={(e) => setPemilik(e.target.value)}
                                placeholder='pemilik' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Nomor Telepon</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={nomor_telepon}
                                onChange={(e) => setNomor_telepon(e.target.value)}
                                placeholder='nomor_telepon' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Alamat Kontrakan</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={alamat_kontrakan}
                                onChange={(e) => setAlamat_kontrakan(e.target.value)}
                                placeholder='alamat_kontrakan' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Kelurahan</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={kelurahan}
                                onChange={(e) => setKelurahan(e.target.value)}
                                placeholder='kelurahan' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Kecamatan</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={kecamatan}
                                onChange={(e) => setKecamatan(e.target.value)}
                                placeholder='kecamatan' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Asal Kota</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={asal_kota}
                                onChange={(e) => setAsal_kota(e.target.value)}
                                placeholder='asal_kota' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Fasilitas</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={fasilitas}
                                onChange={(e) => setFasilitas(e.target.value)}
                                placeholder='fasilitas' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Kategori</label>
                            <div className="control">
                                <input type="text" className="input" 
                                value={kategori}
                                onChange={(e) => setKategori(e.target.value)}
                                placeholder='kategori' />
                            </div>
                        </div>
                        <div className="field">
                            <button type="submit" className="button is-success">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
