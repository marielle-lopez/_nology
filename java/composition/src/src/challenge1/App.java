package challenge1;

public class App {

	public static void main(String[] args) {
		
		Vehicle car = new Vehicle(
				new Vector2D(0.0, 0.0),
				new Vector2D(1.0, 0.0),
				new Vector2D(5.0, 0.0),
				4,
				"Blue",
				"Porsche",
				250,
				"2.9 Litre V6 B-Turbo"
			);
		
		Vehicle bike = new Vehicle(
				new Vector2D(0.0, 0.0),
				new Vector2D(2.0, 0.0),
				new Vector2D(3.0, 0.0),
				2,
				"Magenta",
				"Reid Cycles",
				25,
				null
			);
		
		Vehicle plane = new Vehicle(
				new Vector2D(0.0, 0.0),
				new Vector2D(5.0, 0.0),
				new Vector2D(100.0, 20.0),
				14,
				"White",
				"Airbus",
				926,
				"Gas Turbines"
			);
		
		Vehicle motorbike = new Vehicle(
				new Vector2D(0.0, 0.0),
				new Vector2D(3.0, 0.0),
				new Vector2D(4.0, 0.0),
				2,
				"Grey",
				"Harley Davidson",
				200,
				"Flathead 45ci"
			);
	}

}
