const express = require('express');
const Joi = require('joi');

const BlogService = require('./blogs-service');
const blogService = new BlogService();

const blogValidatorService = require('./blog-validator-service');
const logger = require('./logger');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Please provide some documentation');
});

app.get('get /api/blogs', (req, res) => {
  logger.log(`/api/blogs`, __filename);
  res.send(JSON.stringify(blogService.GetBlogs()));
});

app.get('get /api/blogs/:id', (req, res) => {
  logger.log(`/api/blogs/${req.params.id}`, __filename);
  const blog = blogService.GetBlog(parseInt(req.params.id));
  if (!blog)
    res
      .status(404)
      .send(`No blog was found for the given id: ${req.params.id}`);

  res.send(JSON.stringify(blog));
});

app.post('/api/blogs', (req, res) => {
  logger.log(`post /api/blogs`, __filename, 'start', req.body);
  const { error } = blogValidatorService.ValidateBlog(req.body);
  if (error) return SendError(error, res);

  const blog = blogService.AddBlog(req.body);

  res.send(blog);
});

app.put('/api/blogs/:id', (req, res) => {
  logger.log(`put /api/blogs/${req.params.id}`, __filename, 'start', req.body);
  const { error } = blogValidatorService.ValidateBlog(req.body);
  if (error) return SendError(error, res);

  const blog = blogService.GetBlog(parseInt(req.params.id));
  if (!blog)
    return res
      .status(404)
      .send(`No blog was found for the given id: ${req.params.id}`);

  const updatedBlog = blogService.UpdateBlog(parseInt(req.params.id), req.body);
  if (!updatedBlog)
    return res.status(500).send(`Failed to update blog ${req.params.id}`);

  res.send(updatedBlog);
});

app.delete('/api/blogs/:id', (req, res) => {
  logger.log(`delete /api/blogs/${req.params.id}`, __filename, 'start');
  const blog = blogService.GetBlog(parseInt(req.params.id));
  if (!blog)
    return res
      .status(404)
      .send(`No blog was found for the given id: ${req.params.id}`);

  const deletedBlog = blogService.DeleteBlog(parseInt(req.params.id));
  if (!deletedBlog)
    return res.status(500).send(`Failed to delete blog ${req.params.id} `);

  res.send(deletedBlog);
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

if (app.get('env') === 'development') {
  logger.on('messageLogged', (arg) => {
    console.log(arg);
  });
}

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
