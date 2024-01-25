package control_flow;

public class Loops {

	public static void main(String[] args) {
		// for loops work the same as JavaScript
		
		for (int i = 0; i <= 5; i++) {
//			if (i % 2 == 0) {
//				System.out.println(i);
//			}
			
//			if (i % 2 != 0) {
//				continue;
//			}
//			
//			System.out.println(i);
			
			if ((i & 1) != 1) {
				System.out.println(i);
			}
		}
		
		// for division, if you're expecting a float, you need to make either the numerator or denominator a float
	}

}
