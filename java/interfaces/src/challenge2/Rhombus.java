package challenge2;

public class Rhombus implements Area, Perimeter, Volume, SurfaceArea {
	private double base;
	private double height;
	private double depth;
	
	public Rhombus(double base, double height, double depth) {
		this.base = base;
		this.height = height;
	};
	
	@Override
	public double getPerimeter() {
		return this.base * 4;
	}

	@Override
	public double getArea() {
		return this.base * this.height;
	}

	@Override
	public double getSurfaceArea() {
		return (2 * getArea()) + (4 * this.base * this.depth);
	}

	@Override
	public double getVolume() {
		return this.getArea() * this.depth;
	}

}
