package io.nology.blogs.exceptions;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<String> handleNotFoundException(NotFoundException ex) {
		return new ResponseEntity<>(ex.getMessage(), NotFoundException.getStatusCode());
	}
	
	@ExceptionHandler(ServiceValidationException.class)
	public ResponseEntity<String> handleServiceValidationException(ServiceValidationException ex) {
		ObjectMapper objectMapper = new ObjectMapper();
		try {
			String json = objectMapper.writeValueAsString(ex.getErrors());
			return new ResponseEntity<>(json, HttpStatus.BAD_REQUEST);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return new ResponseEntity<>("Something went wrong...", HttpStatus.I_AM_A_TEAPOT);
		}
		
	}
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<String> handleDataIntegrityViolationException(DataIntegrityViolationException ex) {
//		String message = ex.getMessage();
//		Pattern pattern = Pattern.compile(" for key '(.+?)\\.(.+?)'");
//		Matcher matcher = pattern.matcher(message);
//		System.out.println(String.format("%s %s", matcher.group(1), matcher.group(2)));
		return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
	}
}
