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
  description: string;
  faqs: Faq[];
  image: string;
};

type Faq = {
  question: string;
  answer: string;
};
