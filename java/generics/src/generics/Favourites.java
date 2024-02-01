package generics;

// can't determine size of array because Java doesn't know how big it'll be

public class Favourites<T> {
	private T[] collection;
	
	public Favourites(T[] collection) {
		this.collection = collection;
	};
	
	public void numberOne() {
		System.out.println("My favourite is " + this.collection[0]);
	};
	
	public void topThree() {
		try {
			System.out.println(String.format("My favourite top three are %s, %s, and %s", this.collection[0], this.collection[1],this.collection[2]));
		} catch(Exception e) {
			System.out.println(String.format("Sorry, I only have %s favourites", collection.length));
		}
	};
}
