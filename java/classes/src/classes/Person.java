package classes;

public class Person {
	public String firstName = "Marielle";
	public int age = 24;
	private String middleName = "Louisse";
	private String lastName = "Lopez";
	
	 // this is a method
	public Person (String firstName, int age) { 
		// '.this' refers to the instance of the Person that is being created
		this.firstName = firstName;
		this.age = age;
	};
	
	public void setAge(int age) {
		if (age < 0) {
			this.age = 0;
			return;
		}
		
		this.age = age;
	};
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	};
	
	public String getLastName() {
		return this.lastName;
	}
}
