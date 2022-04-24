package controllers.advices;

import domain.errors.APIError;
import domain.errors.constants.ErrorCodeConstants;
import domain.errors.constants.ErrorMessageConstants;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@Order(Integer.MIN_VALUE)
public class MethodArgumentNotValidExceptionControllerAdviser extends ResponseEntityExceptionHandler {

    @Override
    @ResponseBody
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException methodArgumentNotValidException,
            HttpHeaders headers,
            HttpStatus status,
            WebRequest request) {
        var fieldError = methodArgumentNotValidException.getFieldError();
        var aPIError = new APIError(ErrorCodeConstants.SEMANTICALLY_INCORRECT_REQUEST, ErrorMessageConstants.getInvalidField(fieldError.getField(), fieldError.getDefaultMessage()));
        return new ResponseEntity<>(aPIError, HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
