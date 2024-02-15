package io.nology.blogs.blogposts;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateBlogPostDTO {
	@NotBlank
	private String title;
	
	@NotBlank
	private String content;
	
	@NotNull
	@Min(1)
	private Long categoryId;

	public String getTitle() {
		return title;
	}

//	public void setTitle(String title) {
//		this.title = title;
//	}

	public String getContent() {
		return content;
	}

//	public void setContent(String content) {
//		this.content = content;
//	}

	public Long getCategory() {
		return categoryId;
	}

	@Override
	public String toString() {
		return "CreateBlogPostDTO [title=" + title + ", content=" + content + ", category=" + categoryId + "]";
	}

	public void setCategory(Long category) {
		this.categoryId = category;
	}
	
	
}
