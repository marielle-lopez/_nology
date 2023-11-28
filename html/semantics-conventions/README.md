# Conventions

## Why is it Important to Follow Conventions When Coding?

- Teamwork!
    - When you're collaborating with others, it makes it so much easier to read and follow each other's code
    - Maintaining consistency in a codebase
    - Preventing merge conflicts
- System compatibilities
    - LF vs. CLRF - how a computer handles newlines
- Looking neat and organised is good for getting a job
- Semantics
    - Search engine optimisation (SEO)

## What do you Think Makes Good HTML Conventions?
- Following naming conventions
- Consistent indentation
- Clear separation within a file by using indentation and whitespace
- Separation of concerns (content, style, function)
    - HTML for content
    - CSS for style
    - JavaScript for function
- Consistent attribute order
- Semantic HTML
- Unique IDs
- Only one `<h1>` tag per page
- Code is valid (w3c checker)
- Commenting code (where appropriate)

### Naming Conventions
#### Id
- camelCase
    - Since JavaScript naming convention is camelCase, and we often use id in JavaScript
```HTML
<p id="myParagraph"></p>
```
#### Class
- kebab-case
- Separated by a single space
    - Since CSS uses kebab-case mostly
```HTML
<div class="main-wrapper">
```

# Semantic HTML

## What is Semantic HTML?
- Meaningful tag names
    - `<header>`, `<footer>`, `<main>`, `<article>`, `<aside>`, `<figure>`, `<nav>`, etc.

## Why is it Important?
- Standards are important
    - Teamwork!
    - Faster onboarding or changing jobs
- Easier to maintain, other people on the team know the purpose of elements and where they
- Accessibility reasons
    - Screen readers read tags and will provide information to the user based on that, especially navigation
- Search engine optimisation (SEO)
    - Google ranks semantically-built sites higher
- Easier to style