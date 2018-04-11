package strilets.repository;

import java.util.ArrayList;
import java.util.List;

import strilets.model.Shape;

public class DB {

	private List<Shape> listShapes = new ArrayList<Shape>();

	public DB() {
	}

	public void addShape(Shape shape) {
		listShapes.add(shape);
	}

	public int count() {
		return listShapes.size();
	}

}
