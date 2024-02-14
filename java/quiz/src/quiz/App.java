package quiz;

import java.util.ArrayList;

public class App {
	
//	public static String toLowerCase(String str) {
//		String tmp = "";
//		
//		for (int i = 0; i < str.length(); ++i) {
//			int code = (int) str.charAt(i);
//			if (code <= 90) {
//				tmp += (char) code - 32;
//			} else {
//				tmp += (char) code;
//			}
//		};
//		
//		return tmp;
//	};
//	
//	public static String otherToLowerCase(String str) {
//		return str.chars().reduce((string, next) -> next <= 90 ? next - 32 : next).toString();
//	};
	
	
	public static void main(String[] args) {
		
//		 System.out.println(toLowerCase("HI"));
		// System.out.println(otherToLowerCase("hi"));
				
		// Shirt shirt = new Shirt();
		// ShirtCatalogue<Shirt> catalogue = new ShirtCatalogue<Shirt>();
		// catalogue.add(shirt);
		
		System.out.println(FunctionsWithExceptions.checkPass(null));
		
		System.out.println(StringUtils.toLowerCase("HELLO"));
		
		Shirt shirt = new Shirt();
		ShirtCatalogue catalogue = new ShirtCatalogue();
		catalogue.shirts.add(shirt);
		System.out.println(catalogue.getShirtSizeOfIndex(0));
	}
}