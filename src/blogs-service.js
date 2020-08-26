const blogs = require('../mocks/blog-data');

const BlogService = class {
  GetBlogs() {
    return blogs;
  }

  GetBlog(id) {
    return blogs.find((blog) => blog.id === id);
  }

  AddBlog(blog) {
    const blogEntry = {
      id: blogs.length + 1,
      ...blog,
    };

    blogs.push(blogEntry);

    return blogEntry;
  }
};

module.exports = BlogService;
