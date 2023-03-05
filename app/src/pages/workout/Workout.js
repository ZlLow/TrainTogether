import background from "../../assets/css/Background.module.css"
import './Workout.css';
import React from 'react';
import exercsieData from "./exercisesData.json";
import planData from "./planData.json";
import SearchBar from '../components/searchbar/SearchBar'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExerciseCard from "./ExerciseCard";

export default function Workout() {
    return (
        <div className={background.default}>
            <div className="greeting">
                <h1 className='title'>Hello, John</h1> 
                <p>What would you like to do?</p> 
                <SearchBar className="search-bar" placeholder="Search"/>
            </div>
            <div className="carousel-container">
              <h1>Exercise Plan</h1>
              <Carousel responsive={responsive} showDots={true} infinite={true}>
                {planData.map((plan) => (
                  <ExerciseCard link="exerciseplan" key={plan.id} title={plan.title} />
                ))}
              </Carousel>
            </div>

            <div className="carousel-container">
              <h1>Exercises</h1>
              <Carousel responsive={responsive} showDots={true} infinite={true}>
                  {exercsieData.map((exercise) => (
                    <ExerciseCard link="exerciseview" key={exercise.id} title={exercise.title} />
                  ))}
              </Carousel>
            </div>
        </div>
)
}

const responsive = {
desktop: {
  breakpoint: { max: 3000, min: 1024 },
  items: 4,
  slidesToSlide: 1 // optional, default to 1.
},
tablet: {
  breakpoint: { max: 1024, min: 464 },
  items: 2,
  slidesToSlide: 1 // optional, default to 1.
},
mobile: {
  breakpoint: { max: 464, min: 0 },
  items: 1,
  slidesToSlide: 1 // optional, default to 1.
}
};

