import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Slider from "./components/carousel/Slider";
import Cards from "./components/Services.jsx";
import Work from "./components/Work.jsx";

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Slider />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                {/* <Stats /> */}
                <Business />
                <Billing />
                <CardDeal />
                <Cards />
                <Testimonials />
                <Work />
                {/*<Clients />*/}
                <CTA />
                <Footer />
            </div>
        </div>
    </div>
);

export default App;
