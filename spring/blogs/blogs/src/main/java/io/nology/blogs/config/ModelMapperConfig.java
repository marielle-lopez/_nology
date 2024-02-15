package io.nology.blogs.config;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.nology.blogs.blogposts.BlogPost;
import io.nology.blogs.blogposts.CreateBlogPostDTO;
import io.nology.blogs.blogposts.UpdateBlogPostDTO;
import io.nology.blogs.category.Category;
import io.nology.blogs.category.CreateCategoryDTO;

@Configuration
public class ModelMapperConfig {
	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		
		// rules for all strings
		mapper.typeMap(String.class, String.class).setConverter(new StringTrimConverter());
		
		// skip null completely
		mapper.getConfiguration().setSkipNullEnabled(true);
		
		// set up rules for particular fields on particular DTOs
//		mapper.typeMap(CreateBlogPostDTO.class, BlogPost.class).addMappings(m -> m.using(new LowerCaseConverter())
//				.map(CreateBlogPostDTO::getCategory, BlogPost::setCategory));
//		
//		mapper.typeMap(UpdateBlogPostDTO.class, BlogPost.class).addMappings(m -> m.using(new LowerCaseConverter())
//				.map(UpdateBlogPostDTO::getCategory, BlogPost::setCategory)); // before we starting using Category type, don't need to do it anymore because we're using categoryid
		
		mapper.typeMap(CreateCategoryDTO.class, Category.class).addMappings(m -> m.using(new LowerCaseConverter())
				.map(CreateCategoryDTO::getName, Category::setName));
		
		return mapper;
	}
	
	private class StringTrimConverter implements Converter<String, String> {
		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			
			return context.getSource().trim();
		}
	}
	
	private class LowerCaseConverter implements Converter<String, String> {
		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			
			return context.getSource().toLowerCase();
		}
	}
}
