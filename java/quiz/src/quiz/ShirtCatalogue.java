package quiz;

import java.util.ArrayList;

public class ShirtCatalogue {
    public ArrayList<Shirt> shirts = new ArrayList<Shirt>();
    
    

    //  This code has been commented out to prevent it creating build errors
    //  Uncommenting this code is expected when you get to the appropriate question and is not the correct answer!
        
    public char getShirtSizeOfIndex(int index) {
        	if (index >= 0 && index < shirts.size()) {
        		return shirts.get(index).getSize();
        	}
        	
        	throw new IndexOutOfBoundsException("Index out of bounds");
        }
}
