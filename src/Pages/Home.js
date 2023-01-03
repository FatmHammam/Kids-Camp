import Conclusion from "../Components/Conclusion";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HowItWork from "../Components/HowItWork";
import Intro from "../Components/Intro";
import Program from "../Components/Program";


function Home() {
    return (
        <div>
            <Header />
            <Intro />
            <HowItWork />
            <Conclusion />
            <Program />
            <Footer />
        </div>
    );
}

export default Home;