package inheritance.music;

public class Song extends Track {
	private String artist;
	private String genre;
	
	public Song(float length, String extension, String name, String artist, String genre) {
		super(length, extension, name);
		this.artist = artist;
		this.genre = genre;
	};
	
	
	@Override
	public void printTrackInfo() {
		System.out.printf("%s_%s - %.2fm\n", this.artist.toLowerCase(), this.generateFileName(), this.length);
	};
}
