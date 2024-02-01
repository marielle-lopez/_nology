package generics;

import java.util.ArrayList;

// T can be any letter, could be P

public class Catalogue<T extends Product> {
	ArrayList<T> productList = new ArrayList<T>();

	public Catalogue(ArrayList<T> productList) {
		this.productList = new ArrayList<T>();
	}
	
	public Catalogue() {};
	
	public void addItem(T item) {
		this.productList.add(item);
	};
	
	public Double calculateTotalWithoutTax() {
		return productList.stream().mapToDouble(Product::getPrice).sum();
	};
	
	public Double calculateTotalWithTax() {
		return productList.stream().mapToDouble(Product::priceWithGST).sum();
	};
}
