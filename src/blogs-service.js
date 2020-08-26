let blogs = require('../mocks/blog-data');

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

  UpdateBlog(id, blog) {
    const idx = blogs.findIndex((blog) => blog.id === id);
    if (!idx) return;

    const updatedBlogEntry = {
      id: id,
      ...blog,
    };

    const updatedBlogs = [
      ...blogs.slice(0, idx),
      updatedBlogEntry,
      ...blogs.slice(idx + 1),
    ];

    blogs = updatedBlogs;
    return updatedBlogEntry;
  }
};

module.exports = BlogService;
