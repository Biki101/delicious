import BlogCard from "../components/BlogCard/blog-card";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import PageHeader from "../components/PageHeader/page-header";
import image from "../assets/today-special.jpg";
import PrimaryButton from "../components/PrimaryButton/primary-button";

export default function Blog() {
  return (
    <div>
      <Header />
      <PageHeader title="Our Blog" />
      <div className="outer-container flex justify-center gap-[50px] my-[50px]">
        <div className="w-1/3 flex flex-col gap-[50px]">
          <BlogCard
            author="John Doe"
            category="Lifestyle"
            comments="2"
            date="May 27 2024"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus ex modi quibusdam omnis possimus molestiae labore laborum debitis voluptatem."
            title="Recipe of the week"
            image={image}
          />
          <BlogCard
            author="John Doe"
            category="Lifestyle"
            comments="2"
            date="May 27 2024"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus ex modi quibusdam omnis possimus molestiae labore laborum debitis voluptatem."
            title="Recipe of the week"
            image={image}
          />
          <BlogCard
            author="John Doe"
            category="Lifestyle"
            comments="2"
            date="May 27 2024"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus ex modi quibusdam omnis possimus molestiae labore laborum debitis voluptatem."
            title="Recipe of the week"
            image={image}
          />
          <BlogCard
            author="John Doe"
            category="Lifestyle"
            comments="2"
            date="May 27 2024"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus ex modi quibusdam omnis possimus molestiae labore laborum debitis voluptatem."
            title="Recipe of the week"
            image={image}
          />
          <BlogCard
            author="John Doe"
            category="Lifestyle"
            comments="2"
            date="May 27 2024"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus ex modi quibusdam omnis possimus molestiae labore laborum debitis voluptatem."
            title="Recipe of the week"
            image={image}
          />
        </div>
        <div className="w-1/3 pt-[50px] flex flex-col gap-[50px]">
          <BlogCard
            author="John Doe"
            category="Lifestyle"
            comments="2"
            date="May 27 2024"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus ex modi quibusdam omnis possimus molestiae labore laborum debitis voluptatem."
            title="Recipe of the week"
            image={image}
          />
          <BlogCard
            author="John Doe"
            category="Lifestyle"
            comments="2"
            date="May 27 2024"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus ex modi quibusdam omnis possimus molestiae labore laborum debitis voluptatem."
            title="Recipe of the week"
            image={image}
          />
          <BlogCard
            author="John Doe"
            category="Lifestyle"
            comments="2"
            date="May 27 2024"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus ex modi quibusdam omnis possimus molestiae labore laborum debitis voluptatem."
            title="Recipe of the week"
            image={image}
          />
          <BlogCard
            author="John Doe"
            category="Lifestyle"
            comments="2"
            date="May 27 2024"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus ex modi quibusdam omnis possimus molestiae labore laborum debitis voluptatem."
            title="Recipe of the week"
            image={image}
          />
          <BlogCard
            author="John Doe"
            category="Lifestyle"
            comments="2"
            date="May 27 2024"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus ex modi quibusdam omnis possimus molestiae labore laborum debitis voluptatem."
            title="Recipe of the week"
            image={image}
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <PrimaryButton buttonLabel="Load More" />
      </div>
      <Footer />
    </div>
  );
}
