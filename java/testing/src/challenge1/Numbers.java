package challenge1;

import java.util.ArrayList;

public class Numbers {
	public ArrayList<Integer> integers;
	
	public Numbers(ArrayList<Integer> integers) {
		this.integers = integers;
	};
	
	public ArrayList<Integer> getNumbers() {
		ArrayList<Integer> set = new ArrayList<Integer>();
		
		for (int i = 0; i < this.integers.size(); i++) {
			if (!set.contains(this.integers.get(i))) {
				set.add(this.integers.get(i));
			}
		}
		
		return set;
	}	
}
