package interfaces;

public class Video implements IsMedia {
	private String title;
	
	public Video(String title) {
		this.title = title;
	};
	
	@Override
	public String getTitle() {
		return this.title;
	}
	
	@Override
	public String getFormat() {
		return "mp4";
	}
	
}
