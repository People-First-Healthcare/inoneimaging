export type Menu = {
  menuTitle: string;
  link?: string;
  subMenu: SubMenu[];
};

export type SubMenu = {
  subMenuTitle: string;
  description?: string;
  link: string;
  icon: React.ReactNode;
};

export type Service = {
  id: string;
  title: string;
  description: string[];
  subService?: SubService;
  preparationInfo?: PreparationInfo;
  pregnancyInfo?: PregnancyInfo;
  faqs?: Faq[];
  image: string;
};

export type SubService = {
  header: string;
  item: string[];
};

export type PreparationInfo = {
  header: string;
  description: string[];
  faqs: Faq[];
};

export type PregnancyInfo = {
  header: string;
  subService: {
    name: string;
    description: string;
  }[];
};

type Faq = {
  question: string;
  answer: string[];
};
