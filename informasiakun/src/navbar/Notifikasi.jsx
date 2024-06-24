import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Notifikasi.css';
import Navbar from '../layout/Navbar';

function Notifikasi() {
  return (
    <div>
    <Navbar/>
    <div className="app">
      <div className="notifications">
        <NotificationItem
          message="Pak Kaswad telah membalas pesan anda"
          time="43 menit yang lalu"
          isRead={false}
        />
        <NotificationItem
          message="Pak Kaswad telah membalas pesan anda"
          time="43 menit yang lalu"
          isRead={true}
        />
        <NotificationItem
          message="Harap tinjau ulang kontrak anda yang di revisi."
          time="2 hari yang lalu"
          isRead={false}
        />
        <NotificationItem
          message="Pak Kaswad telah membalas pesan anda"
          time="43 menit yang lalu"
          isRead={true}
        />
        {/* Repeat NotificationItem as needed */}
      </div>
    </div>
    </div>
  );
}

function NotificationItem({ message, time, isRead }) {
  return (
    <div className={`notification-item ${isRead ? 'read' : 'unread'}`}>
      <span className="dot"></span>
      <div className="notification-content">
        <p className="message">{message}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
}

export default Notifikasi;
