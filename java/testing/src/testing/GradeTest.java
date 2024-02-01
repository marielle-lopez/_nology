package testing;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class GradeTest {
	
//	Grade grade;

//	@BeforeEach
//	void setUp() throws Exception {
//		Grade grade = new Grade(50);
//	}

	@Test
	void isPassing_MarkIs50_ReturnsTrue() {
		Grade grade = new Grade(50);
		assertTrue(grade.isPassing());
	}
	
	@Test
	void isPassing_MarkIs49_ReturnsFalse() {
		Grade grade = new Grade(49);
		assertFalse(grade.isPassing());
	}
	
	@Test
	void getGradeString_MarkIs90_ReturnsHighDistinction() {
		Grade grade = new Grade(90);
		assertEquals("High Distinction", grade.getGradeString());
	}
	
	@Test
	void getGradeString_MarkIsOver100_ReturnsNull() {
		Grade grade = new Grade(200);
		assertEquals(null, grade.getGradeString());
	}
	

}
