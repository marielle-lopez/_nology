package generics;

import java.util.ArrayList;
import java.util.Date;

public class App {

	public static void main(String[] args) {
		// Generics - type parameters
		// ArrayList<T>: T is type; T is a general type
		// ArrayList<String> names = new ArrayList<String>();
		
		Integer[] luckyNumbers = {22, 12};
		Favourites<Integer> faveNumbers = new Favourites<Integer>(luckyNumbers);
		faveNumbers.numberOne();
		
		Favourites<Character> faveLetters = new Favourites<Character>(new Character[] {'M', 'L', 'X'});
		faveLetters.numberOne();
		
		Book book1 = new Book("Rage Becomes Her", "Saraya Chemaly", 20.00);
		Book book2 = new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 15.00);
		
		Favourites<Book> faveBooks = new Favourites<Book>(new Book[] {book1, book2});
		faveBooks.numberOne();
		faveBooks.topThree();
		faveLetters.topThree();
		
		String[] names = {"Alice", "Bob", "Charlie"};
		ArrayHelpers.listItems(names);
		Character[] letters = {'M', 'L', 'X'};
		ArrayHelpers.listItems(letters);
		Double[] prices = {20.00, 13.99, 109.50};
		ArrayHelpers.listItems(prices);
		ArrayHelpers.listItems(new Book[] {book1, book2});
		
		Coordinate<Integer> position = new Coordinate<Integer>(10, 20);
		Coordinate<Double> statueOfLiberty = new Coordinate<Double>(40.689, -74.044);
//		Coordinate<String> wrong = new Coordinate<String>("Hello", "world!"); // won't work because String does not extend Number
		
		
		Food apple = new Food("Apple", 0.75, new Date());
		Food orange = new Food("Orange", 1.00, new Date());
		System.out.println(apple);
		
		Catalogue<Book> books = new Catalogue<Book>(new ArrayList<Book>());
		books.addItem(book1);
		books.addItem(book2);
		System.out.println(books.calculateTotalWithTax());
		System.out.println(books.calculateTotalWithoutTax());
		
		Catalogue<Food> groceries = new Catalogue<Food>();
		groceries.addItem(orange);
		groceries.addItem(apple);
		System.out.println(groceries.calculateTotalWithoutTax());
		
		Catalogue<Product> shopping = new Catalogue<Product>();
		shopping.addItem(orange);
		shopping.addItem(apple);
		shopping.addItem(book1);
		shopping.addItem(book2);
	}

}
