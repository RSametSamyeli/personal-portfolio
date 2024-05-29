import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a SaaS AI Mobile App Project.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Koton",
    des: "Koton, sartorial sophistication meets contemporary flair, crafting effortlessly chic attire that epitomizes modern elegance and timeless style.",
    img: "/koton-web.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.koton.com/",
  },
  {
    id: 2,
    title: "Vakko",
    des: "Vakko epitomizes the pinnacle of luxury and refinement, seamlessly blending heritage craftsmanship with avant-garde design to curate an unparalleled experience of opulence and sophistication.",
    img: "/vakko-web.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.vakko.com/",
  },
  {
    id: 3,
    title: "LC Waikiki",
    des: "LCW redefines accessible fashion, seamlessly merging affordability with trendsetting designs, empowering individuals to express their unique style journey with confidence and flair.",
    img: "/lcw-web.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.lcw.com/",
  },
  {
    id: 4,
    title: "US Polo Assn.",
    des: "US Polo Assn. captures the essence of classic American style, blending timeless elegance with a modern twist to create iconic apparel that exudes confidence, authenticity, and a passion for the sporting lifestyle.",
    img: "/polo-web.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://tr.uspoloassn.com/",
  },
  {
    id: 5,
    title: "Oyak Platform",
    des: "Oyak Platform is a digital platform offering exclusive benefits and services to members of the Oyak Group.",
    img: "/oyak-web.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.oyakplatform.com.tr/login",
  },
  {
    id: 6,
    title: "Otokoc Ihale",
    des: "Otokoç Auction is a platform where second-hand vehicles are sold through online auctions.",
    img: "/otokoc-web.png",
    iconLists: ["/re.svg", "/ts.svg"],
    link: "https://www.otokocihale.com/",
  },
];

export const testimonials = [
  {
    quote:
      "His expertise in frontend development is truly remarkable. His deep understanding of frontend technologies and his ability to translate complex requirements into elegant user interfaces have greatly contributed to the success of our projects. Additionally, his collaborative nature and proactive approach add value to the team. Samet's meticulous work and passion for his job have always helped us move our projects forward.",
    name: "Y. Mehmet Sagdur",
    title: "Brew Interactive - Software Engineer",
    picture: "/yahya.jpeg",
    linkedin: "https://www.linkedin.com/in/ymsagdur/"
  },
  {
    quote:
      "Samet Samyeli's collaboration on our projects has been invaluable. His deep understanding of frontend technologies and his ability to seamlessly integrate them into our workflow have been crucial to our team's success. Working alongside him is both inspiring and productive, and I consider myself fortunate to have him as a teammate.",
    name: "Yemliha Alıcı",
    title: "T-Soft - Frontend Developer",
    picture: "/yemliha.jpeg",
    linkedin: "https://www.linkedin.com/in/yemlihaalici/"
  },
  {
    quote:
      "His contributions to our projects have been exceptional. As a Project Manager, having him on board brings peace of mind knowing that tasks will be completed efficiently and to a high standard. His proactive communication and problem-solving skills streamline our workflow and ensure project success. He is a valuable asset to any team.",
    name: "Eda Balcin",
    title: "Akinon - Senior Project Manager",
    picture: "/eda.jpeg",
    linkedin: "https://www.linkedin.com/in/edabalcin/"
  },
  {
    quote:
      "Working with Samet Samyeli exceeded our expectations. His technical expertise and creative approach brought our vision to life effortlessly. His commitment to excellence is unmatched. We highly recommend him for any development needs.",
    name: "Aliye Sinem Battal",
    title: "Demirören Teknoloji - Frontend Dev.",
    picture: "/aliye.jpeg",
    linkedin: "https://www.linkedin.com/in/aliyesinembattal/"
  },
  {
    quote:
      "His exceptional problem-solving skills and dedication to our project were evident from day one. He went above and beyond to ensure everything was perfect. His work ethic and expertise make him an invaluable asset.",
      name: "Ogun Kirikci",
      title: "Patrion - Tech Lead Dev.",
      picture: "/ogun.jpeg",
      linkedin: "https://www.linkedin.com/in/ogunkirikci/"
  },
  {
    quote:
      "Our experience working with him was fantastic. His in-depth knowledge and ability to execute our ideas flawlessly were impressive. His enthusiasm and professionalism make him a top choice for any project.",
      name: "Tolga Yonca",
      title: "AppCircle - Senior Frontend Dev.",
      picture: "/tolga.jpeg",
      linkedin: "https://www.linkedin.com/in/tolgayonca/"
  },
  {
    quote:
      "His professionalism and expertise were instrumental in the success of our project. He consistently delivered high-quality work and went above and beyond to meet our expectations. Working with him was a pleasure, and we highly recommend him to anyone seeking top-notch development services.",
    name: "Alim Dedei",
    title: "Etiya - Senior Specialist Business Analysis.",
    picture: "/alim.jpeg",
    linkedin: "https://www.linkedin.com/in/alimdedei/"
  },
  {
    quote:
      "Collaborating with Samet Samyeli brought our project to new heights. His strategic thinking and ability to deliver high-quality work on time were remarkable. We value his insights and look forward to our continued partnership.",
    name: "Kübra Çabuk",
    title: "Akinon - Frontend Dev.",
    picture: "/kubra.jpeg",
    linkedin: "https://www.linkedin.com/in/kubracabuk/"
  },
  {
    quote:
      "His ability to seamlessly integrate complex features into our platform was truly impressive. His thorough understanding of our requirements and his proactive approach ensured a smooth development process. We couldn't be happier with the outcome.",
    name: "Ömer Demirarslan",
    title: "Gözen Tech. - Team Lead Dev.",
    picture: "/omer.jpeg",
    linkedin: "https://www.linkedin.com/in/omerdemirarslan/"
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Nuevo Softwarehouse ",
    job: "Frontend Developer / Dec 2023 - Apr 2024",
    desc: "Nuevo Softwarehouse is a leading software company known for its innovative solutions and customer-centric approach. We push the boundaries of technology to add value to the business world.",
    className: "md:col-span-2",
    thumbnail: "/nuevo-logo.png",
    link: "https://www.nuevo.com.tr/",
  },
  {
    id: 2,
    title: "T-Soft",
    job: "Frontend Developer / June 2023 - Dec 2023",
    desc: "T-Soft is a reliable and innovative software company specializing in e-commerce solutions. It guides businesses through digital transformation, helping them boost their online sales.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/tsoft-logo.png",
    link: "https://www.tsoft.com.tr/",
  },
  {
    id: 3,
    title: "Akinon",
    job: "Frontend Developer / June 2022 - June 2023",
    desc: "Akinon is a leading technology company providing cloud-based digital solutions for the retail industry. It enables brands to accelerate their digital transformation by offering a seamless customer experience across all channels.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/akinon-logo.png",
    link: "https://www.akinon.com/",
  },
  {
    id: 4,
    title: "Winnice",
    job: "Fullstack Developer / Jan 2020 - June 2022",
    desc: "Winnice is a dynamic technology company offering innovative solutions in e-commerce and digital marketing. It helps clients enhance their digital presence and boost their online success.",
    className: "md:col-span-2",
    thumbnail: "/winnice-logo.png",
    link: "https://www.winnice.com.tr/",
  },
  {
    id: 5,
    title: "SONY",
    job: "Frontend Intern / June 2016 - Aug 2016",
    desc: "Sony is a global electronics and entertainment company renowned for its innovative technologies and high-quality products. It leads worldwide in a broad range of fields, from music to film, gaming to electronic devices.",
    className: "md:col-span-2",
    thumbnail: "/sonny-logo.png",
    link: "https://www.sony.com/"
  },
  {
    id: 6,
    title: "Pegasus Airlines",
    job: "Fullstack Intern / June 2015 - Sep 2015",
    desc: "Pegasus Airlines is one of Turkey's leading low-cost airline companies, offering affordable and quality services. With its extensive flight network, it provides customers with economical travel options.",
    className: "md:col-span-2",
    thumbnail: "/pegasus-logo.png",
    link: "https://www.flypgs.com/"
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/RSametSamyeli",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/RSametSamyeli",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sametsamyeli/",
  },
];
