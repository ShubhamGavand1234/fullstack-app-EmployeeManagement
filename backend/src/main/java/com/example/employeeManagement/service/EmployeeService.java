package com.example.employeeManagement.service;

import com.example.employeeManagement.dto.EmployeeDTO;
import com.example.employeeManagement.entity.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EmployeeService {
   public EmployeeDTO createEmployee(EmployeeDTO employeeDTO);
   public  EmployeeDTO getEmployeeById(Long employeeId);
   public List<EmployeeDTO> getAllEmployees();
}
