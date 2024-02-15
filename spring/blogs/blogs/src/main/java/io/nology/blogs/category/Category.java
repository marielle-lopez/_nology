package io.nology.blogs.category;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.nology.blogs.blogposts.BlogPost;
import io.nology.blogs.common.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "categories")
public class Category extends BaseEntity {
	@Column(unique = true)
	private String name;
	
	@OneToMany(mappedBy = "category")
	@JsonIgnoreProperties("category") // prevents stack overflow
	private List<BlogPost> posts;
	
	public List<BlogPost> getPosts() {
		return posts;
	}

	public void setPosts(List<BlogPost> posts) {
		this.posts = posts;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public Category() {}
	
	
}
