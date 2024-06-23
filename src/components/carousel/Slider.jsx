import React, { useEffect, useRef, useState } from "react";
import "../carousel/slider.css";
import background1 from "../img/back1.png";
import background2 from "../img/back2.png";
import background3 from "../img/back3.png";
import background4 from "../img/back4.png";

const Slider = () => {
    const [sliderItems] = useState([
        {
            imgSrc: background1,
            author: "LUNDEV",
            title: "DESIGN SLIDER 1",
            topic: "ANIMAL",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        },
        {
            imgSrc: background2,
            author: "LUNDEV",
            title: "DESIGN SLIDER 2",
            topic: "ANIMAL",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        },
        {
            imgSrc: background3,
            author: "LUNDEV",
            title: "DESIGN SLIDER 3",
            topic: "ANIMAL",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        },
        {
            imgSrc: background4,
            author: "LUNDEV",
            title: "DESIGN SLIDER 4",
            topic: "ANIMAL",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        },
    ]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [previousSlide, setPreviousSlide] = useState(null); // Track the previous slide index
    const [isNext, setIsNext] = useState(true);

    const sliderRef = useRef(null);
    const timeoutRef = useRef(null);
    const autoNextTimeoutRef = useRef(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const nextSlide = () => {
        setIsNext(true);
        setPreviousSlide(currentSlide);
        setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    };

    const prevSlide = () => {
        setIsNext(false);
        setPreviousSlide(currentSlide);
        setCurrentSlide(
            (prev) => (prev - 1 + sliderItems.length) % sliderItems.length
        );
    };

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            if (sliderRef.current) {
                sliderRef.current.classList.remove("next", "prev");
            }
        }, timeRunning);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [currentSlide]);

    useEffect(() => {
        if (autoNextTimeoutRef.current)
            clearTimeout(autoNextTimeoutRef.current);

        autoNextTimeoutRef.current = setTimeout(() => {
            nextSlide();
        }, timeAutoNext);

        if (sliderRef.current) {
            // Determine the direction of the slide and apply the appropriate class
            sliderRef.current.classList.add(
                currentSlide > previousSlide ? "next" : "prev"
            );
        }

        return () => {
            clearTimeout(autoNextTimeoutRef.current);
        };
    }, [currentSlide, previousSlide]);

    return (
        <div className="carousel" ref={sliderRef}>
            <div className="list">
                {sliderItems.map((item, index) => (
                    <div
                        key={index}
                        className={`item ${
                            index === currentSlide ? "active" : ""
                        }`}
                    >
                        <img src={item.imgSrc} alt={item.title} />
                        <div className="content">
                            <div className="author">{item.author}</div>
                            <div className="title">{item.title}</div>
                            <div className="topic">{item.topic}</div>
                            <div className="des">{item.description}</div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                {/* <button>SUBSCRIBE</button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail">
                {sliderItems.map((item, index) => (
                    <div
                        key={index}
                        className={`item ${
                            index === currentSlide ? "active" : ""
                        }`}
                    >
                        <img src={item.imgSrc} alt={item.title} />
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="arrows">
                <button id="prev" onClick={prevSlide}>
                    {"<"}
                </button>
                <button id="next" onClick={nextSlide}>
                    {">"}
                </button>
            </div>
            <div className="time"></div>
        </div>
    );
};

export default Slider;
