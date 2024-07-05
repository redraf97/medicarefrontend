import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserMessagesPage = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const token = localStorage.getItem('token');
    axios.post('http://localhost:3000/api/user-messages', { subject, message }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      toast.success('Message sent successfully!', {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true
      });
      setSubject('');
      setMessage('');
    })
    .catch(error => {
      console.error('Error sending message', error);
      toast.error('Failed to send message.', {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true
      });
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-creme2 min-h-screen">
      <h2 className="text-2xl font-bold text-blueketba mb-4">Send Us a Message</h2>

      <div className="mb-6">
        <label className="block text-blueketba mb-2">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blueketba mb-2">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border rounded w-full"
          rows="6"
        ></textarea>
      </div>

      <button
        onClick={handleSendMessage}
        className="bg-blueketba text-white py-2 px-4 rounded hover:bg-bluefoot"
      >
        Send Message
      </button>
    </div>
  );
};

export default UserMessagesPage;
