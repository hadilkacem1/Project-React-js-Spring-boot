package com.employe.employe.Repository;

import com.employe.employe.Model.Employe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeRepository extends JpaRepository<Employe, Long> {
}
