package challenge1;

public class Person {
	protected String name;
	
	public Person(String name) {
		this.name = name;
	};
	
	public String getName() {
		return this.name;
	};
	
	public void setName(String name) {
		this.name = name;
	};
	
	public void sayYourName() {
		System.out.printf("My name is %s.\n", this.name);
	};
}
