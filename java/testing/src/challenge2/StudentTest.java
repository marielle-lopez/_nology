package challenge2;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class StudentTest {

	@Test
	void calculateGrade_GradeIs50_ReturnsPass() {
		assertEquals("Pass", Student.calculateGrade(50));
	};
	
	@Test
	void isMelbourne_StudentLocationIsSydney_ReturnsFalse() {
		Student student = new Student(123, "Bob", 22, 80, "Sydney");
		assertFalse(student.isMelbourne());
	};
}
