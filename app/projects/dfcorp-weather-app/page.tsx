import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import WeatherAppContent from "@/components/WeatherAppContent/WeatherAppContent";


export default function WeatherApp() {
    return (
        <>
        <NavBar />
        <WeatherAppContent />
        <Footer />
        </>
    );
    }