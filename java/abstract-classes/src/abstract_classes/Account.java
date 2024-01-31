package abstract_classes;

public abstract class Account {
	float balance;
	abstract float getInterestRate();
	public float getReturn(int years) {
		float returnValue = this.balance;
		for (int i = 1; i <= years; i++) {
			returnValue = returnValue + (returnValue * this.getInterestRate());
		};
		
		return returnValue;
	};
	
	public void printInterestRate() {
		System.out.printf("The current interest rate is %.2f%%.", this.getInterestRate() * 100);
	};
}
