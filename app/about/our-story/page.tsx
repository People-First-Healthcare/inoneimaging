import StorySection from "@/app/about/our-story/components/StorySection";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story, Mission and Values",
  description:
    "In One Imaging aims to provide exceptional imaging services to our community at Roxburgh Park in Melbourne. Our friendly team are always here to help.",
  alternates: {
    canonical: "/about/our-story",
  },
};

function OurStoryPage() {
  return (
    <section id="our-story" className="overflow-x-hidden">
      {/* hero (our story) */}
      <StorySection
        title="Our Story"
        mainDescription="In One Imaging"
        secondaryDescription="Opened in November of 2022 with the hope of providing exceptional imaging services to our community. Our goal is to make imaging more accessible to the community, as everyone has the right to quality healthcare."
        image="/images/contents/nurse-elderly.png"
      />
      {/* mission, values, technology */}
      <StorySection
        title="Our Mission"
        mainDescription="We are in the mission of making healthcare more accessible"
        secondaryDescription="We are a community focused organisation providing exceptional care to support and enhance the lives of the people we serve."
        image="/images/contents/pregnantwomen.png"
        bgColor="bg-purple-50"
        imageOnLeft
      />
      <StorySection
        title="Our Values"
        mainDescription="The core values that shape our culture"
        values={[
          "We do what we say",
          "When things get tough, we get going",
          "We look to improve",
        ]}
        valuesDescription={[
          "Our team has an honest and transparent approach with our patients. By delivering exceptional patient care and high-quality imaging services, our clients know we are here for them and that we look after them, every step of the way.",
          "Even when things don’t go to plan, the team at In One Imaging will show genuine compassion and care. We work with you to the best of our ability to find a solution.",
          "In order to best serve our patients, we recognise the importance of continuous improvement, striving to be better every day. We embrace change and we are always open to your feedback.",
        ]}
        image="/inoneimaging/app/icon.png"
      />

      <div id="partners" className="pt-20">
        <InfiniteSlider />
      </div>
    </section>
  );
}
export default OurStoryPage;
