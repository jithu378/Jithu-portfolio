export const profile = {
  name: "Jithu Biju",
  role: "Aspiring Full-Stack Developer",
  location: "Kottayam, Kerala",
  email: "jithubiju.official@gmail.com",
  github: "https://github.com/jithu378",
  linkedin: "https://www.linkedin.com/in/jithu-biju-/",
  photo: "/jithu-portfolio.png",
  tagline: "I’m Jithu Biju, an aspiring full-stack developer who enjoys turning ideas into practical web experiences.",
  about:
    "I’m Jithu Biju, an aspiring full-stack developer based in Kottayam, Kerala. I enjoy turning ideas into practical web applications and learning through the process of building them. I believe the best way to learn is by doing — taking an idea, building it, discovering what breaks, understanding why it breaks, and then making it better. This hands-on approach has helped me strengthen my foundations in web development, JavaScript, Python, databases, and programming while continuing to grow as a developer. I’m currently expanding my skills toward full-stack development and exploring modern web technologies, with a focus on building useful projects rather than simply learning technologies in isolation.",
};

export const skillGroups = [
  {
    label: "Primary Skills",
    items: ["HTML", "CSS", "JavaScript", "Python", "PHP", "MySQL", "SQL", "SQLite", "Bootstrap", "Django", "Git", "GitHub"],
  },
  {
    label: "Currently Learning",
    items: ["React", "MERN Stack"],
  },
  {
    label: "Familiar With",
    items: ["C", "C++", "Java"],
  },
];

export const projects = [
  {
    number: "01",
    name: "SuperMart",
    subtitle: "Supermarket Management & Online Shopping",
    description:
      "A Django-based supermarket application that combines product shopping with management workflows for inventory, orders, suppliers, and delivery staff.",
    stack: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    repo: "https://github.com/jithu378/SuperMarket_Management_System_with_Integrated_Online_Shopping",
    image: "/projects/supermart.png",
    accent: "mint",
    features: ["Products, categories, and search", "Cart and checkout flow", "Inventory and supplier workflows"],
  },
  {
    number: "02",
    name: "TravelAura",
    subtitle: "Tourism Management / Travel Website",
    description:
      "A PHP and MySQL tourism website for browsing destinations and travel packages, creating bookings, and managing tourism content through an admin area.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    repo: "https://github.com/jithu378/Tourism-management",
    image: "/projects/travel-aura.png",
    accent: "lavender",
    features: ["Destination and package browsing", "Booking and payment flow", "Admin content management"],
  },
];

export const certifications = [
  {
    number: "01",
    title: "Workshop on Java Full Stack",
    type: "Workshop Participation",
    issuer: "Spectrum Softtech Solutions Pvt. Ltd.",
    date: "04 February 2026",
    certificate: "/certificates/java-full-stack-workshop.pdf",
  },
  {
    number: "02",
    title: "Mastering HTML, CSS, SCSS, SASS, JS, TypeScript, and Python",
    type: "Certificate of Completion",
    issuer: "Udemy · NodDesk Careers",
    date: "27 May 2026 · 39 hours",
    certificate: "/certificates/mastering-web-python.pdf",
  },
];
