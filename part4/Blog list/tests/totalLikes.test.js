const listHelper = require('../utils/list_helper')
const listWithOneBlog = require('./data').listWithOneBlog
const blogs = require('./data').blogs
describe('total likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })
  test('total likes for a list of blogs', () => {
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(36)
  })
})