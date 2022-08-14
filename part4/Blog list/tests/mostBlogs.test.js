const listHelper = require('../utils/list_helper')
const listWithOneBlog = require('./data').listWithOneBlog
const blogs = require('./data').blogs
describe('most blog', () => {

  test('when list has more blogs, favourite author is', () => {
    const result_fav = listHelper.mostBlogs(blogs)
    const expected_fav = {
      author: 'Robert C. Martin',
      blogs: 3,
    }
    expect(result_fav).toEqual(expected_fav)
  })
  test('when list has one blog, favourite author is the author of that blog', () => {
    const result_fav = listHelper.mostBlogs(listWithOneBlog)
    const expected_fav = {
      author: 'Edsger W. Dijkstra',
      blogs: 1,
    }
    expect(result_fav).toEqual(expected_fav)
  })
})