export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  author: "Avantia Digitalis",
  name: "Avantia Digitalis",
  title: "Diseño y creación de páginas web",
  description:
    "Ofrecemos servicios profesionales de diseño y creación de páginas web. Sitios web personalizados, responsivos y optimizados para SEO. ¡Haz crecer tu negocio en línea con nosotros!",
  keywords:
    "diseño web, creación de páginas web, desarrollo web, páginas web personalizadas, diseño de sitios web, servicios de diseño web, diseño web profesional, diseño web responsivo, optimización SEO, AvantiaDigitalis, Avantia",
  url: "https://avantiadigitalis.com",
  image: "/Meta.png",
  navItems: [
    {
      id: 1,
      label: "Home",
      href: "/",
      options: [
        { id: 2, label: "Digital Agency", href: "/" },
        { id: 3, label: "Creative Agency", href: "/" },
        { id: 4, label: "Personal Portafolio", href: "/" },
        { id: 5, label: "Home Startup", href: "/" },
        { id: 6, label: "Corporate Agency", href: "/" },
      ],
    },
    {
      id: 7,
      label: "Services",
      href: "/services",
      options: [
        { id: 8, label: "Services", href: "/services" },
        { id: 9, label: "Services Two", href: "/" },
        { id: 10, label: "Services Details", href: "/" },
      ],
    },
    {
      id: 11,
      label: "About Us",
      href: "/",
    },
    {
      id: 12,
      label: "Blog",
      href: "/",
      options: [
        { id: 13, label: "Blog List", href: "/" },
        { id: 14, label: "Blog List Two", href: "/" },
        { id: 15, label: "Blog Details", href: "/" },
      ],
    },
    {
      id: 16,
      label: "Pages",
      href: "/",
      options: [
        { id: 17, label: "Button", href: "/" },
        { id: 18, label: "Typography", href: "/" },
        { id: 19, label: "Testimonial", href: "/" },
        { id: 20, label: "Portafolio", href: "/" },
        { id: 21, label: "Portafolio Details", href: "/" },
        { id: 22, label: "Pricing", href: "/" },
        { id: 23, label: "Services", href: "/" },
        { id: 24, label: "Team", href: "/" },
        { id: 25, label: "Team Details", href: "/" },
        { id: 26, label: "Case Study", href: "/" },
        { id: 27, label: "Case Study Details", href: "/" },
        { id: 28, label: "Comming Soon", href: "/" },
        { id: 29, label: "404 Page", href: "/404" },
      ],
    },
    {
      id: 30,
      label: "Contact",
      href: "/",
    },
  ],
};
