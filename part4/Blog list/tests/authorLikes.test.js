const listHelper = require('../utils/list_helper')
const listWithOneBlog = require('./data').listWithOneBlog
const blogs = require('./data').blogs

describe('author with most likes', () => {
  test('when list has more blogs, author with most like is', () => {
    const result_fav = listHelper.authorLikes(blogs)
    const expected_fav = {
      author: 'Edsger W. Dijkstra',
      likes: 17,
    }
    expect(result_fav).toEqual(expected_fav)
  })
  test('when list has one blog, author with most like is the author of that blog', () => {
    const result_fav = listHelper.authorLikes(listWithOneBlog)
    const expected_fav = {
      author: 'Edsger W. Dijkstra',
      likes: 5,
    }
    expect(result_fav).toEqual(expected_fav)
  })
})