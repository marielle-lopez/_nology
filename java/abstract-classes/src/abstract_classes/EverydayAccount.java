package abstract_classes;

public class EverydayAccount extends Account {
	EverydayAccount(float balance) {
		this.balance = balance;
	};
	
	@Override
	float getInterestRate() {
		return 7f;
	};
}
