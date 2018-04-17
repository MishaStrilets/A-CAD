package strilets.repository;

import java.util.ArrayList;
import java.util.List;

import strilets.model.Shape;

public class DB {

	private static int count = 0;
	private List<Shape> listShapes;

	private Shape shape1 = new Shape(count++, 50.0, 10.0, 45.0, 60.0, "red", 0);;
	private Shape shape2 = new Shape(count++, 238.0, 40.0, 70.0, 10.0, "green", 50);
	private Shape shape3 = new Shape(count++, 58.0, 113.0, 80.0, 80.0, "blue", 10);

	public DB() {
		listShapes = new ArrayList<Shape>();
		listShapes.add(shape1);
		listShapes.add(shape2);
		listShapes.add(shape3);
	}

	public void addShape(Shape shape) {
		shape.setId(count++);
		listShapes.add(shape);
	}

	public int countShapes() {
		return listShapes.size();
	}

	public void setShape(int id, Shape shape) {
		if (getIndexById(id) != -1)
			listShapes.set(getIndexById(id), shape);
	}

	public List<Shape> getAllShapes() {
		return listShapes;
	}

	public void deleteShape(int id) {
		if (getIndexById(id) != -1)
			listShapes.remove(getIndexById(id));
	}

	public int getIndexById(int id) {
		for (Shape shape : listShapes) {
			if (id == shape.getId())
				return listShapes.indexOf(shape);
		}

		return -1;
	}

}
