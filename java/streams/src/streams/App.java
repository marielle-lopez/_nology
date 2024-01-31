package streams;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class App {

	public static void main(String[] args) {
		Integer[] numbers = {1, 2, 3, 4, 5};
		Integer[] doubled = new Integer[numbers.length];
		
		for(int i = 0; i < numbers.length; i++) {
			doubled[i] = numbers[i] * 2;
		};
		
//		System.out.println(Arrays.toString(doubled));
		
		
		Stream<Integer> numberStream = Stream.of(numbers);
//		Stream<Integer> doubledStream = numberStream.map(MathHelpers::doubleNum);
		Stream<Integer> doubledStream = numberStream.map(n -> n * 2);
		Integer[] largeDoubles = Stream.of(numbers).map(n -> n * 2).filter(n -> n > 5).toArray(Integer[]::new);
		Integer[] doubledNumbers = doubledStream.toArray(Integer[]::new);
		System.out.println(Arrays.toString(doubledNumbers));
		System.out.println(Arrays.toString(largeDoubles));
		
		
		// filter
		ArrayList<String> names = new ArrayList<String>(Arrays.asList("Alex", "Andrew", "Bob", "Charlie", "Alice", "Dylan", "Eddie"));
		
//		ArrayList<String> namesStartingWithA = new ArrayList<String>();
//		for (String name: names) {
//			if(name.toLowerCase().charAt(0) == 'a') {
//				namesStartingWithA.add(name);
//			};
//		};
		
		// turn ArrayList into Stream using [list].stream()
		// turn stream into ArrayList using .collect*(
		ArrayList<String> namesStartingWithA = names.stream()
				.filter(name -> name.toLowerCase().charAt(0) == 'a')
				.collect(Collectors.toCollection(ArrayList::new));
		
		// collect and toArray are terminal operations; they stop the stream
			// another terminal operation is for each
		System.out.println(namesStartingWithA);
		
//		names.stream().filter(name -> name.toLowerCase().charAt(0) == 'a')
//			.forEach(name -> System.out.println("Hello, " + name));
		
		// there are also intermediate operations that don't stop the stream, like peek()
		ArrayList<String> longNames = names.stream()
				.filter(name -> name.toLowerCase().charAt(0) == 'a')
				.peek(name -> System.out.println("Hi, " + name))
				.filter(name -> name.length() > 4)
				.collect(Collectors.toCollection(ArrayList::new));
		
		System.out.println(longNames);
		
		// optionals are typically found in functional programming
			// findFirst() returns an optional
			// use them when you don't know if a value is available or will be returned
			// optionals are typically used when you're working with data
			// optionals have specific methods for it, helps you avoid compiler error
		Optional<String> maybeName = names.stream()
				.filter(name -> name.toLowerCase().charAt(0) == 'a')
				.peek(name -> System.out.println("Hi, " + name))
				.filter(name -> name.length() > 4)
				.findFirst();
		
		// we don't see Hi, Alice due to Stream aggregation
		if(maybeName.isPresent()) {
			System.out.println(maybeName.get());
		} else {
			System.out.println("Sorry, couldn't find name");
		};
		
		String username = names.stream().filter(name -> name.toLowerCase().charAt(0) == 'f').findFirst().orElse("Guest");
		System.out.println("Hello, " + username);
		
		
		// consultants
		Consultant alice = new Consultant("Alice", "Adelaide");
		Consultant bob = new Consultant("Bob", "Brisbane");
		Consultant charlie = new Consultant("Charlie", "Canberra");
		
		System.out.println(Consultant.count);
		System.out.println(alice.getId() + " " + bob.getId() + " " + charlie.getId());
		
		Optional<Consultant> maybeConsultant = Consultant.findByName("Alice");
		if (maybeConsultant.isPresent()) {
			System.out.println("Hello, " + maybeConsultant.get().getName());
		} else {
			System.out.println("Sorry, no such consultant exists");
		};
		
		
		// reduce
		// initial value first, then lambda function
		Integer sum = Stream.of(numbers).reduce(0, (total, next) -> total + next);
		System.out.println(sum);
		
		System.out.println(String.format("Total expenditure is $%.2f", Consultant.totalExpenditure()));
		System.out.println(String.format("Average expenditure is $%.2f", Consultant.averageExpenditure()));
		
		
		// TODO create method to increase a consultant's salary by an amount
		bob.increaseConsultantSalary(5.00);
		
		// TODO create default method to increase consultant's salary by $5000
			// use method overloading
		alice.increaseConsultantSalary();
		
		// TODO using streams, increase all consultants' salaries by $5000
		Consultant.getConsultants().stream()
		.forEach(c -> c.increaseConsultantSalary());
		
		// TODO give consultants living in Adelaide a bonus increase of $500
		Consultant.getConsultants().stream()
		.filter(c -> c.getLocation() == "Adelaide")
		.forEach(c -> c.increaseConsultantSalary(500.00));
		
	}

}
