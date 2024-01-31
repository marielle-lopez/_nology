package challenge2;

public class Triangle implements Area, Perimeter, Volume, SurfaceArea {
	private double height;
	private double base;
	private double a;
	private double c;
	private double depth;
	
	public Triangle(double height, double base, double a, double c, double depth) {
		this.height = height;
		this.base = base;
		this.a = a;
		this.c = c;
		this.depth = depth;
	};

	@Override
	public double getPerimeter() {
		return this.base + this.a + this.c;
	}

	@Override
	public double getArea() {
		return 0.5 * this.base * this.height;
	}

	@Override
	public double getSurfaceArea() {
		return (2 * getArea()) + (this.a * this.depth) + (this.c * this.depth) + (this.base * this.depth);
	}
	
	@Override
	public double getVolume() { // assuming triangular prism
		return getArea() * this.depth;
	}

}
