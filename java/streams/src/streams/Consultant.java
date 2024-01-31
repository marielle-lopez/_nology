package streams;

import java.util.ArrayList;
import java.util.Optional;

public class Consultant {
	private String name;
	private String location;
	private double salary;
	private Integer id;
	public static Integer count = 0;
	
	private static ArrayList<Consultant> consultants = new ArrayList<>();
	
	public static Optional<Consultant> findByName(String name) {
		return consultants.stream()
				.filter(consultant -> consultant.getName().toLowerCase().equals(name.toLowerCase()))
				.peek(consultant -> System.out.println(consultant.getName()))
				.findFirst();
	};
	
	public static Double totalExpenditure() {
		// need to pass 3rd argument Double::sum
//		return consultants.stream().reduce(0.0, (total, c) -> total + c.getSalary(), Double::sum);
		return consultants.stream().mapToDouble(Consultant::getSalary).sum();
	};
	
	public static Double averageExpenditure() {
		// without orElse won't work
		// line without .orElse returns an optional because list might be 0 and method average() doesn't know that
		return consultants.stream().mapToDouble(c -> c.getSalary()).average().orElse(0.0);
	};
	
	public static ArrayList<Consultant> getConsultants() {
		return consultants;
	}
	
	public void increaseConsultantSalary() {
		this.setSalary(this.getSalary() + 5000);
		System.out.printf("Increased %s's salary by $5000.00\n", this.getName());
	};
	
	public void increaseConsultantSalary(Double amount) {
		this.setSalary(this.getSalary() + amount);
		System.out.printf("Increased %s's salary by $%.2f\n", this.getName(), amount);
	};
	
	public Consultant(String name, String location) {
		this.name = name;
		this.location = location;
		this.id = ++count; // first consultant will have id 1
		this.salary = 50000.00;
		consultants.add(this);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public static void setConsultants(ArrayList<Consultant> consultants) {
		Consultant.consultants = consultants;
	}
	
	
}
