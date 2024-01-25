package methods;
//import java.lang.Math;

public class Main {

	public static void main(String[] args) {
		int additionResult = Maths.add(1, 1);
		System.out.println(additionResult);
		
//		System.out.println(Person.species); // don't need to instantiate a person to access a static property or method
		Person.printSpecies();
		
		Person me = new Person("Marielle", "Louisse", "Lopez");
		String myFullName = me.getFullName();
		System.out.println(myFullName);
		
		Person anotherPerson = new Person("Jane", "Doe");
		String theirFullName = anotherPerson.getFullName();
		System.out.println(theirFullName);
		
		System.out.println(anotherPerson);
		
		double circleArea = Area.findArea(2.0);
		double rectangleArea = Area.findArea(4.0, 3.0);
//		System.out.println(Math.round(area));
		System.out.println(circleArea);
		System.out.println(rectangleArea);
		
		System.out.println(DateFormatter.formatToHours(3610));
		System.out.println(DateFormatter.formatToHours(3610, 1));
	}

}
