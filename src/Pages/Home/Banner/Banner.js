import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css';
const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block slider-image"
                    src="https://i.ibb.co/7rGknsB/gim2222.png"
                    // src="https://i.ibb.co/PgvyN0j/gim111.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The Best Gym Trainer</h3>
                    <p>This Gym Trainer is Good Trainer</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block slider-image"
                    src="https://www.ihrsa.org/uploads/Articles/Column-Width/_1200x630_crop_center-center_82_none/Personal-Training_kettle-bell_column.jpg?mtime=1518206280"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>The Best Gym Trainer</h3>
                    <p>This Gym Trainer is Good Trainer</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block slider-image"
                    src="https://images.sampleforms.com/wp-content/uploads/2019/10/1109-personal-trainer-1.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>The Best Gym Trainer</h3>
                    <p>This Gym Trainer is Good Trainer</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;