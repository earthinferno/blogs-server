const logger = require('./logger');

let blogs = require('../mocks/blog-data');

const BlogService = class {
  GetBlogs() {
    logger.log('GetBlogs', __filename);
    return blogs;
  }

  GetBlog(id) {
    logger.log(`GetBlog ${id}`, __filename);
    return blogs.find((blog) => blog.id === id);
  }

  AddBlog(blog) {
    logger.log(`AddBlog`, __filename, 'At start', blog);
    const blogEntry = {
      id: blogs.length + 1,
      ...blog,
    };

    blogs.push(blogEntry);

    logger.log(`AddBlog`, __filename, 'At end', blogEntry);
    return blogEntry;
  }

  UpdateBlog(id, blog) {
    logger.log(`UpdateBlog ${id}`, __filename, 'At start');
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
    logger.log(`UpdateBlog ${id}`, __filename, 'At end', updatedBlogEntry);
    return updatedBlogEntry;
  }

  DeleteBlog(id) {
    logger.log(`DeleteBlog ${id}`, __filename, 'At start');
    const idx = blogs.findIndex((blog) => blog.id === id);
    if (!idx) return;

    const blogEntry = blogs.splice(idx, 1);

    logger.log('DeleteBlog', __filename, 'At start', blogEntry);
    return blogEntry;
  }
};

module.exports = BlogService;
