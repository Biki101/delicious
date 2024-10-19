import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Intro from "../components/Intro/intro";
import PageHeader from "../components/PageHeader/page-header";
import introChef from "../assets/intro-chef.png";
import chefWithDish from "../assets/chef-with-dish-intro.jpg";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <PageHeader title="About Us" />
      <Intro image1={introChef} image2={chefWithDish} />
      <Footer />
    </div>
  );
}
