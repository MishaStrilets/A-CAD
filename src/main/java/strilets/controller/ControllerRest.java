package strilets.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import strilets.model.Shape;
import strilets.repository.DB;

@RestController
public class ControllerRest {

	DB database = new DB();

	@PostMapping("/post")
	public ResponseEntity<?> addShape(@Valid @RequestBody Shape shape, Errors errors) {

		if (errors.hasErrors())
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);

		if (shape.getId() == -1) {
			shape.setId(database.count());
			database.addShape(shape);
		} else {
			database.setShape(shape.getId(), shape);
		}

		return new ResponseEntity<Object>(HttpStatus.OK);
	}

	@GetMapping("/get")
	public ResponseEntity<?> getShapes() {
		return new ResponseEntity<List<Shape>>(database.getAllShapes(), new HttpHeaders(), HttpStatus.OK);
	}

}