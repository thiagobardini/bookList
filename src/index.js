import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
//setup  vars
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51bv-74HjAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Bootstrapping',
    author: 'Thierry Bardini',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Learning React: Modern Patterns for Developing React Apps',
    author: 'Alex Banks',
  },
  {
    id: 3,
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
          <Book key={book.id} {...book}></Book>
          // <Book key={book.id} book={book}></Book> //  above using spread

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

// atribute, eventHandler
// onClick, onMouseOver = Examples

const Book = ({ img, title, author }) => {
  // const Book = (props) => {
  //   const { img, title, author } = props.book
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Hello Word')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex examples
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
