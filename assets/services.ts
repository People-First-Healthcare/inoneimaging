import { Service } from "@/typings";

export const services: Service[] = [
  {
    id: "ct-scan",
    title: "CT Scan",
    description:
      "A CT scan is a type of X-ray that uses a computer to create detailed images of the inside of your body. It can be used to diagnose a variety of conditions, including cancer, heart disease, and stroke.",
    faqs: [
      {
        question: "What should I expect during a CT scan?",
        answer:
          "You will lie on a table while the CT scanner rotates around you. The scanner will make a loud noise during the scan. The scan will typically take a few minutes to complete.",
      },
      {
        question: "Are there any risks associated with CT scans?",
        answer:
          "CT scans use radiation, which can increase your risk of cancer. However, the risk is very low, especially when compared to the benefits of the scan.",
      },
    ],
    image: "https://picsum.photos/id/317/1600/500",
  },
  {
    id: "ultrasound",
    title: "Ultrasound",
    description:
      "An ultrasound is a type of imaging test that uses sound waves to create images of the inside of your body. It can be used to diagnose a variety of conditions, including pregnancy, gallbladder problems, and liver disease.",
    faqs: [
      {
        question: "What should I expect during an ultrasound?",
        answer:
          "You will lie on a table while the ultrasound technician places a transducer on your body. The transducer will emit sound waves that will create images of the inside of your body. The images will be displayed on a monitor. The ultrasound will typically take a few minutes to complete.",
      },
      {
        question: "Are there any risks associated with ultrasounds?",
        answer:
          "Ultrasound is a safe and non-invasive imaging test. There are no known risks associated with ultrasounds.",
      },
    ],
    image: "https://picsum.photos/id/400/1600/500",
  },
  {
    id: "x-ray",
    title: "X-Ray",
    description:
      "An X-ray is a type of imaging test that uses radiation to create images of the inside of your body. It can be used to diagnose a variety of conditions, including broken bones, pneumonia, and tumors.",
    faqs: [
      {
        question: "What should I expect during an X-ray?",
        answer:
          "You will stand or lie down while the X-ray technician positions the X-ray machine. The X-ray machine will emit radiation to create an image of your body. The image will be displayed on a monitor. The X-ray will typically take a few seconds to complete.",
      },
      {
        question: "Are there any risks associated with X-rays?",
        answer:
          "X-rays use radiation, which can increase your risk of cancer. However, the risk is very low, especially when compared to the benefits of the scan.",
      },
    ],
    image: "https://picsum.photos/id/401/1600/500",
  },
];
