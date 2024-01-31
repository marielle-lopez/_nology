package interfaces;

public class Pig extends Animal implements MakesSound, HasFavourite {
	public Pig(String name) {
		super(name);
	};
	
	public String makeSound() {
		return "oink";
	};
	
	public String favouriteFood() {
		return "carrot";
	};
	
	public String greet() {
		return this.makeSound() + " " + this.makeSound() + " my name is " + this.getName();
	};
}
