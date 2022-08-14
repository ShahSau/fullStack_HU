//first test
// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
}

//total like test
const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }
  return blogs.reduce(reducer, 0)
}

//favourite blog
const mostLikes = (blogs) => {
  const max = blogs.reduce((prev, current) => (prev.likes > current.likes) ? prev : current)
  return {
    title : max.title,
    author: max.author,
    likes: max.likes
  }
}
module.exports = {
  dummy,
  totalLikes,
  mostLikes
}