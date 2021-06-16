import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
//setup  vars
const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51bv-74HjAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Bootstrapping',
    author: 'Thierry Bardini',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Learning React: Modern Patterns for Developing React Apps',
    author: 'Alex Banks',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51popQ6rqdL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Easy Origami (Dover Origami Papercraft)over 30 simple projects',
    author: 'John Bach',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // const { img, title, author } = book
        return (
          <Book book={book}></Book>
          // <div>
          //   <img src={img} alt='' />
          //   <h3>{title}</h3>
          //   <h6>{author}</h6>
          // </div>
        )
      })}
    </section>
  )
}

// const Book = ({ img, title, author }) => {
const Book = (props) => {
  const { img, title, author } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

// const Greeting = () => {
//   return React.createElement('div', React.createElement('h1', {}, 'hello word'))
// }

ReactDom.render(<BookList />, document.getElementById('root'))
