const express = require('express');
const Joi = require('joi');

const BlogService = require('./blogs-service');
const blogService = new BlogService();

const blogValidatorService = require('./blog-validator-service');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Please provide some documentation');
});

app.get('/api/blogs', (req, res) => {
  res.send(JSON.stringify(blogService.GetBlogs()));
});

app.get('/api/blogs/:id', (req, res) => {
  const blog = blogService.GetBlog(parseInt(req.params.id));
  if (!blog)
    res
      .status(404)
      .send(`No blog was found for the given id: ${req.params.id}`);

  res.send(JSON.stringify(blog));
});

app.post('/api/blogs', (req, res) => {
  const { error } = blogValidatorService.ValidateBlog(req.body);
  if (error) return SendError(error, res);

  const blog = blogService.AddBlog(req.body);

  console.log(blog);
  res.send(blog);
});

function SendError(error, res) {
  res
    .status(400)
    .send(
      error.details.reduce(
        (acc, curr, idx) =>
          idx == 0 ? curr.message : `${acc.message}, ${curr.message}`,
        error.details[0].message
      )
    );
}

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
