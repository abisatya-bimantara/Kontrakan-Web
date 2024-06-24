import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chat.css';
import Navbar from '../layout/Navbar';
import avatar1 from '../assets/image/avatar1.png';
import avatar2 from '../assets/image/avatar2.png';
import avatar3 from '../assets/image/avatar3.png';
import avatar4 from '../assets/image/avatar4.png';
import avatar5 from '../assets/image/avatar5.png';

function Chat() {
  return (
    <div>
    <Navbar/>
    <div className="app">
      <div className="sidebar">
        <div className="contacts">
          <Contact name="Fadhil" message="Saya cek dulu ya mas" time="2 min ago" avatar={avatar1} online />
          <Contact name="Gabriel" message="Siap mas, saya tunggu kabarnya" time="2 min ago" avatar={avatar2} />
          <Contact name="Tommy" message="Kalau minggu bagaimana kak?" time="2 min ago" avatar={avatar4} online />
          <Contact name="Clara" message="Terimakasih kembali" time="2 min ago" avatar={avatar3} />
          <Contact name="Pak Ahmad" message="nanti kabari saya saja mas" time="2 min ago" avatar={avatar1} online />
          <Contact name="Anya G" message="Love You More" time="2 min ago" avatar={avatar5} />
        </div>
      </div>
      <div className="chat-window">
        <header className="chat-header">
          <img src={avatar4} alt="Tommy" className="avatar" />
          <div className="chat-info">
            <h2>Tommy</h2>
            <span>Online</span>
          </div>
          <div className="chat-actions">
            <button>📞</button>
            <button>📷</button>
          </div>
        </header>
        <div className="chat-messages">
          <Message isSent={true} time="09:25 AM" text="Permisi kak, mau tanya" />
          <Message isSent={false} time="09:25 AM" text="Silahkan kak, mau tanya apa" />
          <Message isSent={true} time="09:25 AM" text="Untuk kontrakan milik kakak apakah bisa untuk akses mobil?" />
          <Message isSent={false} time="09:25 AM" text="Bisa kak, jalan depan rumah lebar" />
          <Message isSent={false} time="09:25 AM" text="Kebetulan garasinya juga muat untuk mobil" />
          <Message isSent={true} time="09:25 AM" text="Oke kak siap, ini saya sudah liat lokasinya di google maps, apakah hari sabtu bisa ketemu kak?" />
        </div>
        <footer className="chat-footer">
          <input type="text" placeholder="Write your message" />
          <button>✏️</button>
          <button>📎</button>
          <button>🎤</button>
          <button>📸</button>
        </footer>
      </div>
    </div>
    </div>
  );
}

function Contact({ name, message, time, avatar, online }) {
  return (
    <div className="contact">
      <img src={avatar} alt={name} className="avatar" />
      <div className="contact-info">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
      <div className="contact-time">
        <span>{time}</span>
        {online && <span className="online">•</span>}
      </div>
    </div>
  );
}

function Message({ isSent, time, text }) {
  return (
    <div className={`message ${isSent ? 'sent' : 'received'}`}>
      <p>{text}</p>
      <span>{time}</span>
    </div>
  );
}

export default Chat;
