package strilets.controller;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import strilets.model.Shape;
import strilets.repository.DB;

@RestController
public class ControllerRest {

	DB database = new DB();

	@PostMapping("/add")
	public ResponseEntity<?> getSearchResultViaAjax(@Valid @RequestBody Shape shape, Errors errors) {

		if (errors.hasErrors())
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);

		database.addShape(shape);

		return new ResponseEntity<Object>(HttpStatus.OK);
	}

}