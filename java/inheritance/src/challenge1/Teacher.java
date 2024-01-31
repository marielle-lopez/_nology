package challenge1;

public class Teacher extends Person {
	public Teacher(String name) {
		super(name);
	};
	
	public void callMeeting(Person person) {
		System.out.printf("A meeting is being held between %s and %s.\n", this.name, person.name);
	};
}
