package io.nology.blogs.blogposts;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;

public class UpdateBlogPostDTO {
	@Pattern(regexp = "^(?=\\S).*$", message = "Title cannot be empty")
	private String title;
	
	@Pattern(regexp = "^(?=\\S).*$", message = "Content cannot be empty")
	private String content;
	
	@Min(1)
	private Long categoryId;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}
}
