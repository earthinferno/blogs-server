const Joi = require('joi');

const BlogValidatorService = class {
  blogSchema = Joi.object({
    title: Joi.string().required(),
    synopsis: Joi.string().required(),
    category: Joi.string().required(),
    content: Joi.array().items(
      Joi.object({
        type: Joi.string().required(),
        value: Joi.alternatives().try(
          Joi.array().items(Joi.string()),
          Joi.string()
        ),
      })
    ),
  });

  ValidateBlog(blog) {
    return this.blogSchema.validate(blog);
  }
};

const blogValidatorService = new BlogValidatorService();

module.exports = blogValidatorService;
