package io.nology.blogs.blogposts;

import org.springframework.data.jpa.repository.JpaRepository;

// ORM
// writes SQL queries for us
public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
	
}
