package inheritance;

import inheritance.music.Podcast;
import inheritance.music.Song;

public class Main {

	public static void main(String[] args) {
		ParentClass parent = new ParentClass(5.12312313f);
		parent.ParentMethod();
		
		ChildClass child = new ChildClass(1.234567f, "Louisse");
		child.ParentMethod();
		child.childMethod();
		
		// Bohemian Rhapsody
		Song s = new Song(6.00f, "MP3", "Bohemian Rhapsody", "Queen", "Rock");
		s.printTrackInfo();

		Podcast p = new Podcast (50.00f, "WAV", "The Worst Idea of All Time", 1);
		p.printTrackInfo();
	}

}
