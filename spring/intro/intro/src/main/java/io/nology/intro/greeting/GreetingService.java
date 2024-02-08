package io.nology.intro.greeting;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

@Service
public class GreetingService {
	
	@Autowired
	private NameRepository namesRepository;
	
	public String sayHello() {
		return "Hello from the service.";
	}

	public String sayGoodbye() {
		return "Goodbye from the service.";
	}

	public String greet(String name) {
		Optional<String> maybeName = this.namesRepository.findByName(name.toLowerCase());
		
		if (maybeName.isPresent()) {
			String foundName = maybeName.get().toUpperCase();
			return String.format("Hello %s", foundName);
		};
		
		return "Welcome guest.";
//		return "Hello " + name + "! How is it in " + city + "?";
	}

	public String createName(@Valid CreateNameDTO data) {
		String formattedName = data.getName().trim().toLowerCase();
		String savedName = this.namesRepository.saveName(formattedName);
		
		return String.format("Saved %s to database", formattedName);
	}

}
