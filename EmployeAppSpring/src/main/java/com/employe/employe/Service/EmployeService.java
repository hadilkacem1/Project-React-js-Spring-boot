package com.employe.employe.Service;

import com.employe.employe.Model.Employe;
import com.employe.employe.Repository.EmployeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeService {

    @Autowired
    private EmployeRepository employeRepository;

    // Ajouter un employé
    public Employe ajouterEmploye(Employe employe) {
        return employeRepository.save(employe);
    }

    // Modifier un employé
    public Employe modifierEmploye(Long id, Employe employeDetails) {
        Optional<Employe> employeOptional = employeRepository.findById(id);
        if (employeOptional.isPresent()) {
            Employe employe = employeOptional.get();
            employe.setName(employeDetails.getName());
            employe.setEmail(employeDetails.getEmail());
            employe.setPhone(employeDetails.getPhone());
            employe.setDepartement(employeDetails.getDepartement());
            return employeRepository.save(employe);
        } else {
            throw new RuntimeException("Employé non trouvé avec l'ID : " + id);
        }
    }

    // Supprimer un employé
    public void supprimerEmploye(Long id) {
        if (employeRepository.existsById(id)) {
            employeRepository.deleteById(id);
        } else {
            throw new RuntimeException("Employé non trouvé avec l'ID : " + id);
        }
    }

    // Obtenir tous les employés
    public List<Employe> obtenirTousLesEmployes() {
        return employeRepository.findAll();
    }

    // Obtenir un employé par ID
    public Employe obtenirEmployeParId(Long id) {
        return employeRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Employé non trouvé avec l'ID : " + id));
    }
}
