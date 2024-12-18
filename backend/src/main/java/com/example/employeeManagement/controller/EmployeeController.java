package com.example.employeeManagement.controller;

import com.example.employeeManagement.dto.EmployeeDTO;
import com.example.employeeManagement.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //Build create/Add employee api end point
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @PostMapping
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO savedEmployee =  employeeService.createEmployee(employeeDTO);
        return  new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }


    //Build get by ID
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @GetMapping("/{id}")
    public  ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDTO foundEmployee = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<>(foundEmployee, HttpStatus.OK) ;

    }

    //Build get all employees REST API
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getALlEmployees() {
        List<EmployeeDTO> employeeDTOList = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeDTOList);
    }



    //Build update using Put REST API
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee( @PathVariable("id") Long employeeId, @RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO updatedEmployee = employeeService.updateEmployee(employeeId,employeeDTO);
        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
    }

    //delete REST API
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeID){
        String message = employeeService.deleteEmployee(employeeID);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
