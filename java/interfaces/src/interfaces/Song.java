package interfaces;

public class Song implements IsMedia {
	private String title;
	private String format = "mp3";
	
	public Song(String title, String format) {
		this.title = title;
		
		if (format != null) {
			this.format = format;
		};
	};
	
	@Override
	public String getTitle() {
		return this.title;
	}

	@Override
	public String getFormat() {
		return this.format;
	}
	
}
