package io.nology.blogs.blogposts;

import java.util.List;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.nology.blogs.category.Category;
import io.nology.blogs.category.CategoryService;
import io.nology.blogs.exceptions.ServiceValidationException;
import io.nology.blogs.exceptions.ValidationErrors;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional // all or nothing changes in the database, ensures partial insertion and deletions don't occur
public class BlogPostService {
	@Autowired
	private BlogPostRepository repo; // a service should have one repo
	
	@Autowired
	private CategoryService categoryService; // access things through the service if you're in a different domain

	@Autowired
	private ModelMapper mapper;
	
	public BlogPost createPost(CreateBlogPostDTO data) throws ServiceValidationException {
//		BlogPost newPost = new BlogPost();
		
//		newPost.setCategory(data.getCategory().trim().toLowerCase());
//		newPost.setTitle(data.getTitle().trim());
//		newPost.setContent(data.getContent().trim());
//		newPost.setCreatedAt(new Date());
		
		BlogPost newPost = mapper.map(data, BlogPost.class);
		
		// check if ID actually associated with a category
		ValidationErrors errors = new ValidationErrors();
		Long categoryId = data.getCategory();
		Optional<Category> maybeCategory = this.categoryService.findById(categoryId);
		if (maybeCategory.isEmpty()) {
			errors.addError("category", String.format("Category with id %d does not exist", categoryId));
		} else {
			newPost.setCategory(maybeCategory.get());
		}
		
		if (errors.hasErrors()) {
			// throw an exception
			throw new ServiceValidationException(errors);
		}
		
		
//		newPost.setCreatedAt(new Date()); // this is now handled in BaseEntity
		
		return this.repo.save(newPost);
	}

	public List<BlogPost> getAll() {
		return this.repo.findAll();
	}

	public Optional<BlogPost> findById(Long id) {
		return this.repo.findById(id);
	}

	public Optional<BlogPost> updateById(@Valid UpdateBlogPostDTO data, Long id) {
		Optional<BlogPost> maybePost = this.findById(id);
		
		if (maybePost.isEmpty()) {
			return maybePost;
		}
		
		BlogPost foundPost = maybePost.get();
		
//		if (data.getTitle() != null) {
//			foundPost.setTitle(data.getTitle().trim());
//		}
//		
//		if (data.getCategory() != null) {
//			foundPost.setCategory(data.getCategory().trim().toLowerCase());
//		}
//		
//		if (data.getContent() != null) {
//			foundPost.setContent(data.getContent().trim());
//		}
		
		mapper.map(data, foundPost);
		
		BlogPost updated = this.repo.save(foundPost);
		
		return Optional.of(updated);
	}

	public boolean deletePostById(Long id) {
		Optional<BlogPost> maybePost = this.repo.findById(id);
		
		if (maybePost.isEmpty()) {
			return false;
		}
		
		this.repo.delete(maybePost.get());
		return true;
	}
	
}
