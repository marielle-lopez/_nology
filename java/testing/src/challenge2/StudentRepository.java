package challenge2;

public class StudentRepository {
	private Student[] students = new Student[3];
	
	public StudentRepository() {
		Student student1 = new Student(1, "Alice", 20, 75, "Melbourne");
		Student student2 = new Student(2, "Bob", 50, 21, "Sydney");
		Student student3 = new Student(3, "Charlie", 68, 20, "Brisbane");
		
		students[0] = student1;
		students[1] = student2;
		students[2] = student3;
	}
	
	public boolean getStudent(int studentId) {
		for (Student student : students) {
			if (student.getStudentId() == studentId) {
				return true;
			}
		};
		
		return false;
	}
}
