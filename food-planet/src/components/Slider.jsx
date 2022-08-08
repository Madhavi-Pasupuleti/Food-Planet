import React from 'react'
import cake from "../images/cake.jpg"
import burger from "../images/burger.jpg"
import pizza from "../images/pizza.jpg"
import chiken from "../images/chiken.jpg"
import pancake from "../images/pancake.jpg"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
 
function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (
    <>
      <Carousel interval={2000} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {cake}
            alt="First slide"
            style = {{height : "500px"}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizza}
            alt="Second slide"
            style = {{height : "500px"}}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pancake}
            alt="Third slide"
            style = {{height : "500px"}}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={chiken}
            alt="Third slide"
            style = {{height : "500px"}}
          />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={burger}
            alt="Third slide"
            style = {{height : "500px"}}
          />

          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Slider