import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

export default function CategorySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [categories, setCategories] = useState([]);
  async function getCategories() {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    setCategories(data.data);
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
    
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index}>
              <img
                src={category.image}
                className="w-full h-[200px] object-cover object-top my-3"
                alt={category.name}
              />
              <h3>{category.name}</h3>
            </div>
          ))}
        </Slider>
      
    </>
  );
}
