package intro;

public class Main {

	public static void main(String[] args) {
		System.out.print(""); // printing to console without line breaks
		byte myByte = 126;
		System.out.println(myByte);
		myByte++; // same increment operators as JavaScript
		System.out.println(myByte);
		
		// numbers will overflow and starts from the start limit
		myByte += 10;
		System.out.println(myByte);
		
		// short range -32768 to 32767
		short myShort = 5222;
		System.out.println(myShort);
		
		// int range -2,147,483,648 to 2,147,483,647
		int myInt = 1_234_567_890; // you can use underscores for code readability
		System.out.println(myInt);
		
		// long
		long myLong = 2147483648L; // need to add L at the end - gotcha
		System.out.println(myLong);
		
		// float
		// when we type decimals, Java automatically thinks of double
		float myFloat = 1.234F; // need to add F at the end - gotcha
		System.out.println(myFloat);
		
		// double
		// Java assumes all decimals are doubles by default
		double myDouble = 1.123123123;
		System.out.println(myDouble);
		
		// boolean
		// smallest piece of memory we can use in Java; 1 bit
		boolean myBool = true;
		System.out.println(myBool);
		
		// char
		// uses single quotes, takes up 2 bytes
		char myChar = 'A';
		System.out.println(myChar);
	}

}
