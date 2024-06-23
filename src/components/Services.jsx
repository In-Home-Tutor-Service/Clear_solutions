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
			text: "We build the website and apps that our client wants from us by prioritizing our clients’ safety and security. We promote safe and secure internet browsing. For customer service, our team is always ready to deal with clients and fulfill their needs with dedication in the given period."
		},
		{
			img: back3,
			title: "Database Management",
			text: "We build the website and apps that our client wants from us by prioritizing our clients’ safety and security. We promote safe and secure internet browsing. For customer service, our team is always ready to deal with clients and fulfill their needs with dedication in the given period."
		},
		{
			img: back3,
			title: "Quality Assurance",
			text: "We build the website and apps that our client wants from us by prioritizing our clients’ safety and security. We promote safe and secure internet browsing. For customer service, our team is always ready to deal with clients and fulfill their needs with dedication in the given period."
		},
		{
			img: back3,
			title: "Software Integration",
			text: "We build the website and apps that our client wants from us by prioritizing our clients’ safety and security. We promote safe and secure internet browsing. For customer service, our team is always ready to deal with clients and fulfill their needs with dedication in the given period."
		},
		{
			img: back3,
			title: "Data Gathering",
			text: "We build the website and apps that our client wants from us by prioritizing our clients’ safety and security. We promote safe and secure internet browsing. For customer service, our team is always ready to deal with clients and fulfill their needs with dedication in the given period."
		},
		{
			img: back3,
			title: "Maintenance & Support",
			text: "We build the website and apps that our client wants from us by prioritizing our clients’ safety and security. We promote safe and secure internet browsing. For customer service, our team is always ready to deal with clients and fulfill their needs with dedication in the given period."
		}
	];

	return (
		<div className="col-md-11 mx-auto">
			<div className="container-fluid padding">
				<h2 className={styles.heading3}>
					Easily control your <br className="sm:block hidden"/> billing &
					invoicing
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
