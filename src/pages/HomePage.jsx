import React, { useEffect, useState } from "react";
import { bookService } from "../store/services/apiCall";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookService.getBooks();
        console.log("API Response:", response);
        // Handle different response structures
        const booksData = response.data?.recommended;
        setBooks(Array.isArray(booksData) ? booksData : []);
      } catch (err) {
        setError(err.message || "Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <figure className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="https://via.placeholder.com/300x200?text=Book"
                alt={book.bookName}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {book.bookName}
              </h2>
              <p className="text-gray-600 text-sm mb-2">By {book.author}</p>
              <div className="flex items-center gap-2 mb-2">
                {book.discount > 0 && (
                  <span className="text-gray-400 line-through text-sm">
                    ${book.price}
                  </span>
                )}
                <span className="bg-pink-600 text-white px-2 py-1 rounded text-sm">
                  ${book.final_price.toFixed(2)}
                </span>
                {book.discount > 0 && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                    -{book.discount}%
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1 text-xs text-gray-500">
                <span className="border px-2 py-1 rounded">
                  {book.bookFormat}
                </span>
                <span className="border px-2 py-1 rounded">{book.lang}</span>
                <span className="border px-2 py-1 rounded">
                  {book.publicationYear}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
