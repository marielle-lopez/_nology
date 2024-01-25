package control_flow;
import java.util.Scanner;
import java.util.Arrays;
import java.math.RoundingMode;
import java.text.DecimalFormat;

public class Challenge1 {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		
		// TODO scan user input and print if the number is negative or positive
		System.out.println("Please enter an integer:");
		int userInt = s.nextInt();
		
		if (userInt < 0) {
			System.out.println(String.format("%d is negative.", userInt));
		} else {
			System.out.println(String.format("%d is positive.", userInt));
		}
		
		// TODO get 3 numbers from the user and print the largest number
		System.out.println("Please enter first number: ");
		int num1 = s.nextInt();
		System.out.println("Please enter second number: ");
		int num2 = s.nextInt();
		System.out.println("Please enter third number: ");
		int num3 = s.nextInt();
		
		int numArr[] = {num1, num2, num3};
		int largestNum = Arrays.stream(numArr).max().getAsInt();
		System.out.println(String.format("%d is the largest.", largestNum));
		
		// TODO request 2 floats from user, round them to 3 decimal places
		// TODO after rounding if they are the same, print that they are, if not, print they are different
		System.out.println("Enter first float: ");
		float float1 = s.nextFloat();
		System.out.println("Enter second float: ");
		float float2 = s.nextFloat();
		
		DecimalFormat df = new DecimalFormat("#.###");
		df.setRoundingMode(RoundingMode.CEILING);
		String float1Rounded = df.format(float1);
		String float2Rounded = df.format(float2);
		
		if (float1Rounded.equals(float2Rounded)) {
			System.out.println(String.format("Both numbers are %s after rounding.", float1Rounded));
		} else {
			System.out.println(String.format("%s and %s are different numbers.", float1Rounded, float2Rounded));
		}
		
		s.close();
	}

}
