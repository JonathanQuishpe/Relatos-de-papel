import Book from '../Book/Index';

const Index = ({ books }) => {
  return (
    books.map((book, index) => (
      <Book book={book} index={index} key={index} />
    ))
  )
}

export default Index;