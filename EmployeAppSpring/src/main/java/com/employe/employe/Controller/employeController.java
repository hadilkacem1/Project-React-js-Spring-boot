package com.employe.employe.Controller;

import com.employe.employe.Model.Employe;
import com.employe.employe.Service.EmployeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employes")
public class employeController {
    @Autowired
    private EmployeService employeService;

    // Ajouter un employé
    @PostMapping("/ajouter")
    public Employe ajouterEmploye(@RequestBody Employe employe) {
        return employeService.ajouterEmploye(employe);
    }

    // Modifier un employé
    @PutMapping("/modifier/{id}")
    public Employe modifierEmploye(@PathVariable Long id, @RequestBody Employe employe) {
        return employeService.modifierEmploye(id, employe);
    }

    // Supprimer un employé
    @DeleteMapping("/supprimer/{id}")
    public String supprimerEmploye(@PathVariable Long id) {
        employeService.supprimerEmploye(id);
        return "Employé supprimé avec succès.";
    }

    // Obtenir tous les employés
    @GetMapping("/tous")
    public List<Employe> obtenirTousLesEmployes() {
        return employeService.obtenirTousLesEmployes();
    }

    // Obtenir un employé par ID
    @GetMapping("/{id}")
    public Employe obtenirEmployeParId(@PathVariable Long id) {
        return employeService.obtenirEmployeParId(id);
    }
}

