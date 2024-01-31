package interfaces;

public class Book implements IsMedia {
	private String title;
	private String author;
	private Integer released;
	
	public Book(String title, String author, Integer released) {
		this.title = title;
		this.author = author;
		this.released = released;
	};
	
	@Override
	public String getTitle() {	
		return this.title;
	}

	@Override
	public String getFormat() {
		return "pdf";
	}
	
	public String getAuthor() {
		return this.author;
	};
}
