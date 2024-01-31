package challenge2;

public class Main {

	public static void main(String[] args) {
		Mobile mobile1 = new Mobile(123);
		Mobile mobile2 = new Mobile(456);
		
		mobile1.call(mobile2);
		
		System.out.println();
		
		mobile1.text(mobile2, "Hello!");
		
		System.out.println();

		Landline landline1 = new Landline(123, "42 Wallaby Way, Sydney\n");
		landline1.printInfo();
	}

}
