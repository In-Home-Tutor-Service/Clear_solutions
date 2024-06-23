import React, {useEffect, useRef, useState} from "react";
import "../carousel/slider.css";
import background1 from "../../assets/img/database2.jpg";
import background2 from "../../assets/img/web.jpg";
import background3 from "../../assets/img/system.jpg";
import background4 from "../img/mobileapp.png";

const Slider = () => {
	const [sliderItems] = useState([
		{
			imgSrc: background2,
			author: "IN CLEAR SOLUTIONS",
			title: "WE PROVIDE YOU",
			topic: "WEB APPLICATION",
			description: "Crafting intuitive and scalable web solutions tailored to your business needs."
		},
		{
			imgSrc: background1,
			author: "IN CLEAR SOLUTIONS",
			title: "WE PROVIDE YOU",
			topic: "DATABASE MANAGEMENT",
			description:
				"Optimizing data infrastructure for efficiency and reliability, ensuring seamless operations."},
		{
			imgSrc: background3,
			author: "IN CLEAR SOLUTIONS",
			title: "WE PROVIDE YOU",
			topic: "SYSTEM ARCHITECTURE",
			description:
				"Designing robust and scalable IT architectures to empower your digital ecosystem."},
		{
			imgSrc: background4,
			author: "IN CLEAR SOLUTIONS",
			title: "WE PROVIDE YOU",
			topic: "MOBILE APPLICATION",
			description: "Building engaging mobile experiences that resonate with your users, across platforms."
		},
	]);

	const [currentSlide, setCurrentSlide] = useState(0);
	const [previousSlide, setPreviousSlide] = useState(null);
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
						<img src={item.imgSrc} alt={item.title}/>
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
						<img src={item.imgSrc} alt={item.title}/>
						<div className="content">
							<div className="title">{item.title}</div>
							<div className="description">{item.topic}</div>
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
