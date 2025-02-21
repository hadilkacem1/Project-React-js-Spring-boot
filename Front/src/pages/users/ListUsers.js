import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import React from "react";
import "./UserList.css"; // CSS pour la mise en page

const API_URL = "http://localhost:8085/api/employes"; // Utilise une variable d'environnement ou un proxy

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "", departement: "" });

  // Charger les utilisateurs depuis l'API
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/tous`);
      setUsers(response.data);
    } catch (error) {
      Swal.fire("Erreur", "Impossible de récupérer les utilisateurs", "error");
    }
  };

  // Ajouter un utilisateur
  const handleAddUser = async () => {
    try {
      const response = await axios.post(`${API_URL}/ajouter`, newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: "", email: "", phone: "", departement: "" });
      Swal.fire("Succès", "Utilisateur ajouté avec succès", "success");
    } catch (error) {
      Swal.fire("Erreur", "Échec de l'ajout de l'utilisateur", "error");
    }
  };

  // Supprimer un utilisateur
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/supprimer/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      Swal.fire("Supprimé", "Utilisateur supprimé avec succès", "success");
    } catch (error) {
      Swal.fire("Erreur", "Échec de la suppression de l'utilisateur", "error");
    }
  };

  // Modifier un utilisateur
  const handleEdit = (user) => {
    setEditUser(user);
  };

  // Sauvegarder les modifications
  const handleSave = async () => {
    try {
      await axios.put(`${API_URL}/modifier/${editUser.id}`, editUser);
      setUsers(users.map((user) => (user.id === editUser.id ? editUser : user)));
      setEditUser(null);
      Swal.fire("Succès", "Utilisateur mis à jour avec succès", "success");
    } catch (error) {
      Swal.fire("Erreur", "Échec de la mise à jour de l'utilisateur", "error");
    }
  };

  return (
    <div className="user-list-container">
      <h2>Liste des utilisateurs</h2>

      {/* Formulaire d'ajout d'utilisateur */}
      <div className="add-user-form">
        <input
          type="text"
          placeholder="Nom"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Téléphone"
          value={newUser.phone}
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Département"
          value={newUser.departement}
          onChange={(e) => setNewUser({ ...newUser, departement: e.target.value })}
        />
        <button className="add-btn" onClick={handleAddUser}>Ajouter</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Département</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {editUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editUser.name}
                      onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.departement}</td>
                <td>
                  {editUser?.id === user.id ? (
                    <button className="save-btn" onClick={handleSave}>Sauvegarder</button>
                  ) : (
                    <>
                      <button className="edit-btn" onClick={() => handleEdit(user)}>Modifier</button>
                      <button className="delete-btn" onClick={() => handleDelete(user.id)}>Supprimer</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Aucun utilisateur trouvé</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
