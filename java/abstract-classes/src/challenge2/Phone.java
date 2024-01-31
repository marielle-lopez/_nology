package challenge2;

public abstract class Phone {
	protected int number;
	
	public Phone(int number) {
		this.number = number;
	};
	
	public void call(Phone phoneToCall) {
		System.out.printf("Calling %d...\n", phoneToCall.number);
	};
}
