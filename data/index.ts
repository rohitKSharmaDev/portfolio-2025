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
    title: "Currently building a platform for Sports Enthusiasts",
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
    title: "Resumind",
    des: "An AI powered resume analyzer that provides personalized feedback to help you craft the perfect resume.",
    img: "/p1.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://ai-resume-analyzer-delta-ivory.vercel.app/",
  },
  {
    id: 2,
    title: "StreamVibe",
    des: "A simple and minimalist movie search app with Supabase",
    img: "/p2.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/supabase.svg"],
    link: "https://stream-vibe-cyan.vercel.app/",
  },
  {
    id: 3,
    title: "Cheers and Fly",
    des: "A static website made as a freelance project which provide information about Domestic and International packages.",
    img: "/p3.webp",
    iconLists: ["/html.svg", "/uikit.png", "/jquery.png", "/php.png"],
    link: "http://cheersandfly.com/",
  },
  {
    id: 4,
    title: "XORA Landing Page",
    des: "A modern and sleek landing page for a tech startup, showcasing their products and services.",
    img: "/p4.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://xora-ai-landing-page-bice.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rohit was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rohit's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rohit is the ideal partner.",
    name: "Gurjeet Singh",
    title: "Founder of Cheers and Fly",
  },
  {
    quote:
      "Working with Rohit has been an exceptional experience. He understood my vision for a patient-centric healthcare platform and translated it into a clean, thoughtful, and impactful website. His professionalism, clarity, and commitment to quality made the entire process seamless. I truly appreciate his dedication and highly recommend his work.",
    name: "Sebie Cherian",
    title: "Health Care Evangelist",
  },
  {
    quote:
      "Collaborating with Rohit was a smooth and professional experience. He quickly understood my vision for a modern, high-impact social media marketing platform and translated it into a polished, user-focused website. His attention to detail, clear communication, and dedication to quality made the entire process effortless. I genuinely appreciate his work and highly recommend him.",
    name: "Kuldeep Sharma",
    title: "Director of Social Bricks",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
// ];
  

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Developed responsive interfaces, optimized UI performance, collaborated with backend teams, strengthened JavaScript skills, and delivered reliable, production-ready features across projects.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer – Frontend",
    desc: "Built complex React features, created reusable components, improved accessibility, enhanced product stability, collaborated with designers, and ensured high-quality frontend delivery.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Senior Software Engineer – Frontend",
    desc: "Led scalable SaaS module development, optimized performance, mentored engineers, improved architecture, refined UX workflows, and delivered customer-focused enhancements cross-functional collaboration.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Senior Software Engineer – Product & Platform",
    desc: "Owned platform features, optimized React systems, implemented virtualization, improved UX workflows, strengthened frontend architecture, and ensured consistent, scalable product performance.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/rohitKSharmaDev",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/rohitksharmadev",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rohitksharmadev/",
  },
];
