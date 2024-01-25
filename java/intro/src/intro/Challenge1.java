package intro;
import java.util.Scanner;

public class Challenge1 {

	public static void main(String[] args) {

		Scanner s = new Scanner(System.in);
		
		// TODO create a byte, int, and double, using the scanner to take input
		System.out.println("Enter a byte: ");
		byte userByte = s.nextByte();
		System.out.println("Enter an integer: ");
		int userInt = s.nextInt();
		System.out.println("Enter a double: ");
		double userDouble = s.nextDouble();
		
		
		// TODO create an int that is the result of dividing your byte by a number selected by the user
		System.out.println("Enter a random integer: ");
		int randomInt = s.nextInt();
		
		int dividedResult = userByte / randomInt;
		System.out.println(dividedResult);
		
		
		// TODO create along by taking input from the user from a short and multiplying that by another short
		System.out.println("Enter a short: ");
		short userShort = s.nextShort();
		
		short randomShort = 10000;
		
		long multipliedResult = userShort * randomShort;
		System.out.println(multipliedResult);
		
		
		s.close(); 
	}

}
