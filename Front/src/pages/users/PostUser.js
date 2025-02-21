import { useState } from "react";
import Modal from "react-modal";  // Assurez-vous d'installer react-modal: npm install react-modal
import "./Postuser.css";  // Import du fichier CSS

// Configuration de la modal
Modal.setAppElement("#root");

const PostUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    departement: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gestionnaire de changement pour les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire soumises :", formData);

    // Réinitialiser le formulaire après soumission
    setFormData({
      name: "",
      email: "",
      phone: "",
      departement: "",
    });

    // Fermer la modal après soumission
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className="open-modal-btn">
        Ajouter un utilisateur
      </button>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal" overlayClassName="modal-overlay">
        <h2>Ajouter un utilisateur</h2>
        <form onSubmit={handleSubmit}>
          {/* Champ pour le nom */}
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ pour l'email */}
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ pour le téléphone */}
          <div className="form-group">
            <label htmlFor="phone">Téléphone :</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ pour le département */}
          <div className="form-group">
            <label htmlFor="departement">Département :</label>
            <input
              type="text"
              id="departement"
              name="departement"
              value={formData.departement}
              onChange={handleChange}
              required
            />
          </div>

          {/* Bouton de soumission */}
          <button type="submit" className="submit-btn">Soumettre</button>
        </form>
      </Modal>
    </>
  );
};

export default PostUser;
