package challenge1;

public class Student extends Person {
	private String cohort;
	public Student(String name, String cohort) {
		super(name);
		this.cohort = cohort;
	};
	
	@Override
	public void sayYourName() {
		System.out.printf("My name is %s, and I'm part of the %s cohort.\n", this.name, this.cohort);
	};
}
