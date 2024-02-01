package challenge2;

public class Student {
	private int studentId;
	private String name;
	private int age;
	private String grade;
	private String location;
	
	public Student(int studentId, String name, int age, int grade, String location) {
		this.studentId = studentId;
		this.name = name;
		this.age = age;
		this.location = location;
		
		this.grade = calculateGrade(grade);
	};
	
	public int getStudentId() {
		return this.studentId;
	}
	
	public static String calculateGrade(int grade) {
		if (grade > 84) { return "High Distinction"; };
		if (grade > 74) { return "Distinction"; };
		if (grade > 64) { return "Credit"; };
		if (grade > 49) { return "Pass"; };
		
		return "Fail";
	};
	
	public boolean isMelbourne() {
		if (this.location.toLowerCase() == "melbourne") {
			return true;
		}
		
		return false;
	}
}
