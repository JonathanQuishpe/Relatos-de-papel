import data from "../../data/books";
import ListBooks from "../../components/ListBooks/Index";
import Search from "../../components/Search/Index";
import { useState, useEffect } from "react";

const Index = () => {
  const [books, setBooks] = useState(data);
  const [query, setQuery] = useState("");

  const filter = (q) => {
    setQuery(q);
  }

  useEffect(() => {
    const filteredBooks = data.filter((book) => {
      return book.volumeInfo?.title.toLowerCase().includes(query.toLowerCase());
    });

    setBooks(filteredBooks);
  }, [query]);
  return (
    <div className="row mb-3 text-center">
      <h1 className="display-6 fw-bold text-body-emphasis mb-5">
        Catálogo de libros
      </h1>
      <Search onSearchChange={filter} />
      <ListBooks books={books} />
    </div>
  )
}

export default Index;