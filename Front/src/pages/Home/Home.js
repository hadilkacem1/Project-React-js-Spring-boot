// src/pages/Home/Home.js
import React from 'react';
import 'animate.css/animate.min.css'; // Pour les animations de texte
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'; // Pour les graphiques
import employeeImage from '../../assets/employee-centricity.jpg'; // Importez une image d'employé
import teamImage from '../../assets/employee-centricity.jpg'; // Importez une image d'équipe
import './Home.css'; // Fichier CSS pour les styles

// Données pour les graphiques
const barChartData = [
  { name: 'Jan', Employés: 40 },
  { name: 'Fév', Employés: 30 },
  { name: 'Mar', Employés: 20 },
  { name: 'Avr', Employés: 27 },
  { name: 'Mai', Employés: 18 },
  { name: 'Juin', Employés: 23 },
  { name: 'Juil', Employés: 34 },
];

const pieChartData = [
  { name: 'Hommes', value: 60 },
  { name: 'Femmes', value: 40 },
];

const COLORS = ['#0088FE', '#00C49F']; // Couleurs pour le graphique en camembert

const Home = () => {
  return (
    <div className="home-container">
      {/* Section 1 : Titre et description */}
      <section className="hero-section animate__animated animate__fadeIn">
        <h1>Bienvenue sur la plateforme des employés</h1>
        <p>Gérez vos employés de manière efficace et intuitive.</p>
      </section>

      {/* Section 2 : Statistiques et graphiques */}
      <section className="stats-section">
        <div className="chart-container animate__animated animate__fadeInLeft">
          <h2>Statistiques des employés par mois</h2>
          <BarChart width={500} height={300} data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Employés" fill="#8884d8" />
          </BarChart>
        </div>

        <div className="chart-container animate__animated animate__fadeInRight">
          <h2>Répartition par genre</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </section>

      {/* Section 3 : Images et informations supplémentaires */}
      <section className="info-section">
        <div className="image-container animate__animated animate__fadeInLeft">
          <img src={employeeImage} alt="Employee" className="employee-image" />
          <p>Découvrez nos employés talentueux.</p>
        </div>

        <div className="image-container animate__animated animate__fadeInRight">
          <img src={teamImage} alt="Team" className="team-image" />
          <p>Notre équipe dévouée est là pour vous.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;