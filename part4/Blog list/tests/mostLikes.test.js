const listHelper = require('../utils/list_helper')
const listWithOneBlog = require('./data').listWithOneBlog
const blogs = require('./data').blogs
describe('most likes', () => {
  test('when list has only one blog, most like blog is that blog', () => {
    const result = listHelper.mostLikes(listWithOneBlog)
    expect(result).toEqual({
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5,
    })
  })
  test('most likes for a list of blogs', () => {
    const result = listHelper.mostLikes(blogs)
    expect(result).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    })
  })
})