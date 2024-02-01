package generics;

public class Book extends Product {
	private String author;
	
	public Book(String name, String author, Double price) {
		super(name, price);
		this.author = author;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	@Override
	public String toString() {
		return this.getName();
	}
	
	
}
