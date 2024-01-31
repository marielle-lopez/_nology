package challenge2;

public class Circle implements Area, Perimeter, SurfaceArea, Volume {
	private double radius;
	
	public Circle(double radius) {
		this.radius = radius;
	};

	@Override
	public double getPerimeter() {
		return 2 * Math.PI * this.radius;
	}

	@Override
	public double getArea() {
		return Math.PI * Math.pow(this.radius, 2);
	}

	@Override
	public double getVolume() {
		return (4/3) * Math.PI * Math.pow(this.radius, 3);
	}

	@Override
	public double getSurfaceArea() {
		return 4 * Math.PI * Math.pow(this.radius, 2) ;
	}
}
