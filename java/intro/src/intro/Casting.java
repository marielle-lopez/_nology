package intro;

public class Casting {

	public static void main(String[] args) {
		// Casting values
		// converting one type of value to another
		
		byte myByte1 = 12;
		short myShort1 = (short) myByte1;
		System.out.println(myShort1);
		
		int charCode = (int) 'A'; // gives UTF-16 unicode of 'A'
		System.out.println(charCode);
		
		// be careful with casting, you can lose data
		// this leads to bugs
		short myShort2 = 300;
		byte myByte2 = (byte) myShort2; // we get overflow here
		System.out.println(myByte2);
		// we lose info
		short myShort3 = (short) myByte2;
		System.out.println(myShort3); // don't get the original 300
		
		// in order to not lose any information, we can only cast from smaller to bigger
		// boolean (1 bit) -> byte, short, int, long, float, double, char
		// byte (8-bit signed)-> short, int, long, float, double, char
		// short (16-bit signed) -> int, long, float, double, char
		// char (16-bit signed) -> int, long, float, double
		// int (32-bit signed) -> long, float (be careful), double
		// long (64-bit signed) -> double;
		// float (32-bit) -> long, double;
		// double (64-bit) -> nothing;
	}

}
