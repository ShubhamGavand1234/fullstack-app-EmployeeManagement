package com.example.employeeManagement.daoRepository;

import com.example.employeeManagement.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepositoryDAO extends JpaRepository<Employee, Long> {
}
