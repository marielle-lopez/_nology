package challenge2;

public class App {

	public static void main(String[] args) {
		Circle circle = new Circle(2.0);
		Triangle triangle = new Triangle(2.0, 1.0, 1.0, 3.0, 4.0);
		Rhombus rhombus = new Rhombus(2.0, 3.0, 4.0);
		
		System.out.printf("Circumference of circle is %.2f units\n", circle.getPerimeter());
		System.out.printf("Volume of circle is %.2f units^3", circle.getVolume());
	}

}
