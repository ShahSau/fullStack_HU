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

//author with most blogs
const mostBlogs = (blogs) => {
  const usersObj = blogs.reduce((obj, blog) => {
    if (blog.author in obj) {
      obj[blog.author] += 1
    } else {
      obj[blog.author] = 1
    }
    return obj
  }, {})
  let k = Object.keys(usersObj).reduce((a, b) =>
    usersObj[a] > usersObj[b] ? a : b
  )

  let author = new Object
  author.author = k
  author.blogs =  usersObj[k]
  return author
}

//author with most liked blogs
const authorLikes = (blogs) => {
  const usersObj = blogs.reduce((obj, blog) => {
    if (blog.author in obj) {
      obj[blog.author] += blog.likes
    } else {
      obj[blog.author] = blog.likes
    }
    return obj
  }, {})
  let k = Object.keys(usersObj).reduce((a, b) =>
    usersObj[a] > usersObj[b] ? a : b
  )
  let author = new Object()
  author.author = k
  author.likes = usersObj[k]
  return author
}
module.exports = {
  dummy,
  totalLikes,
  mostLikes,
  mostBlogs,
  authorLikes
}