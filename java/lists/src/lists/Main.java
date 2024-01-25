package lists;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
//		DynamicArray numbers = new DynamicArray();
//		numbers.viewContent();
//		numbers.add(1);
//		numbers.add(2);
//		numbers.add(3);
//		numbers.add(4);
//		numbers.add(5);
//		numbers.viewContent();
//		numbers.add(6);
//		numbers.viewContent();
		
		ArrayList<Integer> numbers = new ArrayList<Integer>();
		numbers.add(1);
		System.out.println(numbers.size());
		System.out.println(numbers);
		
		String[] arr = {"Alice", "Bob", "Charlie"};
		
		ArrayList<String> names = new ArrayList<>(Arrays.asList(arr));
		for(String name : names) {
			System.out.println(name);
		}
	}
}
