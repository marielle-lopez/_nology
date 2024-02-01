package generics;

import java.util.Date;

public class Food extends Product {
	Date expiry;

	public Food(String name, double price, Date expiry) {
		super(name, price);
		this.expiry = expiry;
	}

	@Override
	public String toString() {
		return "Food [expiry=" + expiry + ", GST=" + GST + ", price=" + price + ", name=" + name + ", priceWithGST()="
				+ priceWithGST() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	
	
}
