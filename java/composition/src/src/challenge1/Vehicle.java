package challenge1;


public class Vehicle {
	private Vector2D position;
	private Vector2D velocity;
	private Vector2D acceleration;
	private int numberOfWheels;
	private String color;
	private String brand;
	private int maxSpeed;
	private String engine;
	
	public Vehicle(
			Vector2D position, 
			Vector2D velocity, 
			Vector2D acceleration, 
			int numberOfWheels, 
			String color, 
			String brand,
			int maxSpeed, 
			String engine
		) 
	{
		this.position = position;
		this.velocity = velocity;
		this.acceleration = acceleration;
		this.numberOfWheels = numberOfWheels;
		this.color = color;
		this.brand = brand;
		this.maxSpeed = maxSpeed;
		this.engine = engine;
	};
}
