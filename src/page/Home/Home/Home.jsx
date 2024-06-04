
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import FeaturedSurveys from '../FeaturedSurveys/FeaturedSurveys';
import HowItWorks from '../HowItWorks/HowItWorks';
import LatestSurveys from '../LatestSurveys/LatestSurveys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSurveys></FeaturedSurveys>
            <LatestSurveys></LatestSurveys>
            <HowItWorks></HowItWorks>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;