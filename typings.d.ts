export type Menu = {
  menuTitle: string;
  subMenu: SubMenu[];
  link: string;
};

export type SubMenu = {
  subMenuTitle: string;
  link: string;
};

export type Service = {
  id: string;
  title: string;
  description: string[];
  subService?: SubService;
  pregnancyInfo?: PregnancyInfo;
  faqs?: Faq[];
  image: string;
};

export type SubService = {
  header: string;
  item: string[];
};

export type PregnancyInfo = {
  description: string;
  subServiceHeader: string;
  subService: {
    name: string;
    description: string;
  }[];
  preparationHeader: string;
  preparationDescription: string[];
  preperationFaqs: Faq[];
};

type Faq = {
  question: string;
  answer: string[];
};
