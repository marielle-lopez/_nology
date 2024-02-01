package challenge1;

import java.util.ArrayList;
import java.util.Arrays;

public class App {

	public static void main(String[] args) {
		ArrayList<Integer> myNumbers = new ArrayList<Integer>(Arrays.asList(22, 12, 22));
		Numbers numbers = new Numbers(myNumbers);
		ArrayList<Integer> set = numbers.getNumbers();
		
		for (Integer num : set) {
			System.out.println(num);
		};
		
		
	}

}
