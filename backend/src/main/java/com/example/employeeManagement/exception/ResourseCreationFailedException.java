package com.example.employeeManagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ResourseCreationFailedException extends RuntimeException{

    public ResourseCreationFailedException(String message) {
        super(message);
    }
}
