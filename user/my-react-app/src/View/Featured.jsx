import React,{useEffect, useState} from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'

export default function Featured() {
  const [book,setBook] = useState([])

  useEffect(()=>{
    fatchBook()
  },[])

  const fatchBook = async() =>{
    const res=await axios.get("http://localhost:2009/backend/manage_book/")
    const topFive = res.data.slice(0, 5);
    setBook(topFive)
  }

  return (
    <div>
      <section id="featured-books" className="py-5 my-5">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header align-center">
          <div className="title">
            <span>Some quality items</span>
          </div>
          <h2 className="section-title">Featured Books</h2>
        </div>
        <div className="tab-content">
                  <div id="all-genre" data-tab-content="" className="active">
                    <div className="row">
                      {book.map((obj)=> 
                      <div className="col-md-3">
                        <div className="product-item">
                          <figure className="product-style">
                          <img
  src={`http://localhost:2009/backend/Images/${obj.boook_image}`}
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

                          <Link to={"/BookDetails/"+obj.book_id} className="button">
                            <button
                              type="button"
                              className="add-to-cart"
                              data-product-tile="add-to-cart"
                              
                            >
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
                      )}
                    </div>
                  </div>
                </div>       
      </div>
      {/*inner-content*/}
    </div>

  </div>
</section>

    </div>
  )
}
