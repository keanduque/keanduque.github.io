import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    "id": "vm",
    "title": "VM Civils Web Application",
    "company": "Entegro",
    "category": "GIS & Enterprise",
    "status": "Production",
    "description": "A web application for Virgin Media Ireland that helps operational teams manage civil works and telecommunications infrastructure.",
    "features": [
      "Civil works and contractor filtering",
      "Licence reporting and SVAR Gantt scheduling",
      "Cost tracking and route analysis",
      "Single Line Diagrams and network dependencies",
      "Data tables and CSV exports"
    ],
    "technologies": [
      "React",
      "Vite",
      "ArcGIS REST API",
      "ArcGIS Online",
      "TanStack Query",
      "TanStack Table",
      "Leaflet",
      "React Router",
      "Styled Components"
    ],
    "image": "vm-app.png",
    "website": "https://vm-civils.entegro.net/",
    "github": "https://github.com/Entegro-GIS/entegro-vm-app",
    "githubLabel": "Restricted repository"
  },
  {
    "id": "utilities",
    "title": "Entegro Utilities Portal",
    "company": "Entegro",
    "category": "GIS & Enterprise",
    "status": "Production",
    "description": "A mapping portal for gas, water and electricity infrastructure, with tools for searching networks and generating reports.",
    "features": [
      "ArcGIS sign-in",
      "Network search and route planning",
      "Template-based PDF reports for ESB and GNI"
    ],
    "technologies": [
      "React",
      "Vite",
      "ArcGIS Online",
      "React-Leaflet",
      "TanStack Query",
      "Node.js",
      "Express"
    ],
    "image": "utilities-portal.png",
    "website": "https://utilities-portal.entegro.net/",
    "github": "https://github.com/Entegro-GIS/entegro-utilities-portal",
    "githubLabel": "Restricted repository"
  },
  {
    "id": "mdu",
    "title": "MDU Historical Revisions Viewer",
    "company": "Entegro",
    "category": "GIS & Enterprise",
    "status": "In development",
    "description": "A map viewer for exploring historical telecommunications network revisions.",
    "features": [
      "MDU and revision selection",
      "Layer visibility and boundary positioning",
      "Feature inspection and query caching",
      "Revision metadata API under development"
    ],
    "technologies": [
      "React",
      "Vite",
      "React-Leaflet",
      "GeoServer",
      "WMS/WFS",
      "TanStack Query",
      "PostgreSQL",
      "PostGIS"
    ],
    "image": "eir-historical-rev.png"
  },
  {
    "id": "geo",
    "title": "GeoProject System",
    "company": "Personal project",
    "category": "Personal Projects",
    "status": "Live",
    "description": "A full-stack geospatial project built with React and a Node.js backend.",
    "features": [
      "React frontend",
      "Node.js and Express backend"
    ],
    "technologies": [
      "React",
      "Vite",
      "Node.js",
      "Express"
    ],
    "image": "geoproject.png",
    "website": "https://geoproject-system.netlify.app/",
    "github": "https://github.com/Mind-Org/geoproject-system"
  },
  {
    "id": "terra",
    "title": "Terravio Geospatial",
    "company": "Personal project",
    "category": "Personal Projects",
    "status": "Live",
    "description": "A full-stack geospatial project built with React and a Node.js backend.",
    "features": [
      "React frontend",
      "Node.js and Express backend"
    ],
    "technologies": [
      "React",
      "Vite",
      "Node.js",
      "Express"
    ],
    "image": "terravio.png",
    "website": "https://terravio-frontend.onrender.com/",
    "github": "https://github.com/Mind-Org/terravio-app/"
  },
  {
    "id": "usc",
    "title": "USC Bookstore",
    "company": "Oracle NetSuite",
    "category": "E-commerce & ERP",
    "status": "Delivered",
    "description": "Contributed to the SuiteCommerce storefront for USC Bookstore, working on client-specific e-commerce requirements.",
    "features": [
      "Storefront development",
      "Frontend customisation",
      "SuiteScript development"
    ],
    "technologies": [
      "JavaScript",
      "Backbone.js",
      "SuiteCommerce Advanced",
      "SuiteScript"
    ],
    "image": "uscbookstore.png",
    "website": "https://www.uscbookstore.com/",
    "github": "https://github.com/keanduque/kean_SS2",
    "githubLabel": "SuiteScript samples"
  },
  {
    "id": "dc",
    "title": "DC Dental",
    "company": "Oracle NetSuite",
    "category": "E-commerce & ERP",
    "status": "Delivered",
    "description": "Contributed to the SuiteCommerce storefront for DC Dental, working on client-specific e-commerce requirements.",
    "features": [
      "Storefront development",
      "Frontend customisation",
      "SuiteScript development"
    ],
    "technologies": [
      "JavaScript",
      "Backbone.js",
      "SuiteCommerce Advanced",
      "SuiteScript"
    ],
    "image": "dcdental.png",
    "website": "https://www.dcdental.com/",
    "github": "https://github.com/keanduque/kean_SS2",
    "githubLabel": "SuiteScript samples"
  },
  {
    "id": "sun",
    "title": "Sundance",
    "company": "Oracle NetSuite",
    "category": "E-commerce & ERP",
    "status": "Delivered",
    "description": "Contributed to the SuiteCommerce storefront for Sundance, working on client-specific e-commerce requirements.",
    "features": [
      "Storefront development",
      "Frontend customisation",
      "SuiteScript development"
    ],
    "technologies": [
      "JavaScript",
      "Backbone.js",
      "SuiteCommerce Advanced",
      "SuiteScript"
    ],
    "image": "sundance.png",
    "website": "https://store.sundance.org/",
    "github": "https://github.com/keanduque/kean_SS2",
    "githubLabel": "SuiteScript samples"
  },
  {
    "id": "zel",
    "title": "Zeliatech",
    "company": "Neticon",
    "category": "WordPress & CMS",
    "status": "Delivered",
    "description": "Worked on frontend changes and content-managed website development for Zeliatech.",
    "features": [
      "Responsive frontend updates",
      "WordPress customisation and content management"
    ],
    "technologies": [
      "WordPress",
      "PHP",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "image": "zeliatech.png",
    "website": "https://www.zeliatech.eu/en/"
  },
  {
    "id": "egro",
    "title": "Egro Coffee",
    "company": "Neticon",
    "category": "WordPress & CMS",
    "status": "Delivered",
    "description": "Worked on frontend changes and content-managed website development for Egro Coffee.",
    "features": [
      "Responsive frontend updates",
      "WordPress customisation and content management"
    ],
    "technologies": [
      "WordPress",
      "PHP",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "image": "egrocoffe.png",
    "website": "https://egrocoffee.com/en/"
  },
  {
    "id": "esp",
    "title": "Esprinet",
    "company": "Neticon",
    "category": "WordPress & CMS",
    "status": "Delivered",
    "description": "Worked on frontend changes and content-managed website development for Esprinet.",
    "features": [
      "Responsive frontend updates",
      "WordPress customisation and content management"
    ],
    "technologies": [
      "WordPress",
      "PHP",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "image": "esprinet.png",
    "website": "https://www.esprinet.com/it/"
  },
  {
    "id": "kai",
    "title": "Kairos Partners",
    "company": "Neticon",
    "category": "WordPress & CMS",
    "status": "Delivered",
    "description": "Worked on frontend changes and content-managed website development for Kairos Partners.",
    "features": [
      "Responsive frontend updates",
      "WordPress customisation and content management"
    ],
    "technologies": [
      "WordPress",
      "PHP",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "image": "kairos.png",
    "website": "https://www.kairospartners.com/"
  }
];
