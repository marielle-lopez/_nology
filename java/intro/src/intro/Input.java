package intro;

import java.util.Scanner;


public class Input {

	public static void main(String[] args) {
		// To receive user input, you need to use a Scanner
		// Scanners can take input from different sources
		// You need to import Scanner from java.util
		
		// You need to close the scanner after using it to prevent leaking
		// You close it to help save memory, otherwise it will just exist
		Scanner s = new Scanner(System.in);
		System.out.print("Please enter your name: ");
		String name = s.next();
		System.out.println("Hello, " + name);
		System.out.println("Please enter your age: ");
		int age = s.nextInt();
		System.out.println(String.format("In %d years, you will be 40!", 40 - age));
		s.close();
	}

}
