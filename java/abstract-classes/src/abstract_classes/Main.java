package abstract_classes;

public class Main {

	public static void main(String[] args) {
		YouthSaverAccount savings = new YouthSaverAccount(100);
		System.out.println(savings.getReturn(2));
		savings.printInterestRate();
	}

}
