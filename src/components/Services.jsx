import React from "react";
import Slider from "react-slick";
import back1 from "./img/webdeveope.jpg";
import back2 from "./img/mobileapp.png";
import back3 from "./img/webdesign.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../style.js";

const Cards = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const slides = [
		{
			img: back1,
			title: "Web Development",
			text: "In this ever-growing world, every business individual and organization needs to have a portfolio to reveal their achievements more adequately to be competitive. With the latest technologies available, we build customized web pages that are responsive and dynamic."
		},
		{
			img: back2,
			title: "Mobile Development",
			text: "Ever since smartphones have entered the market, it has become a necessity for our everyday activities carried out. Our mobile app development team is experienced with the latest technologies to deliver a robust mobile application that would also work cross-platform."
		},
		{
			img: back3,
			title: "Web Design",
			text: "Our web design services focus on creating visually stunning and user-friendly websites that reflect your brand’s identity. We blend aesthetics with functionality to build responsive and interactive websites that provide seamless navigation and engage your audience effectively. Whether you need a simple landing page or a complex e-commerce platform, we deliver custom designs tailored to your business needs."
		},
		{
			img: back2,
			title: "Database Management",
			text: "We offer robust database management solutions that secure and streamline your data processes. From setting up and maintaining databases to optimizing performance and ensuring data integrity, our services cover all aspects of database management. We help you handle large volumes of data efficiently, providing quick access and reliable storage solutions to support your business operations and decision-making."
		},
		{
			img: back3,
			title: "Quality Assurance",
			text: " Our quality assurance services ensure that your software applications are reliable, efficient, and free of defects. We conduct comprehensive testing, including functional, performance, and security testing, to identify and fix issues before deployment. Our meticulous approach ensures that your products meet the highest standards and provide a smooth user experience."
		},
		{
			img: back1,
			title: "Software Integration",
			text: "We specialize in integrating various software applications and systems to work together seamlessly. Our integration services connect disparate systems, enabling smooth data flow and communication across your IT environment. This integration enhances operational efficiency, reduces redundancy, and ensures that all components of your business infrastructure work in harmony."
		},
		{
			img: back3,
			title: "Data Gathering",
			text: "We provide data gathering services that help you collect and analyze valuable information from various sources. Whether it's user behavior, market trends, or operational metrics, we employ advanced techniques to gather accurate and relevant data. This data-driven approach allows you to make informed decisions and stay ahead of the competition."
		},
		{
			img: back2,
			title: "Maintenance & Support",
			text: "Our maintenance and support services are designed to keep your IT systems running smoothly and efficiently. We provide ongoing monitoring, updates, and troubleshooting to prevent issues and minimize downtime. Our dedicated support team is always ready to assist, ensuring that your technology infrastructure remains robust and responsive to your business needs."
		}
	];

	return (
		<div id="Services" className="col-md-11 mx-auto">
			<div className="container-fluid padding">
				<h2 className={styles.heading3}>
					Our Services <br className="sm:block hidden"/>
				</h2>
				<Slider {...settings}>
					{slides.map((slide, index) => (
						<div key={index} className="col-md-10 d-flex align-items-center justify-content-center ">
							<div className="card m-8">
								<img
									className="card-img-top"
									src={slide.img}
									alt={slide.title}
								/>
								<div className="card-body">
									<h4 className={`${styles.paragraph} max-w-[470px] mt-5 flex justify-center items-center text-center`}>{slide.title}</h4>
									<p className={`${styles.smallParagraph}`}>{slide.text}</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Cards;