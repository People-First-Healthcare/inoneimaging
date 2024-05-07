import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";

function OurTeam() {
  const doctors = [
    {
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nunc sit amet ligula dignissim posuere. Ut nec dui et mi fermentum sollicitudin. Phasellus aliquet vestibulum eros, ut posuere purus ultrices at. Integer et elit eget magna malesuada cursus. Maecenas id justo vel odio fermentum tincidunt. Aliquam sed mauris vitae tellus pharetra lacinia. Nulla facilisi. Morbi feugiat magna nec odio ultricies vestibulum. Sed nec enim aliquet, lacinia lorem id, tincidunt urna. Nulla facilisi. Nullam id sem sit amet eros vestibulum ultricies. Duis et velit eu libero gravida facilisis ut vitae elit. Sed in feugiat justo. Vestibulum vel semper sapien. Ut auctor magna libero, nec cursus sapien dapibus et. Donec non purus eu purus vehicula euismod.Suspendisse eget tempor quam. Sed nec tincidunt eros. Donec nec lectus id elit tempor convallis. Suspendisse potenti. Vestibulum fermentum accumsan justo, sit amet fringilla neque fermentum sed. Nam scelerisque nisl nec purus elementum, ut tempor arcu molestie. Phasellus eu ex eget justo rhoncus ultricies. Nullam dignissim, leo id hendrerit dapibus, felis felis sollicitudin odio, ac luctus lacus ligula eu leo.",
      image: "/images/team/doctor1.jpeg",
    },
    {
      name: "Dr. Jane Smith",
      specialty: "Pediatrician",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante at ligula faucibus gravida. Nullam vestibulum, justo vel posuere ultricies, libero nisi convallis nisl, id efficitur lorem odio vel sapien. Pellentesque nec augue eu odio accumsan dictum. Duis varius felis eget eros sodales hendrerit. Mauris vel augue justo. Nullam nec sapien nec ligula tristique tristique non sed eros. Integer volutpat sollicitudin sapien, eget rhoncus magna. Sed vitae urna ac nisi pharetra vehicula. Maecenas at rutrum justo, vel accumsan velit. Curabitur tristique risus id feugiat sodales. Vivamus sit amet justo risus. Suspendisse potenti. Fusce condimentum sem a dui accumsan, ut condimentum purus finibus. Ut vel metus quis risus tempus auctor eget vel nisi. Donec consectetur libero sed ipsum ultrices vestibulum. Proin lobortis scelerisque orci, eget sollicitudin nulla tempus a. Nunc nec tristique neque. Fusce ut suscipit nisi. Vivamus vel vestibulum ipsum, et vehicula magna.      ",
      image: "/images/team/doctor2.jpeg",
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Orthopedic Surgeon",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit placerat urna, ut rhoncus tellus lobortis non. Integer nec velit nec libero tincidunt placerat vel et risus. Proin feugiat eros nec felis sodales, vel ultrices elit pharetra. Donec quis est a magna eleifend scelerisque. Maecenas sit amet ullamcorper libero. Morbi commodo ligula id magna tempus, at bibendum tortor molestie. Nulla nec magna ullamcorper, posuere arcu nec, consequat metus. Ut nec lorem velit. Curabitur in ligula eu lorem fermentum posuere. Nullam sit amet dapibus libero. Sed id metus vehicula, aliquet libero vel, scelerisque libero. In ultricies sapien sit amet libero placerat, at vulputate ligula fermentum. Phasellus id metus arcu. Nullam sit amet purus ut libero varius convallis eget ac magna. Nam eget tempor ante, sed consequat libero. Duis ut vestibulum odio, vel viverra elit. Sed tincidunt feugiat lorem, a commodo felis ullamcorper vitae.",
      image: "/images/team/doctor3.jpeg",
    },
  ];
  return (
    <section id="our-team" className="flex flex-col">
      <HeroBanner title={"Our Team"} image={"/images/contents/contactus.png"} />
      <div className="flex flex-col max-w-7xl gap-10 px-6 py-10 mx-auto">
        {doctors.map((doctor, i) => (
          <div className="flex flex-col md:flex-row shadow-md rounded">
            <div className="relative w-[300px] h-[500px] mx-auto shrink-0">
              <Image
                src={doctor.image}
                alt={doctor.name}
                sizes="300px"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h2 className="text-xl font-bold">{doctor.name}</h2>
              <p className="text-gray-600 text-sm">{doctor.specialty}</p>
              <p className="text-gray-700">{doctor.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default OurTeam;
