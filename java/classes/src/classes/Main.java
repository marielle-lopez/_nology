package classes;

public class Main {

	public static void main(String[] args) {
		Person me = new Person("Marielle", 24);
		Person anotherMe = new Person("Emelle", 24);
		
		System.out.println(me);
		System.out.println(me.firstName);
		System.out.println(me == anotherMe);
		
		anotherMe.firstName = "Emelle";
		System.out.println(anotherMe.firstName);
		
		Person youngerMe = new Person("Marielle", 23);
		System.out.println(youngerMe.firstName + " " + youngerMe.age);
		
		Person abstractMe = new Person("Emelle", 22);
		abstractMe.setLastName("Aurora");
		System.out.println(abstractMe.getLastName());
		abstractMe.setAge(-10);
		System.out.println(abstractMe.age);
	}

}
