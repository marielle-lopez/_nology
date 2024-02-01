package generics;

// Java weirdly uses extends in generics for both Classes and Interfaces

public class Coordinate<T extends Number> {
	T x;
	T y;
	
	public Coordinate(T horizontal, T vertical) {
		this.x = horizontal;
		this.y = vertical;
	};
}
