package composition;

public class App {

	public static void main(String[] args) {
		// code along 3
		Enemy creeper = new Enemy(
				new Vector2D(0, 0),
				new Vector2D(10, 0),
				new Vector2D(1, 0),
				EnemyType.Zombie
		);
		
		Enemy onyxia = new Enemy(
				new Vector2D(0, 0),
				new Vector2D(10, 0),
				new Vector2D(10, 10),
				EnemyType.Dragon
		);
	}

}
