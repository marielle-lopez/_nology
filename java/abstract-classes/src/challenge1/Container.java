package challenge1;

public abstract class Container {
	protected float volume;
	public Container(float volume) {
		this.volume = volume;
	};
	abstract float getVolume();
	public float teaspoonCount() {
		return getVolume() / 150;
	};
	
}
