package intro;

public class Strings {

	public static void main(String[] args) {
		// Strings
		
		// string concatenation
		String firstName = "Marielle";
		String lastName = "Lopez";
		String fullName = firstName + " " + lastName;
		System.out.println(fullName);
		
		int myAge = 24;
		System.out.println(String.format("%s is %d years old", firstName, myAge));
	}

}
