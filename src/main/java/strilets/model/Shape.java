package strilets.model;

public class Shape {

	public Shape() {
	}

	public Shape(int id, double left, double top, double height, double width, String color, double angle) {
		this.id = id;
		this.left = left;
		this.top = top;
		this.height = height;
		this.width = width;
		this.color = color;
		this.setAngle(angle);
	}

	private int id;
	private double top;
	private double left;
	private double height;
	private double width;
	private String color;
	private double angle;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getTop() {
		return top;
	}

	public void setTop(double top) {
		this.top = top;
	}

	public double getLeft() {
		return left;
	}

	public void setLeft(double left) {
		this.left = left;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public double getAngle() {
		return angle;
	}

	public void setAngle(double angle) {
		this.angle = angle;
	}
}
