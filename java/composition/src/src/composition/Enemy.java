package composition;

// Object composition, data-oriented programming, data-driven programming

//class Vector2D {
//	public double x;
//	public double y;
//	
//	public Vector2D(double x, double y) {
//		this.x = x;
//		this.y = y;
//	};
//};



interface IHealth {
	int getHealth();
	void decrease();
};

interface HasPosition {
	Vector2D getPosition();
	void setPosition(Vector2D position);
};

interface HasVelocity extends HasPosition {
	Vector2D getPosition();
	void setPosition(Vector2D velocity);
};

public class Enemy implements HasPosition, HasVelocity {
	private Vector2D position;
	private Vector2D velocity;
	private Vector2D acceleration;
	private EnemyType type;
	
	public Enemy(Vector2D position, Vector2D velocity, Vector2D acceleration, EnemyType type) {
		this.setPosition(position);
		this.setVelocity(velocity);
		this.setAcceleration(acceleration);
		this.setType(type);
		
	}

	public Vector2D getPosition() {
		return position;
	}

	public void setPosition(Vector2D position) {
		this.position = position;
	}

	public Vector2D getVelocity() {
		return velocity;
	}

	public void setVelocity(Vector2D velocity) {
		this.velocity = velocity;
	}

	public Vector2D getAcceleration() {
		return acceleration;
	}

	public void setAcceleration(Vector2D acceleration) {
		this.acceleration = acceleration;
	}

	public EnemyType getType() {
		return type;
	}

	public void setType(EnemyType type) {
		this.type = type;
	};
}


// Enemy
// Position
// Velocity
// Acceleration
// Type
// Strength

// Ability
// Debuffs
// Effects
// Inventories




//class Entity {
//	// health
//};
//
//class Enemy {
//	
//};
//
//class SpecificEnemy {
//	
//};