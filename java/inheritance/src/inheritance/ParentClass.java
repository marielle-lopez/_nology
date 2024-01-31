package inheritance;

public class ParentClass {
	public float data;
	
	public ParentClass(float data) {
		this.data = data;
	};
	
	public void ParentMethod() {
		System.out.printf("Parent method: Data is %.2f\n", data);
	};
}
