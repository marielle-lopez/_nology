package challenge1;

public class Main {

	public static void main(String[] args) {
		LatteGlass latte = new LatteGlass();
		ShotGlass shot = new ShotGlass();
		Mug mug = new Mug();
		
		System.out.printf("You need %.2f teaspoons of coffee granules to make a latte.\n", latte.teaspoonCount());
		System.out.printf("You need %.2f teaspoons of coffee granules to make a coffee shot.\n", shot.teaspoonCount());
		System.out.printf("You need %.2f teaspoons of coffee granules to make a mug of coffee.\n", mug.teaspoonCount());
	}

}
