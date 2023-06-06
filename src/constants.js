import {
  service1,
  service2,
  service3,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  slider,
  customer1,
  customer2,
  customer3,
  customer4,
  features,
  features2,
  features3,
  news2,
  news3,
  news4,
} from "./assets/img";

// navlinks constants

export const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "About Us",
    link: "#about",
  },
  {
    id: 3,
    name: "Services",
    link: "#services",
  },
  {
    id: 4,
    name: "Features",
    link: "#features",
  },
  {
    id: 5,
    name: "Projects",
    link: "#project",
  },
  {
    id: 6,
    name: "Clients",
    link: "#customer",
  },
  {
    id: 7,
    name: "Contact Us",
    link: "#contact",
  },
];

// features constants

export const featuresImg = [
  {
    img: features,
  },
  {
    img: features2,
  },
  {
    img: features3,
  },
];

export const featuresContent = [
  {
    h4: `Works With Existing Apps`,
    p: ` At solmen necessi a uniform grammatica pronunciation
    sommun plu paroles ma quande.`,
  },
  {
    h4: `Easy Email Marketing`,
    p: ` At solmen necessi a uniform grammatica pronunciation
    sommun plu paroles ma quande.`,
  },
  {
    h4: `Get Private Customers Feedback`,
    p: ` At solmen necessi a uniform grammatica pronunciation
    sommun plu paroles ma quande.`,
  },
];

// serviceContent constants

export const serviceContent = [
  {
    key: 1,
    src: service1,
    heading: "Awesome Support",
    info: `Omnicos directe al desirabilite de une nov lingua franca a
    refusa continuar payar custosi traductores.`,
  },
  {
    key: 2,
    src: service2,
    heading: "Analytics Security",
    info: `Omnicos directe al desirabilite de une nov lingua franca a
    refusa continuar payar custosi traductores.`,
  },
  {
    key: 3,
    src: service3,
    heading: "Data Privacy",
    info: `Omnicos directe al desirabilite de une nov lingua franca a
    refusa continuar payar custosi traductores.`,
  },
];

// projectContent constants

export const projectContent = [
  {
    key: 1,
    src: project1,
    heading: `Professional Designer`,
    info: "UI/UX Designer",
  },
  {
    key: 2,
    src: project2,
    heading: `Product Designer`,
    info: `Web Designer`,
  },
  {
    key: 3,
    src: project3,
    heading: `Design Development`,
    info: "PHP Developer",
  },
  {
    key: 4,
    src: project4,
    heading: `Product Designer`,
    info: "React Developer",
  },
  {
    key: 5,
    src: project5,
    heading: `Design Development`,
    info: "UI/UX Designer",
  },
  {
    key: 6,
    src: project6,
    heading: `Graphic Development`,
    info: "Web Designer",
  },
];

// slider constants *customer.js*

export const sliderItem = [
  {
    key: 1,
    comment: `amet consectetur adipisicing elit. Est doloribus voluptatibus sunt beatae aperiam, consectetur temporibus`,
    imgSrc: slider,
    userImg: customer1,
    userName: `Joshua Vargas`,
    userInfo: `Web Developer, USA`,
  },
  {
    key: 2,
    comment: `amet consectetur adipisicing elit. Est doloribus voluptatibus sunt beatae aperiam, consectetur temporibus`,
    imgSrc: slider,
    userImg: customer2,
    userName: `Sammie Lewis`,
    userInfo: `Web Developer, USA`,
  },
  {
    key: 3,
    comment: `amet consectetur adipisicing elit. Est doloribus voluptatibus sunt beatae aperiam, consectetur temporibus`,
    imgSrc: slider,
    userImg: customer3,
    userName: `Sarah Levine`,
    userInfo: `PHP Developer, USA`,
  },
  {
    key: 4,
    comment: `amet consectetur adipisicing elit. Est doloribus voluptatibus sunt beatae aperiam, consectetur temporibus`,
    imgSrc: slider,
    userImg: customer4,
    userName: `Bobby Kelly`,
    userInfo: `React Developer, USA`,
  },
  {
    key: 5,
    comment: `amet consectetur adipisicing elit. Est doloribus voluptatibus sunt beatae aperiam, consectetur temporibus`,
    imgSrc: slider,
    userImg: customer3,
    userName: `Sarah Levine`,
    userInfo: `PHP Developer, USA`,
  },
  {
    key: 6,
    comment: `amet consectetur adipisicing elit. Est doloribus voluptatibus sunt beatae aperiam, consectetur temporibus`,
    imgSrc: slider,
    userImg: customer2,
    userName: `Sammie Lewis`,
    userInfo: `Web Developer, USA`,
  },
];

// news constants

export const newsContent = [
  {
    src: news2,
    heading: `The Big Event Conference`,
    info: `At vero eos et accusamus et iusto dignissimos.`,
    date: `07 Jan 2020`,
    time: `15 min ago`,
  },
  {
    src: news3,
    heading: `Best Family House For You`,
    info: `At vero eos et accusamus et iusto dignissimos.`,
    date: `06 June 2020`,
    time: `20 min ago`,
  },
  {
    src: news4,
    heading: `Business Metting Places`,
    info: `At vero eos et accusamus et iusto dignissimos.`,
    date: `22 Fab 2020`,
    time: `30 min ago`,
  },
];

// footer constants

export const footerLinks = [
  {
    customer: [
      { link: "Works" },
      { link: "Strategy" },
      { link: "Releases" },
      { link: "Press" },
      { link: "Mission" },
    ],
    product: [
      { link: "Tranding" },
      { link: "Popular" },
      { link: "Customers" },
      { link: "Features" },
    ],

    learnMore: [
      { link: "Developers" },
      { link: "Support" },
      { link: "Customer Service" },
      { link: "Get Started" },
      { link: "Guide" },
    ],
  },
];
