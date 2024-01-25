package arrays;

import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
		// create an array literal
		String[] names = {"Alice", "Bob", "Charlie"};
		int[] numbers = new int[3];
		numbers[0] = 22;
		numbers[1] = 12;
		numbers[2] = 99;
		System.out.println(Arrays.toString(names));
		
		// manually with a loop
		int[] newNumbers = new int[numbers.length + 1];
		for (int i = 0; i < numbers.length; i++) {
			newNumbers[i] = numbers[i];
		}
		newNumbers[3] = 36;
		
		// older syntax with system.arraycopy()
		int[] systemCopy = new int[numbers.length + 1];
		System.arraycopy(numbers, 0, systemCopy, 0, numbers.length);
		
		// a newer syntax with Arrays.copyOf()
		// creates a new array with copied values from original array for you
		numbers = Arrays.copyOf(numbers, 4);
		
		for (String name : names) {
			System.out.println(name);
		}
		
		//
		int[] numArr = ArrayUtils.incrementElements(numbers);
		System.out.println(Arrays.toString(numArr));
		int[] revArr = ArrayUtils.reverseElements(numbers);
		System.out.println(Arrays.toString(numbers));
		System.out.println(Arrays.toString(revArr));
	}

}
