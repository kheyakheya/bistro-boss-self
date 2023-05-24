import { Helmet } from "react-helmet-async";
import Banner from "../Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PpularMenu from "../PopularMenu/PpularMenu";
import Recomend from "../Recomend/Recomend";
import Testimonials from "../Testimonials/Testimonials";
// install helmet
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PpularMenu></PpularMenu>
            <Recomend></Recomend>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;