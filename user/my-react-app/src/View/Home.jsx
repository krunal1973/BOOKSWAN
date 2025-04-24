import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Home.css' // Optional: place custom styles here
import { Link } from 'react-router-dom'

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <div className="billboard-wrapper">
      <section id="billboard">
        <div className="container">
          <Slider {...settings} className="main-slider">
            <div className="slider-item">
              <div className="slider-content">
                <div className="text-content">
                  <h2 className="banner-title">Life Of The Wild</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                    feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                    lacus ut magna velit eleifend. Amet, quis urna, a eu.
                  </p>
                  <div className="btn-wrap">
                    <Link to="/Popular/" className="btn-read-more">
                      Read More <span className="arrow">→</span>
                    </Link>
                  </div>
                </div>
                <div className="image-content">
                  <img
                    src="images/main-banner1.jpg"
                    alt="Life Of The Wild"
                    className="banner-image"
                  />
                </div>
              </div>
            </div>

            <div className="slider-item">
              <div className="slider-content">
                <div className="text-content">
                  <h2 className="banner-title">Birds gonna be Happy</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                    feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                    lacus ut magna velit eleifend. Amet, quis urna, a eu.
                  </p>
                  <div className="btn-wrap">
                    <Link to="/Popular/" className="btn-read-more">
                      Read More <span className="arrow">→</span>
                    </Link>
                  </div>
                </div>
                <div className="image-content">
                  <img
                    src="images/main-banner2.jpg"
                    alt="Birds gonna be Happy"
                    className="banner-image"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      
      <section id="best-selling" className="leaf-pattern-overlay">
  <div className="corner-pattern-overlay" />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-6">
            <figure className="products-thumb">
              <img
                src="images/single-image.jpg"
                alt="book"
                className="single-image"
              />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="product-entry">
              <h2 className="section-title divider">Best Selling Book</h2>
              <div className="products-content">
                <div className="author-name">By Timbur Hood</div>
                <h3 className="item-title">Birds gonna be happy</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu feugiat amet, libero ipsum enim pharetra hac.
                </p>
                <div className="btn-wrap">
                  <Link to="/Featured/" className="btn-accent-arrow">
                    shop it now <i className="icon icon-ns-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / row */}
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

// Custom Arrow Components
function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <button className="custom-arrow prev" onClick={onClick}>
      ←
    </button>
  )
}

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <button className="custom-arrow next" onClick={onClick}>
      →
    </button>
  )
}
