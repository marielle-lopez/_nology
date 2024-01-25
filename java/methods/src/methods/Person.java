package methods;

public class Person {
	private String firstName;
	private String middleName;
	private String lastName;
	static private String species = "Homo sapiens";
	
	public Person(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	public Person(String firstName, String middleName, String lastName) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
	};
	
	public static void printSpecies() {
		System.out.println(Person.species);
	};
	
	public String getFullName() {
		if (this.middleName != null) {
			return this.firstName + " " + this.middleName + " " + this.lastName;
		}
		
		return this.firstName + " " + this.lastName;
	};
	
	// @Override - can add this to indicate to other devs you are overriding
	public String toString() {
		return String.format("%s - %s", this.firstName, Person.species);
	};
}
