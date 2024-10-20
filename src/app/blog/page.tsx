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
      <div className="xl:w-[1280px] xl:m-auto flex flex-wrap justify-center gap-[50px] my-[50px] pt-[20px]">
        <div className="w-full xsm:w-[427px] flex flex-col gap-[50px] px-[20px]">
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
        <div className="w-full xsm:w-[427px] pt-[50px] flex flex-col gap-[50px] px-[20px]">
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
      <div className="flex justify-center xl:mt-[20px]">
        <PrimaryButton buttonLabel="Load More" />
      </div>
      <Footer />
    </div>
  );
}
