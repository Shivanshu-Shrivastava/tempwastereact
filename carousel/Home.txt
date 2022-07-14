import React from 'react'
import img from './p3.jfif'
import Card from './Card'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", borderRadius: 6+'px',
      background: '#bfbfbf',
      cursor: 'pointer',display:'none'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: '#bfbfbf',
      cursor: 'pointer',display:'none'}}
      onClick={onClick}
    />
  );
}
function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div>

            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand"  href="#">
                    <img src={img} width="30" height="30" alt="" />
                </a>
            </nav>
            <div className='container '>
              <div className='d-flex mt-5 justify-content-start ml-5'>

            <div  className='live text-center'>Live</div>


            </div>
                <Slider {...settings}>
                    <div><Card title='Upsc'/></div>
                    <div><Card title='PMT'/></div>
                    <div><Card title='JEE'/></div>
                    <div><Card title='IPS'/></div>
                    <div><Card title='IAS'/></div>
                </Slider>
            </div>
            
        </div>
    )
}

export default Home
