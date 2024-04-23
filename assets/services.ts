import { Service } from "@/typings";

export const services: Service[] = [
  {
    id: "ct-scan",
    title: "CT scan",
    description: [
      "CT scans take detailed 3D images of internal structures in your body using rotating x-ray tubes and computers. While x-rays only provide a 2D picture, the 3D images obtained via a CT scan provides much more detail and information. CT scans are also far more sensitive for looking at soft tissue structures and organs like your kidneys, liver, lungs, spinal discs and more. It is also very commonly used in diagnosis and monitoring of tumours.",
      "These scans will usually take about 5-15 minutes.",
      "Our highly trained radiographer will guide you through the procedure and ensure you feel safe and comfortable at all times.",
    ],
    subService: {
      header: "At InOne Imaging, we currently offer the following CT scans:",
      item: [
        "CT Brain",
        "CT Facial Bones/Orbits",
        "CT Sinuses",
        "CT Temporal Bones/Inner Ear",
        "CT Pelvis and Hips",
        "CT Chest – for Diagnosing Rib Fractures Only",
        "CT Cervical, Lumbar, and Thoracic Spine",
        "CT Shoulder, Arm, Wrist, Elbow, Hand",
        "CT Lower Leg, Femur, Knee, Ankle, Foot",
      ],
    },
    faqs: [
      {
        question: "Why is a CT scan performed?",
        answer: [
          "CT scans are performed for various reasons, including diagnosing and monitoring conditions such as fractures, tumours, infections and diseases affecting the organs, bones or blood vessels. It helps healthcare professionals make accurate diagnoses and develop appropriate treatment plans.",
        ],
      },
      {
        question: "How should I prepare for a CT scan?",
        answer: [
          "Preparation instructions may vary depending on the specific type of CT scan you are having. In general, most of our scans do not need any preparation. You will be asked to remove any metallic items such as jewellery or clothing containing belts and zippers if they are obstructing the region we are scanning. If contrast dye is required, you may be required to fast for a few hours before the scan. It is important to inform your healthcare provider about any allergies, medications, or existing medical conditions you have.",
        ],
      },
      {
        question: "Will I be exposed to radiation during a CT scan?",
        answer: [
          "Yes, CT scans involve exposure to a small amount of radiation. However, the benefits of the scan usually outweigh the risks associated with radiation exposure. The radiology team will take all necessary precautions to minimize your exposure and ensure your safety. If you have any concerns about the radiation exposure, our team will be willing to answer any questions and provide detailed information during your appointment.",
        ],
      },
      {
        question: "What can I expect during a CT scan?",
        answer: [
          "During the CT scan, you will be asked to lie on a table that moves through a large, doughnut-shaped machine called a CT scanner. You may need to hold your breath or stay still for a short period to obtain clear images. The procedure should be quick, non-invasive and painless.",
          "If your scan requires contrast dye, you will need to have a cannula (a small plastic tube) inserted into your vein. The dye will be injected through the cannula using a power injector during the scan. You may feel a warm feeling as the dye goes into your blood vessels but this is a normal effect of the dye and should wear off within seconds. Our team is highly trained and will thoroughly explain the procedure during your appointment while ensuring your safety and comfort at all times.",
        ],
      },
      {
        question: "How long does a CT scan take?",
        answer: [
          "The duration of a CT scan can vary depending on the area being scanned and the complexity of the examination. Generally, the procedure takes about 5-10 minutes if contrast dye isn’t required. If contrast is required, it can take anywhere between 15-30 minutes depending on the type of scan requested. It’s always best to allow 30 minutes of your time for your appointment. ",
        ],
      },
      {
        question: "Is a CT scan safe?",
        answer: [
          "CT scans are generally considered safe. However, as with any medical procedure, there are potential risks and side effects. These risks are usually minimal and depend on factors such as the amount of radiation used and individual sensitivity. If you’re having a scan with contrast dye, our trained professionals will thoroughly explain all possible side effects and answer any questions during your appointment. Your healthcare provider will also weigh the benefits against the risks before recommending a CT scan.",
        ],
      },
      {
        question: "Can I have a CT scan if I am pregnant?",
        answer: [
          "CT scans involve radiation, which can potentially harm the developing fetus. Therefore, it is generally avoided during pregnancy unless the benefits outweigh the risks. If you are pregnant or suspect you might be, inform your healthcare provider before scheduling a CT scan.",
        ],
      },
      {
        question: "What happens after a CT scan?",
        answer: [
          "After the CT scan, you can usually resume your normal activities unless instructed otherwise by your healthcare provider. The images will be reviewed by a radiologist, who will interpret the results and share them with your doctor. Your doctor will discuss the findings and next steps with you.",
        ],
      },
      {
        question: "Are there alternatives to a CT scan?",
        answer: [
          "Depending on the specific medical condition, there may be alternative imaging tests available, such as MRI (magnetic resonance imaging) or ultrasound. Your healthcare provider will determine the most appropriate imaging modality based on your individual needs.",
        ],
      },
    ],
    image: "/images/contents/ctscan-1.jpeg",
  },
  {
    id: "ultrasound",
    title: "Ultrasound",
    description: [
      "Ultrasound is a type of medical imaging used to assess internal organs in the body using sound waves. No radiation is involved which makes this a very safe and accessible scan. The sonographer will run a transducer (like a small probe shaped camera) along your body that delivers the sound waves to produce a live picture of your internal structures.",
    ],
    subService: {
      header: "Our Ultrasound services at InOne Imaging include:",
      item: [
        "Pregnancy scans for all stages",
        "Abdomen, Pelvis, Kidneys",
        "All musculoskeletal regions",
        "Breasts",
        "Lumps/bumps",
        "All Doppler studies",
      ],
    },

    preparationInfo: {
      header: "Ultrasound patient preparation",
      description: [
        "If your scan is not listed below, then you don’t need any special preparation. Simply arrive at your appointment time with your referral and our friendly staff will assist you.",
        "The following ultrasound scans require some preparation before your appointment:",
      ],
      faqs: [
        {
          question: "Abdominal Ultrasound",
          answer: [
            "Fast for 6 to 8 hours before the scan. Avoid eating, drinking or smoking anything, including water, during the fasting period as this will create gas in the abdomen and make it difficult to see pathology.",
          ],
        },
        {
          question: "Renal Arteries Ultrasound",
          answer: [
            "Fast for 6 to 8 hours before the scan. Avoid eating, drinking or smoking anything, including water, during the fasting period as this will create gas in the abdomen and make it difficult see the arteries.",
          ],
        },
        {
          question: "Aorta or Leg arteries Ultrasound",
          answer: [
            "Fast for 6 to 8 hours before the scan. Avoid eating, drinking or smoking anything, including water, during the fasting period as this will create gas in the abdomen and make it difficult see the arteries.",
          ],
        },
        {
          question: "Pelvic Ultrasound",
          answer: [
            "Drink 1 litre of water 1 hour before you arrive for your appointment and have a full bladder before the scan. Do not use the bathroom.",
          ],
        },
        {
          question: "Renal or Kidney Ultrasound",
          answer: [
            "Drink 1 litre of water 1 hour before you arrive for your appointment and have a full bladder before the scan. Do not use the bathroom.",
          ],
        },
        {
          question: "Early pregnancy/dating scan",
          answer: [
            "Drink 2-3 glasses of water 1 hour before your scan and hold your bladder. Do not use the bathroom.",
          ],
        },
        {
          question: "Morphology pregnancy scan",
          answer: [
            "Drink 2-3 glasses of water 1 hour before your scan. You don’t need to hold your bladder for this scan; you can use the bathroom.",
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Why might I need an ultrasound?",
        answer: [
          "Ultrasounds are commonly used to examine various organs and tissues in the body, such as the abdomen, pelvis, heart, blood vessels, and reproductive organs. They can help diagnose and monitor conditions such as pregnancy, gallstones, kidney stones, tumours, and heart abnormalities.",
        ],
      },
      {
        question: "How should I prepare for an ultrasound?",
        answer: [
          "Preparation instructions may vary depending on the specific type of ultrasound you are having. Our team will advise you if you need any prior preparation at the time of booking. You can also view the preparation instruction for specific scans on our website under ‘Ultrasound patient preparation’.",
        ],
      },
      {
        question: "Is an ultrasound safe?",
        answer: [
          "Ultrasounds are considered safe and do not involve exposure to ionizing radiation, unlike X-rays or CT scans. The sound waves used in ultrasounds are not known to have any harmful effects on humans or developing foetuses.",
        ],
      },
      {
        question: "How long does an ultrasound take?",
        answer: [
          "The duration of an ultrasound can vary depending on the area being examined and the complexity of the case. Generally, an ultrasound can take anywhere from 15 minutes to an hour.",
        ],
      },
      {
        question: "Will the ultrasound be painful?",
        answer: [
          "Ultrasounds are typically painless. However, you may experience slight discomfort or pressure during the procedure, especially if the ultrasound probe needs to be pressed firmly against your skin.",
        ],
      },
      {
        question: "Who will perform the ultrasound?",
        answer: [
          "Ultrasounds are usually performed by a trained healthcare professional called a sonographer. They are skilled in operating the ultrasound equipment and interpreting the images.",
        ],
      },
      {
        question: "Will I receive the results immediately?",
        answer: [
          "The sonographer will capture the images during the ultrasound, but they are not authorized to provide a diagnosis. The images will be reviewed by a radiologist who will send a report to your healthcare provider. Your healthcare provider will communicate the results to you during a follow-up appointment.",
        ],
      },
      {
        question:
          "Are there any risks or side effects associated with ultrasounds?",
        answer: [
          "Ultrasounds are generally considered safe and do not have any known risks or side effects. However, in rare cases, some individuals may experience an allergic reaction to the gel used during the procedure. If you have any concerns or specific medical conditions, it is best to discuss them with your healthcare provider beforehand.",
        ],
      },
      {
        question: "Can I bring someone with me to the ultrasound?",
        answer: [
          "In most cases, you are allowed to bring a support person with you to the ultrasound. Speak with your sonographer on the day as there are some cases where we cannot allow a second person in the room.",
        ],
      },
    ],
    image: "/images/contents/ultrasound-1.jpeg",
  },

  {
    id: "pregnancy-ultrasound",
    title: "Pregnancy Ultrasound",
    description: [
      "At InOne Imaging, we offer pregnancy ultrasound scans as part of our full range of medical imaging services. These ultrasound scans are essential diagnostic tools used to monitor the baby’s development throughout pregnancy and detect any potential abnormalities or health issues. Our team of highly experienced medical professionals will provide you with the best quality care and make your ultrasound experience as comfortable as possible.",
    ],
    pregnancyInfo: {
      header: "Our Pregnancy Ultrasound services at InOne Imaging include:",
      subService: [
        {
          name: "Early pregnancy/Dating scan",
          description:
            "This ultrasound scan is used to accurately date a pregnancy, check for multiple pregnancies and confirm fetal activity. It is typically performed between 6-10 weeks of pregnancy.",
        },
        {
          name: "Nuchal Translucency scan",
          description:
            "This scan is used to check the risk of your baby having any chromosomal abnormalities like down syndrome. It will not confirm any abnormalities but will tell you if the risk is high or low. It is typically performed between 11-14 weeks of pregnancy.",
        },
        {
          name: "Structural/Morphology scan",
          description:
            "This scan helps to assess the size, shape and position of your baby’s organs and confirm the gender. It is performed between 18-20 weeks of pregnancy.",
        },
        {
          name: "Growth scan",
          description:
            "This scan helps to monitor the growth and development of your baby. It is performed between 32-40 weeks of pregnancy.",
        },
      ],
    },

    preparationInfo: {
      header: "Pregnancy Ultrasound patient preparation",
      description: [
        "If your scan is not listed below, then you don’t need any special preparation. Simply arrive at your appointment time with your referral and our friendly staff will assist you.",
        "The following ultrasound scans require some preparation before your appointment:",
      ],
      faqs: [
        {
          question: "Early pregnancy/dating scan",
          answer: [
            "Drink 2-3 glasses of water 1 hour before your scan and hold your bladder. Do not use the bathroom.",
          ],
        },
        {
          question: "Morphology pregnancy scan",
          answer: [
            "Drink 2-3 glasses of water 1 hour before your scan. You don’t need to hold your bladder for this scan; you can use the bathroom.",
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Why might I need an ultrasound?",
        answer: [
          "Ultrasounds are commonly used to examine various organs and tissues in the body, such as the abdomen, pelvis, heart, blood vessels, and reproductive organs. They can help diagnose and monitor conditions such as pregnancy, gallstones, kidney stones, tumours, and heart abnormalities.",
        ],
      },
      {
        question: "How should I prepare for an ultrasound?",
        answer: [
          "Preparation instructions may vary depending on the specific type of ultrasound you are having. Our team will advise you if you need any prior preparation at the time of booking. You can also view the preparation instruction for specific scans on our website under ‘Ultrasound patient preparation’.",
        ],
      },
      {
        question: "Is an ultrasound safe?",
        answer: [
          "Ultrasounds are considered safe and do not involve exposure to ionizing radiation, unlike X-rays or CT scans. The sound waves used in ultrasounds are not known to have any harmful effects on humans or developing foetuses.",
        ],
      },
      {
        question: "How long does an ultrasound take?",
        answer: [
          "The duration of an ultrasound can vary depending on the area being examined and the complexity of the case. Generally, an ultrasound can take anywhere from 15 minutes to an hour.",
        ],
      },
      {
        question: "Will the ultrasound be painful?",
        answer: [
          "Ultrasounds are typically painless. However, you may experience slight discomfort or pressure during the procedure, especially if the ultrasound probe needs to be pressed firmly against your skin.",
        ],
      },
      {
        question: "Who will perform the ultrasound?",
        answer: [
          "Ultrasounds are usually performed by a trained healthcare professional called a sonographer. They are skilled in operating the ultrasound equipment and interpreting the images.",
        ],
      },
      {
        question: "Will I receive the results immediately?",
        answer: [
          "The sonographer will capture the images during the ultrasound, but they are not authorized to provide a diagnosis. The images will be reviewed by a radiologist who will send a report to your healthcare provider. Your healthcare provider will communicate the results to you during a follow-up appointment.",
        ],
      },
      {
        question:
          "Are there any risks or side effects associated with ultrasounds?",
        answer: [
          "Ultrasounds are generally considered safe and do not have any known risks or side effects. However, in rare cases, some individuals may experience an allergic reaction to the gel used during the procedure. If you have any concerns or specific medical conditions, it is best to discuss them with your healthcare provider beforehand.",
        ],
      },
      {
        question: "Can I bring someone with me to the ultrasound?",
        answer: [
          "In most cases, you are allowed to bring a support person with you to the ultrasound. Speak with your sonographer on the day as there are some cases where we cannot allow a second person in the room.",
        ],
      },
    ],
    image: "/images/contents/ultrasound-2.jpeg",
  },
  {
    id: "x-ray",
    title: "X-ray",
    description: [
      "At InOne Imaging, we have state-of-the-art medical imaging equipment that allows us to take quality x-ray images at the lowest possible radiation doses. All appointments are carried out by our fully qualified and highly experienced team.",
      "X-rays are used to diagnose many different medical conditions including broken/fractured bones, abnormal lung activity, digestive system issues, heart problems, and more. They are best for looking at bony injuries. During your x-ray appointment, our highly trained radiographer will take multiple pictures of your injured area in different positions to provide a comprehensive evaluation. These x-rays are very low dose and we take utmost care to minimise any radiation as much as possible.",
    ],
    faqs: [
      {
        question: "What can I expect during my X-ray appointment?",
        answer: [
          "During an X-ray, you will be asked to position yourself while standing or lie down on an x-ray table. The X-ray technician will then position the X-ray machine and may ask you to hold your breath for a few seconds to capture clear images. The process is quick and painless.",
        ],
      },
      {
        question: "Is an X-ray safe?",
        answer: [
          "X-rays are generally considered safe, as the amount of radiation used is minimal. However, it's important to inform your healthcare provider if you are pregnant or suspect you might be, as precautions may need to be taken.",
        ],
      },
      {
        question: "Are there any risks or side effects associated with X-rays?",
        answer: [
          "The risks associated with X-rays are minimal. However, excessive exposure to radiation over time may have potential health risks. Your healthcare provider will ensure that the benefits of the X-ray outweigh any potential risks.",
        ],
      },
      {
        question: "How should I prepare for an X-ray?",
        answer: [
          "In most cases, there is no special preparation required for an X-ray. However, you may be asked to remove any metallic objects such as jewellery or clothing with zippers and buttons that could interfere with the images. It's important to inform your healthcare provider about any existing medical conditions or allergies.",
        ],
      },
      {
        question: "How will I get the results?",
        answer: [
          "A radiologist, who is a specialized doctor trained in interpreting medical images, will review and interpret your X-ray images. They will provide a detailed report to your healthcare provider, who will then discuss the results with you.",
        ],
      },
      {
        question: "How long do the results take?",
        answer: [
          "In most cases, results should be available 24-28 hours after your examination.",
        ],
      },
      {
        question: "What happens after the X-ray?",
        answer: [
          "Once the X-ray is complete, you can resume your normal activities unless instructed otherwise by your healthcare provider. They will discuss the results with you and recommend any necessary follow-up actions or treatments based on the findings.",
        ],
      },
    ],
    image: "/images/contents/xray-1.jpeg",
  },
];
