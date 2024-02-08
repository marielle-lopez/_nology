package io.nology.intro.greeting;

import jakarta.validation.constraints.NotBlank;

public class CreateNameDTO {
	@NotBlank
	private String name;
	
	public String getName() {
		return this.name;
	};
}
