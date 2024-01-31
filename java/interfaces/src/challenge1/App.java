package challenge1;

import java.util.ArrayList;

public class App {
	public static void main(String[] args) {
		Car car = new Car(50.0);
		Bike bike = new Bike(4.0);
		
		ArrayList<Vehicle> vehicleArray = new ArrayList<Vehicle>();
		vehicleArray.add(car);
		vehicleArray.add(bike);
		
		for (Vehicle vehicle : vehicleArray) {
			System.out.printf("%.2f miles per hour\n", vehicle.getSpeed());
		};
	};
};
