import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import PremiumStats from "../components/PremiumStats";
import FeaturedProducts from "../components/FeaturedProducts";
import Sectors from "../components/Sectors";
import DeliveryZones from "../components/DeliveryZones";
import TrustedBy from "../components/TrustedBy";
import Testimonials from "../components/Testimonials";
import QuoteBanner from "../components/QuoteBanner";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppFloat from "../components/WhatsAppFloat";

function Home({ totalItems }) {
    return (
        <>
            <Navbar totalItems={totalItems} />
            <PromoBanner />
            <Hero />
            <Benefits />
            <PremiumStats />
            <FeaturedProducts />
            <Sectors />
            <DeliveryZones />
            <TrustedBy />
            <Testimonials />
            <QuoteBanner />
            <FinalCta />
            <Footer />
            <WhatsAppFloat />
            <BackToTop />
        </>
    );
}

export default Home;