import {card} from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = () => (
	<section className={`${layout.section} mb-8 `}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Committed to Long-Term<br className="sm:block hidden"/>Success
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Beyond project completion, we offer comprehensive after-service support to ensure your systems remain
				robust and effective. Our team is available for continuous assistance, updates, and enhancements,
				ensuring your technology evolves with your business.
			</p>

			<Button styles={`mt-10`}/>
		</div>

		<div className={layout.sectionImg}>
			<img src={card} alt="billing" className="w-[100%] h-[100%]"/>
		</div>
	</section>
);

export default CardDeal;
