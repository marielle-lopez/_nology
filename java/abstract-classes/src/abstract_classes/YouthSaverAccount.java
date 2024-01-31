package abstract_classes;

public class YouthSaverAccount extends Account {
	YouthSaverAccount(float balance) {
		this.balance = balance;
	};
	
	@Override
	float getInterestRate() {
		// we can do anything here, database lookup, API call, read from a file
			// just as long as we return a float!
		return 0.05f;
	};
}
