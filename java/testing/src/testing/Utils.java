package testing;

import java.util.ArrayList;
//import java.util.HashSet;

public class Utils {
	public static int add(int a, int b) {
		return a + b;
	};
	
	public static int divide(int a, int b) {
		return a / b;
	}
	
	public static ArrayList<Integer> unique(ArrayList<Integer> input) {
		ArrayList<Integer> set = new ArrayList<Integer>();
		
		for (int i = 0; i < input.size(); i++) {
			if (!set.contains(input.get(i))) {
				set.add(input.get(i));
			}
		}
			
		return set;
		
		// return input.stream().distinct().collect(Collectors.toCollection(ArrayList::new));
		
//		 HashSet<Integers> unique = new HashSet<>(input);
//		 return new ArrayList<Integers>(unique);
	}	
}
