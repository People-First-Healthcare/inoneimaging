import { services } from "@/assets/services";

export default async function sitemap() {
  const baseUrl = "https://inoneimaging.vercel.app";
  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    {
      url: `${baseUrl}/patient-information/fees-billing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/patient-information/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/referrers/access-patient-images`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about/our-story`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about/getting-here`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about/contact-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/request-appointment`,
      lastModified: new Date(),
    },
    ...serviceUrls,
  ];
}
