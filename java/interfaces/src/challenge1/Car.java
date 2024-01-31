package challenge1;

public class Car implements Vehicle {
	private double speed; // m/s
	
	public Car(double speed) {
		this.speed = speed;
	};
	
	// m/s -> miles/h - multiply by 2.23694
	
	@Override
	public double getSpeed() {
		return this.speed * 2.23694;
	}

	@Override
	public void decreaseSpeed(double s) {
		this.speed -= s / 2.23694;
	};
	
	public void setSpeed(double speed) {
		this.speed = speed;
	};
}
