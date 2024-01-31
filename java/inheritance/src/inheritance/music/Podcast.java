package inheritance.music;

public class Podcast extends Track{
	private String[] guests;
	private int episode;
	private String topic;
	
	public Podcast(float length, String extension, String name, int episode) {
		super(length, extension, name);
		this.episode = episode;
	};
	
	public Podcast(float length, String extension, String name, int episode, String[] guests) {
		this(length, extension, name, episode);
		this.guests = guests;
	};
	
	public Podcast(float length, String extension, String name, int episode, String topic) {
		this(length, extension, name, episode);
		this.topic = topic;
	};
	
	public Podcast(float length, String extension, String name, int episode, String topic, String[] guests) {
		this(length, extension, name, episode);
		this.topic = topic;
		this.guests = guests;
	};
	
	@Override
	public void printTrackInfo() {
		System.out.printf("ep%s_%s.%s - %.2fm", this.episode, this.getName().toLowerCase().replace(" ", "-"), this.getExtension().toLowerCase(), this.length);
	};
}
