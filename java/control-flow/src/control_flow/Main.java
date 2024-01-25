package control_flow;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// if statements have the same syntax as JavaScript
		// except, we must provide boolean values; not truthy/falsy values

		byte age = 21;
		boolean isCitizen = true;
		String country = "Australia";
		
		if (age >= 18 && isCitizen) {
			System.out.println("You can vote.");
		} else {
			System.out.println("You can't vote, sorry.");
		}
		
		// in older java versions, you use .equals to match strings, since == checks if both operands refer to the same memory reference
		if (age >= 21) {
			System.out.println("You can drink anywhere in the world.");
		} else if (age >= 18 && country.equals("Australia")) {
			System.out.println("You can drink in Australia.");
		} else {
			System.out.println("You can't drink, uh oh.");
		}
		
		
		// switch statements are basically the same as JavaScript
		// loops are also almost the same
		
		Scanner scan = new Scanner(System.in);
		boolean isRunning = true;
		
		while (isRunning) {
			System.out.println("Type 'c' to continue, 'e' or 'x' to exit: ");
			char command = scan.next().charAt(0);
			
			switch (command) {
			case 'c':
			case 'C':		
				System.out.println("Continue running...");
				break;
			case 'e':
			case 'E':
			case 'x':
			case 'X':
				System.out.println("Exiting program...");
				isRunning = false;
				break;
			default:
				System.out.println("Command not recognised!");
			}
		}
		System.out.println("Program exited.");
		
		scan.close();
	}

}
