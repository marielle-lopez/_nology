package quiz;

import java.util.ArrayList;

public class FunctionsWithExceptions {

	// This function can throw an exception sometimes, what would cause this exception to throw and how can we fix it?


	public static Boolean checkPass(String pass) {
		if (pass!= null && pass.equals("MyPass")) return true;
		return false;
	}

	final Integer secretCode = new Integer(123);
	ArrayList<Integer> previousAttempts = new ArrayList();

	public Boolean verifyCode(int attempt) {
		Integer currentAttempt = new Integer(attempt);
		previousAttempts.add(currentAttempt);
		if (currentAttempt == secretCode) return true;

		return false;
	}
}