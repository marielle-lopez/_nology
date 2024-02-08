package io.nology.intro.greeting;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

import org.springframework.stereotype.Service;

// this is playing with the idea of a repository
// but, this is not the correct syntax for a "real" repository

@Service
public class NameRepository {
	private ArrayList<String> names;
	
	public NameRepository() {
		this.names = new ArrayList<String>(Arrays.asList("alice", "bob", "charlie"));
	}

	public Optional<String> findByName(String name) {
		Optional<String> foundName = names
				.stream()
				.map(n -> n.toLowerCase())
				.filter(n -> n.equals(name))
				.findFirst();
		return foundName;
	}

	public String saveName(String formattedName) {
		if (!names.contains(formattedName)) {			
			names.add(formattedName);
		}
		
		return formattedName;
	};
}
