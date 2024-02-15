package io.nology.blogs.blogposts;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.nology.blogs.category.Category;
import io.nology.blogs.common.BaseEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "blog_posts")
public class BlogPost extends BaseEntity {
	
	@Column
	private String title;
	
	@Column(columnDefinition = "longtext")
	private String content;
	
	@ManyToOne(cascade = CascadeType.ALL) // cascade deletes associated blogposts with a category
	@JoinColumn(name = "category_id")
	@JsonIgnoreProperties("posts") // prevents infinite loop
	private Category category;

	public BlogPost() {
		super();
	}

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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
}
