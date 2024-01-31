package interfaces;

import java.util.ArrayList;

public class Main {

	public static void greeting(MakesSound animal) {
		System.out.println(animal.makeSound() + " " + animal.makeSound());
	};
	
	public static void printName(Animal animal) {
		System.out.println(animal.getName());
		// animal.favouriteFood(); // doesn't work because Animal does not implement favouriteFood
		// animal.makeSound(); // doesn't work because Animal does not implement makeSound
	};
	
	public static void main(String[] args) {
		// code along 1
		Pig pig = new Pig("Harry");
		
		System.out.println(pig.makeSound());
		System.out.println(pig.favouriteFood());
		
		greeting(pig);
		
		System.out.println();
		
		// code along 2
		ArrayList<IsMedia> mediaArray = new ArrayList<IsMedia>();
		mediaArray.add(new Video("My wedding"));
		mediaArray.add(new Video("Tracey's first steps"));
		mediaArray.add(new Book("Harry Potter and the Goblet of Fire", "J.K. Rowling", 2000));
		mediaArray.add(new Song("Needs", "flac"));
		
		for (IsMedia media : mediaArray) {
			System.out.printf("%s.%s\n", media.getTitle().toLowerCase().replace(" ", "-"), media.getFormat());
		};
	}

}
