package generics;

public abstract class Product {
	final double GST = 0.1;
	double price;
	String name;
	
	public Double priceWithGST() {
		return this.price + (this.price * GST);
	};
	
	public Product(String name, double price) {
		this.name = name;
		this.price = price;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	};
	
	
}
