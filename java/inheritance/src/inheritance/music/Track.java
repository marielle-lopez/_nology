package inheritance.music;

public class Track {
	protected float length;
	private String name;
	private String extension;
	
	public Track (float length, String extension, String name) {
		this.setExtension(extension);
		this.setLength(length);
		this.setName(name);
	};
	
	public void setLength(float length) {
		this.length = length;
	};
	
	public void setName(String name) {
		this.name = name;
	};
	
	protected String getExtension() {
		return this.extension;
	};
	
	public void setExtension(String extension) {
		this.extension = extension.toLowerCase();
	};
	
	protected String getName() {
		return this.name;
	};
	
	public String getFileName() {
		return this.name.toLowerCase() + "." + this.extension;
	};
	
	protected String generateFileName() {
		return this.name.toLowerCase().replace(" ", "-") + "." + this.extension;
	};
	
	public void printTrackInfo() {
		System.out.printf("%s - %.2fm", this.generateFileName(), this.length);
	};
}
