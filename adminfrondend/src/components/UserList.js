import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const UserList = () => {
const [users, setUser] = useState([]);

useEffect(()=>{
    getUsers();
},[]);

const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
}

const deleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
    } catch (error) {
        console.log(error);
    }
}

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`add`} className="button is-success">
                    Add New
                </Link>
                <tabel className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Kontrakan</th>
                            <th>Harga</th>
                            <th>Disewakan Selama</th>
                            <th>Pemilik</th>
                            <th>Nomor Telepon</th>
                            <th>Alamat_Kontrakan</th>
                            <th>Kelurahan</th>
                            <th>Kecamatan</th>
                            <th>Asal Kota</th>
                            <th>Fasilitas</th>
                            <th>Kategori</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.nama_kontrakan}</td>
                            <td>{user.harga}</td>
                            <td>{user.disewakan_selama}</td>
                            <td>{user.pemilik}</td>
                            <td>{user.nomor_telepon}</td>
                            <td>{user.alamat_kontrakan}</td>
                            <td>{user.kelurahan}</td>
                            <td>{user.kecamatan}</td>
                            <td>{user.asal_kota}</td>
                            <td>{user.fasilitas}</td>
                            <td>{user.kategori}</td>
                            <td>
                                <Link 
                                to={`edit/${user.id}`}
                                className="button is-small is-info"
                                > 
                                Edit
                                </Link>
                                <button onClick={()=> deleteUser(user.id)}className="button is-small is-danger"> Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </tabel>
            </div>
        </div>

    )
}

export default UserList
