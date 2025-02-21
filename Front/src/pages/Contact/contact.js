import React from 'react';
import './Contact.css'; // Fichier CSS pour les styles
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa'; // Icônes de React Icons

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-description">
          Une question ? Envoyez-nous un message.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <div className="input-icon">
              <FaUser className="icon" />
              <input type="text" id="name" name="name" placeholder="Nom" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon">
              <FaEnvelope className="icon" />
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-icon">
              <FaComment className="icon" />
              <textarea id="message" name="message" rows="3" placeholder="Message" required></textarea>
            </div>
          </div>
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;