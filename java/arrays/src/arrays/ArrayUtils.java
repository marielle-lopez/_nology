package arrays;

import java.util.Arrays;

public class ArrayUtils {
	static int[] incrementElements(int[] arr) {
		int[] incrementedArr = Arrays.copyOf(arr, arr.length);
		for (int i = 0; i < arr.length; i++) {
			incrementedArr[i]++;
		}
		return incrementedArr;
	};
	
	static int[] reverseElements(int[] arr) {
		int[] reversedArr = Arrays.copyOf(arr, arr.length);
		for (int i = 0; i < arr.length; i++) {
			reversedArr[i] = arr[arr.length - 1 - i];
		}
		return reversedArr;
	};
}
