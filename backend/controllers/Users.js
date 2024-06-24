import { query } from "../config/Database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// export const getUsers = async(req, res) => {
//     try {
//         const users = await Users.findAll({
//             attributes:['id','name','email']
//         });
//         res.json(users);
//     } catch (error) {
//         console.log(error);
//     }
// }
export const Register = async (req, res) => {
    const { name, email, phone_number, address, password, confPassword } = req.body;
    console.log(password, confPassword);
  
    if (email === ""  || email === undefined  || password === ""  || password === undefined ||  confPassword === "" || confPassword === undefined) {
      return res.status(400).json({ error: "Field must not be empty" });
    }
  
    if (password !== confPassword) {
      return res.status(400).json({ error: "Password not match" });
    }
  
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
      await query("INSERT INTO users(name, email, phone_number, address, password) VALUES(?, ?, ?, ?, ?)", [name, email, phone_number, address, hashPassword, confPassword]);
      res.json({
        msg: "Register Berhasil",
        data: {
          ...req.body,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email);
      console.log(password);
  
      const user = await query("SELECT * FROM users WHERE email = ?", [email]);
  
      if (user.length === 0) {
        return res.status(404).json({ msg: "Email tidak ditemukan" });
      }
  
      const match = await bcrypt.compare(password, user[0].password);
  
      if (!match) {
        return res.status(400).json({ msg: "Wrong Password" });
      }
  
      const userId = user[0].id;
      const name = user[0].name;
  
      const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "20s" });
  
      const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" });
  
      await query("UPDATE users SET refresh_token = ? WHERE id = ?", [refreshToken, userId]);
  
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
  
      res.json({ accessToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "An error occurred" });
    }
  };

// export const Logout = async(req, res) => {
//     const refreshToken = req.cookies.refreshToken;
//         if(!refreshToken) return res.sendStatus(204);
//         const user = await Users.findAll({
//             where:{
//                 refresh_token: refreshToken
//             }
//         });
//         if(!user[0]) return res.sendStatus(204);
//         const userId = user[0].id;
//         await Users.update({refresh_token: null},{
//             where:{
//                 id: userId
//             }
//         });
//         res.clearCookie('refreshToken');
//         return res.sendStatus(200);
// }