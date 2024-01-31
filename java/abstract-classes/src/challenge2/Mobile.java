package challenge2;

public class Mobile extends Phone {
	public Mobile(int number) {
		super(number);
	};
	
	public void text(Mobile mobileToText, String message) {
		System.out.printf("To: %d\nMessage: %s\n", mobileToText.number, message);
	};
}
