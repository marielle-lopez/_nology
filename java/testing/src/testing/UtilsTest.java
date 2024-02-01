package testing;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UtilsTest {

	@BeforeEach
	void setUp() throws Exception {
	}

	@Test
	void add_TwoPositiveIntegers_ReturnsSum() {
		// Arrange
		int expectedResult = 4;
		// Act
		int actual = Utils.add(2, 2);
		// Assert
		assertEquals(expectedResult, actual);
	}


	@Test
	void add_TwoNegativeIntegers_ReturnsSum() {
		assertEquals(-5, Utils.add(-2, -3));
	}
	
	@Test
	void divide_DivisorIsZero_ThrowsArithmeticException() {
		assertThrows(ArithmeticException.class, () -> Utils.divide(10, 0));
	}
	
	@Test
	void unique_ListWithNoDuplicates_ReturnsTheSameList() {
		ArrayList<Integer> input = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
		ArrayList<Integer> expected = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
		assertEquals(expected, Utils.unique(input));
	};
	
	@Test
	void unique_ListWithDuplicates_ReturnsUniqueList() {
		ArrayList<Integer> input = new ArrayList<>(Arrays.asList(1, 1));
		ArrayList<Integer> expected = new ArrayList<>(Arrays.asList(1));
		assertEquals(expected, Utils.unique(input));
	}
	
	@Test
	void unique_ListWithDuplicates_ReturnsShorterList() {
		ArrayList<Integer> input = new ArrayList<>(Arrays.asList(1, 1));
		ArrayList<Integer> result = Utils.unique(input);
		assertTrue(result.size() < input.size());
	}
}
