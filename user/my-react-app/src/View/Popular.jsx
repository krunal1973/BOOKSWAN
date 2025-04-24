import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Popular() {
  const [book, setBook] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    fatchBook();
  }, []);

  const fatchBook = async () => {
    const res = await axios.get("http://localhost:2009/backend/manage_book/");
    setBook(res.data);
  };

  const filteredBooks = selectedGenre === "All"
    ? book
    : book.filter((b) => b.book_category_id.toLowerCase() === selectedGenre.toLowerCase());

  return (
    <div>
      <section id="popular-books" className="bookshelf py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title"><span>Some quality items</span></div>
                <h2 className="section-title">Popular Books</h2>
              </div>
              <ul className="tabs">
                {["All", "Business", "Technology", "Romantic", "Adventure", "Fictional"].map((genre) => (
                  <li
                    key={genre}
                    className={`tab ${selectedGenre === genre ? "active" : ""}`}
                    onClick={() => setSelectedGenre(genre)}
                    style={{ cursor: "pointer" }}
                  >
                    {genre}
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                <div id="all-genre" data-tab-content="" className="active">
                  <div className="row">
                    {filteredBooks.map((obj) => (
                      <div className="col-md-3" key={obj.book_id}>
                        <div className="product-item">
                          <figure className="product-style">
                          <img
  src={"http://localhost:2009/backend/Images/" + obj.boook_image}
  alt={obj.book_name}
  style={{
    height: 300,
    width: "auto",
    display: "block",
    margin: "0 auto",
    objectFit: "cover",
    maxWidth: "100%",
  }}
/>

                            <Link to={"/BookDetails/" + obj.book_id} className="button">
                              <button type="button" className="add-to-cart" data-product-tile="add-to-cart">
                                Details
                              </button>
                            </Link>
                          </figure>
                          <figcaption>
                            <h3>{obj.book_name}</h3>
                            <span>{obj.book_author}</span>
                            <div className="item-price">₹{obj.amount}</div>
                          </figcaption>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/*inner-tabs*/}
          </div>
        </div>
      </section>
    </div>
  )
}
