package challenge1;

public class Animal {
	private String species = "cat";
	private String sound = "meow";
//	private String name;
	
	public Animal (String species, String sound) {
		this.species = species;
		this.sound = sound;
	};
	
	public Animal() {	
	};
	
	public String getSound() {
		return this.sound;
	};
	
	public void printDescription() {
		System.out.println(String.format("A %s %ss", this.species, this.sound));
	};
}
