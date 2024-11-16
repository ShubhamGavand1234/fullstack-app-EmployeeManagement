package com.example.employeeManagement.service.impl;

import com.example.employeeManagement.daoRepository.EmployeeRepositoryDAO;
import com.example.employeeManagement.dto.EmployeeDTO;
import com.example.employeeManagement.entity.Employee;
import com.example.employeeManagement.exception.ResourceNotFoundException;
import com.example.employeeManagement.mapper.EmployeeMapper;
import com.example.employeeManagement.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceIMPL implements EmployeeService {

private EmployeeRepositoryDAO employeeRepositoryDAO;


    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.mapTOEmployee(employeeDTO);
        Employee savedEmployee = employeeRepositoryDAO.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDTO getEmployeeById(Long employeeId) {
        Employee foundEmployee = employeeRepositoryDAO.findById(employeeId).orElseThrow( () -> new ResourceNotFoundException("Employee Not found for given Id : " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(foundEmployee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employeeList = employeeRepositoryDAO.findAll();
        return employeeList.stream().map( (employee) -> EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updatedEmployeeDTO) {
        Employee searchedEmployee = employeeRepositoryDAO.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee not found for given employee id " + employeeId));

        searchedEmployee.setFirstName(updatedEmployeeDTO.getFirstName());
        searchedEmployee.setLastName(updatedEmployeeDTO.getLastName());
        searchedEmployee.setEmail(updatedEmployeeDTO.getEmail());

        Employee dbUpdatedEMployee =  employeeRepositoryDAO.save(searchedEmployee); // save performs save and update both if id is avalable it performs update
        return EmployeeMapper.mapToEmployeeDto(dbUpdatedEMployee);
    }

    @Override
    public String deleteEmployee(Long employeeId) {
        Employee toBeDeletedEmployee = employeeRepositoryDAO.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee with given Id is not present in Database " + employeeId));
        employeeRepositoryDAO.deleteById(employeeId);
        return "Employee has been Deleted";
    }

}
