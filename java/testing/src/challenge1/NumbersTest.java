package challenge1;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.Test;

class NumbersTest {
	@Test 
	void getNumbers_UniqueIntegers_ReturnsIntegerArrayList() {
		// arrange
		ArrayList<Integer> expected = new ArrayList<Integer>(Arrays.asList(22, 12));
		
		// act
		Numbers numbers = new Numbers(new ArrayList<Integer>(Arrays.asList(22, 12)));
		ArrayList<Integer> actual = numbers.getNumbers();
		
		// assert
		assertEquals(expected, actual);
	};
	
	
	@Test
	void getNumbers_NonUniqueIntegers_ReturnsIntegerArrayList() {
		//arrange
		ArrayList<Integer> passedList = new ArrayList<Integer>(Arrays.asList(22, 12, 22));
		ArrayList<Integer> expected = new ArrayList<Integer>(Arrays.asList(22, 12));
		
		// act
		Numbers numbers = new Numbers(passedList);
		ArrayList<Integer> actual = numbers.getNumbers();
		
		// assert
		assertEquals(expected, actual);
	}
}
