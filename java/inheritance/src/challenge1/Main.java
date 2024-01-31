package challenge1;

public class Main {

	public static void main(String[] args) {
		// create teachers Alex and Calum
		Teacher teacher1 = new Teacher("Alex");
		Teacher teacher2 = new Teacher("Calum");
		// create 3 students
		Student student1 = new Student("Reece", "Wales");
		Student student2 = new Student("Mitch", "Wales");
		Student student3 = new Student("Marielle", "Wales");
		
		// put all 5 people into an array. make them say their name
		Person[] people = {teacher1, teacher2, student1, student2, student3};
		for (Person person : people) {
			person.sayYourName();
		};
		System.out.println();
		
		// make Calum and Alex have a meeting
		teacher1.callMeeting(teacher2);
		System.out.println();
		
		// make both teachers have a meeting with a student each
		Teacher[] teachers = {teacher1, teacher2};
		Student[] students = {student1, student2, student3};
		for (Teacher teacher: teachers) {
			for (Student student: students) {
				teacher.callMeeting(student);
			};
		};
	};
};
