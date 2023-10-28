import StorySection from "@/components/StorySection";

function OurStoryPage() {
  return (
    <section id="our-story">
      {/* hero (our story) */}
      <StorySection
        title="Our Story"
        mainDescription="In One Imaging"
        secondaryDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed unde
            numquam soluta autem aspernatur suscipit error tempora voluptates."
        image="https://picsum.photos/id/511/1200/1000"
      />
      {/* mission, values, technology */}
      <StorySection
        title="Our Mission"
        mainDescription="We are in the mission of making healthcare more accessible"
        secondaryDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        commodi nam eius ullam quisquam, inventore quaerat eum reiciendis
        animi repellendus, est saepe recusandae fugiat, totam voluptatem.
        Architecto facilis aspernatur pariatur."
        image="https://picsum.photos/id/513/1200/1000"
        bgColor="bg-purple-50"
        imageOnLeft
      />
      <StorySection
        title="Our Values"
        mainDescription="The core values that shape our culture"
        secondaryDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        commodi nam eius ullam quisquam, inventore quaerat eum reiciendis
        animi repellendus, est saepe recusandae fugiat, totam voluptatem.
        Architecto facilis aspernatur pariatur."
        image="https://picsum.photos/id/514/1200/1000"
      />
    </section>
  );
}
export default OurStoryPage;
