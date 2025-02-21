import { useState, useEffect } from "react";
import "./Postuser.css"; // Import du fichier CSS

const UpdateUser = ({ userId, userData, onUpdate }) => {
  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    departement: "",
  });

  // Effet pour pré-remplir le formulaire lorsque userData change
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        departement: userData.departement,
      });
    }
  }, [userData]);

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
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("Données du formulaire soumises :", formData);

    // Ici, vous pouvez ajouter la logique pour envoyer les données à un serveur ou une API
    // Par exemple, utiliser fetch() ou axios pour envoyer les données
    // Exemple avec fetch :
    fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Utilisateur mis à jour :", data);
        onUpdate(data); // Appeler la fonction de rappel pour mettre à jour l'état parent
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
      });

    // Réinitialiser le formulaire après soumission
    setFormData({
      name: "",
      email: "",
      phone: "",
      departement: "",
    });
  };

  return (
    <>
      <h2>Mettre à jour un utilisateur</h2>
      <form onSubmit={handleSubmit}>
        {/* Champ pour le nom */}
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <button type="submit">Mettre à jour</button>
      </form>
    </>
  );
};

export default UpdateUser;