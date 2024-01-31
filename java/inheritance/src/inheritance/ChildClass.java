package inheritance;

public class ChildClass extends ParentClass {
	public String name;
	
	public ChildClass(float data, String name) {
		super(data); // this points to the parent's constructor
		this.name = name;
	};
	
	public void childMethod() {
		System.out.printf("%s's data is: %.2f\n", this.name, this.data);
	};
}
