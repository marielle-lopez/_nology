package multidimensional_arrays;

import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
//		int[][] grid = {{1, 2}, {3, 4}};
//		System.out.println(Arrays.toString(grid)); // [[I@27f674d, [I@1d251891]
//		
//		for (int i = 0; i < grid.length; i++) {
//			for (int j = 0; j < grid[i].length; j++) {
//				System.out.print(grid[i][j] + " ");
//			}
//			System.out.println();
//		};
		
//		for (int i = 0; i < grid.length; i++) {
//			int[] row = grid[i];
//			System.out.println(Arrays.toString(row));
//			for (int j = 0; j < row.length; j++) {
//				System.out.println(row[j]);
//			}
//		};
		
		int[][][][] arr = new int[2][2][3][4];
		int num = 1;
		
		
		for (int i = 0; i <= 1; i++) {
			for (int j = 0; j <= 1; j++) {
				for (int k = 0; k <= 2; k++) {
					for (int l = 0; l <=3; l++) {
						arr[i][j][k][l] = num;
						System.out.print(num + " ");
						num++;
					}
					System.out.println();
				}
				System.out.println();
			}
		}
		
		System.out.println(Arrays.toString(arr[0][0][0]));
		
		for(int[][][] threeDArray : arr) {
			for(int[][] twoDArray : threeDArray) {
				for(int[] lastArray : twoDArray) {
					System.out.println(Arrays.toString(lastArray));
				}
			}
		}
		
//		System.out.println(Arrays.deepToString(arr));
		
	}

}