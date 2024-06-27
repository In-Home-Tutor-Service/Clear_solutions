import React from "react";
import Slider from "react-slick";
import back1 from "./img/webdeveope.jpg";
import back2 from "./img/mobileapp.png";
import back3 from "./img/webdesign.jpg";
import Database from "./img/database.jpg";
import quality from "./img/quality.jpg";
import SI from "./img/softwareIntegration.jpg";
import dataGathering from "./img/dataGathering.jpg";
import support from "./img/support.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../style.js";
import commonStyles from "./commonStyle.module.css";

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
		text: "We build responsive, dynamic web pages tailored to showcase your business and achievements effectively with the latest technologies."
	},
	{
		img: back2,
		title: "Mobile Development",
		text: "Our team delivers robust, cross-platform mobile apps that integrate the latest technologies for everyday use and business needs."
	},
	{
		img: back3,
		title: "Web Design",
		text: "We create visually stunning, user-friendly websites that reflect your brand's identity and engage your audience with seamless navigation."
	},
	{
		img: Database,
		title: "Database Management",
		text: "We provide secure, efficient database solutions, from setup and maintenance to performance optimization and data integrity."
	},
	{
		img: quality,
		title: "Quality Assurance",
		text: "We ensure your software is reliable and efficient through comprehensive testing, identifying and fixing issues before deployment."
	},
	{
		img: SI,
		title: "Software Integration",
		text: "Our integration services connect your systems seamlessly, enhancing operational efficiency and ensuring smooth data flow and communication."
	},
	{
		img: dataGathering,
		title: "Data Gathering",
		text: "We collect and analyze data from various sources, providing insights to inform decisions and keep you ahead of the competition."
	},
	{
		img: support,
		title: "Maintenance & Support",
		text: "Our support services keep your IT systems running smoothly with ongoing monitoring, updates, and troubleshooting."
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
								<div className={commonStyles.serviceImageContainer}>
									<img
										className="card-img-top"
										src={slide.img}
										alt={slide.title}
									/>
								</div>
								<div className="card-body">
									<h4 className={`${styles.paragraph}  max-w-[470px] mt-5 flex justify-center items-center text-center`} style={{color: 'white'}}>{slide.title}</h4>
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