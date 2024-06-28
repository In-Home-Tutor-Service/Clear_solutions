import React from "react";
import video1 from "../assets/videos/cvmaker.mp4";
import video2 from "../assets/videos/axomtutor.mp4";
import styles from "../style.js";
import commonStyles from "./commonStyle.module.css";
import {logo, ATlogo} from "../assets/index.js";

const Works = () => {
	return (
		<div id="Projects" className="col-md-11 mx-auto">
			<h2 className={`${styles.heading3} `}>
				Our Recent Products <br className="sm:block hidden"/>
			</h2>
			<div className="container-fluid padding">
				<div className="row padding d-flex justify-content-around">
					{/* Card 1 */}
					<div>
						<div className="card flex flex-col justify-center items-center">
							<div
								className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
								<div className="flex-1 flex flex-col">
									<h4 className={styles.heading2}>CV maker</h4>
									<p className={`${styles.paragraph} mt-5`}>
										CV Maker is a free, user-friendly SaaS
										product designed for creating CVs (resumes).
										It features a simple interface,
										customization options, and industry-specific
										templates to help users craft personalized
										resumes easily. The tool is lightweight,
										indicating fast performance, and was
										developed using modern web technologies like
										React, Node.js, MongoDB, and Material-UI. It
										aims to address a real-world need by
										offering an accessible solution for CV
										creation without requiring technical
										expertise.
									</p>
								</div>
							</div>
							<div className={commonStyles.workCVVideoContainer}>
								<video
									src={video1}
									controls
									width="100%"
									autoPlay
									loop
									muted
								></video>
							</div>
						</div>
					</div>
					{/* Card 2 */}
					<div>
						<div className="card flex flex-col justify-center items-center">
							<div
								className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
								<div className="flex-1 flex flex-col">
									<div className="flex">
										<h4 className={styles.heading2}>AXOM TUTORS</h4>
										<img
											src={ATlogo}
											alt="hoobank"
											className="w-[266px] h-[72px] object-contain"
										/>
									</div>
									<p className={`${styles.paragraph} mt-5`}>
										Axom Tutors is a mobile application tailored
										to connect students with tutors seamlessly.
										It offers a user-friendly interface and
										robust functionality aimed at enhancing the
										tutoring experience.
									</p>
								</div>
							</div>

							<div className={commonStyles.workATVideoContainer}>
								<video
									src={video2}
									controls
									width="100%"
									autoPlay
									loop
									muted
								></video>
							</div>
						</div>
					</div>
				</div>
				<hr className="my-4"></hr>
			</div>
		</div>
	);
};

export default Works;
