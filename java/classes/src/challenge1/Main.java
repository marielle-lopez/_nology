package challenge1;

public class Main {

	public static void main(String[] args) {
//		Animal cat = new Animal("cat", "meow");
		
		Animal cat = new Animal();
		cat.printDescription();
		
		Animal dog = new Animal("dog", "woof");
		dog.printDescription();
		
		Animal bear = new Animal("bear", "roar");
		bear.printDescription();
		
		
	}

}
