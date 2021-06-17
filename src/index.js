import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

import { data } from './books'
import SpecificBook from './book'
import { greeting } from './testing/testing'

function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {data.map((book) => {
        // const { img, title, author } = book
        return (
          <SpecificBook key={book.id} {...book}></SpecificBook>
          // <Book key={book.id} book={book}></Book> // example above using spread
        )
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
