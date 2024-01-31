package challenge2;

public class Landline extends Phone {
	private String address;
	
	public Landline(int number, String address) {
		super(number);
		this.address = address;
	};
	
	public void printInfo() {
		System.out.printf("%d - %s\n", this.number, this.address);
	};
}
