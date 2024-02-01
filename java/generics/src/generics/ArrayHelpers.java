package generics;

public class ArrayHelpers {
//	public static void listItems(String[] strArr) {
//		for (int i = 0; i < strArr.length; i ++) {
//			System.out.println(String.format("%s. %s", i + 1, strArr[i]));
//		};
//	};
//	
//	public static void listItems(Character[] strArr) {
//		for (int i = 0; i < strArr.length; i ++) {
//			System.out.println(String.format("%s. %s", i + 1, strArr[i]));
//		};
//	};
	
	public static <T> void listItems(T[] arr) {
		for (int i = 0; i < arr.length; i ++) {
			System.out.println(String.format("%s. %s", i + 1, arr[i]));
		};
	};
}
