package com.example.employeeManagement.exception.handler;

import com.example.employeeManagement.dto.ErrorResponse;
import com.example.employeeManagement.exception.ResourceNotFoundException;
import com.example.employeeManagement.exception.ResourseCreationFailedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    private String NO_RECORDS_FOUND = "NO_RECORDS_FOUND";
    private String BAD_REQUEST = "BAD_REQUEST";

    @ExceptionHandler(ResourceNotFoundException.class)
    public final ResponseEntity<ErrorResponse> handleRecordNotFoundException (ResourceNotFoundException e, WebRequest webRequest){
        List<String>  errorDetails = new ArrayList<>();
        errorDetails.add(e.getLocalizedMessage());
        ErrorResponse response = new ErrorResponse(NO_RECORDS_FOUND, errorDetails);
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ResourseCreationFailedException.class)
    public final ResponseEntity<ErrorResponse> handleResourseCereationFailedError(ResourseCreationFailedException e){
        List<String> errorDetails = new ArrayList<>();
        errorDetails.add(e.getLocalizedMessage());
        ErrorResponse response = new ErrorResponse( BAD_REQUEST , errorDetails);
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }


    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGlobalException(Exception ex) {
        List<String> errorDetails = List.of("An unexpected error occurred: " + ex.getMessage());
        ErrorResponse response = new ErrorResponse("INTERNAL_SERVER_ERROR", errorDetails);
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }


}
