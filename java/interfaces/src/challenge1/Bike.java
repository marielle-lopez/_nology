package challenge1;

public class Bike implements Vehicle {
	private double speed; // km/h
	
	public Bike(double speed) {
		this.speed = speed;
	}
	
	// km/h -> miles/h - multiply by 0.621371

	@Override
	public double getSpeed() {
		return this.speed * 0.621371;
	}

	@Override
	public void decreaseSpeed(double s) {
		this.speed -= s / 0.621371;
	}

	public void setSpeed(double speed) {
		this.speed = speed;
	};
}
