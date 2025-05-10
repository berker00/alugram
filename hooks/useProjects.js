import Project1Img from "../public/images/v1/project1.png";
import Project2Img from "../public/images/v1/project2.png";
import Project3Img from "../public/images/v1/project3.png";
import Project4Img from "../public/images/v1/project4.png";
import Project5Img from "../public/images/v1/project5.png";
import Project6Img from "../public/images/v1/project6.png";
import { safeRandomUUID } from "@/utils/generateId";

// This is example data - you can replace it with your own data
export const projectsData = [
  {
    id: "project-1",
    title: "Graphic Design",
    description: "",
    img: Project6Img,
    content: {
      fullDescription: "Our graphic design services provide innovative visual solutions tailored to your brand's specific needs. We focus on creating impactful designs that communicate your message effectively.",
      steps: [
        {
          title: "Concept Development",
          text: "We begin by understanding your brand vision and developing conceptual designs that align with your goals.",
        },
        {
          title: "Creative Execution",
          text: "Our designers craft each element with precision, ensuring every detail contributes to the overall message.",
        },
        {
          title: "Refinement and Delivery",
          text: "We refine based on feedback until the design perfectly represents your brand's voice and values.",
        },
      ]
    }
  },
  {
    id: "project-2",
    title: "Video Production",
    description: "",
    img: Project2Img,
    content: {
      fullDescription: "Our video production team creates compelling visual stories that engage viewers and deliver your message with impact. From concept to final edit, we handle every aspect of the production process.",
      steps: [
        {
          title: "Story Development",
          text: "We develop a narrative that resonates with your audience and effectively communicates your message.",
        },
        {
          title: "Professional Production",
          text: "Using state-of-the-art equipment, we capture high-quality footage that brings your story to life.",
        },
        {
          title: "Post-Production Excellence",
          text: "Our editing team creates a polished final product that exceeds expectations and achieves your goals.",
        },
      ]
    }
  },
  {
    id: "project-3",
    title: "WEB Site Design",
    description: "",
    img: Project1Img,
    content: {
      fullDescription: "We create beautiful, functional websites that provide exceptional user experiences across all devices. Our web design combines aesthetics with performance to help your business succeed online.",
      steps: [
        {
          title: "UX Research & Planning",
          text: "We analyze user needs and behavior to create websites that deliver intuitive, satisfying experiences.",
        },
        {
          title: "Responsive Design",
          text: "Our designs adapt seamlessly to all screen sizes, ensuring consistent experiences across all devices.",
        },
        {
          title: "Performance Optimization",
          text: "We build fast-loading, efficient websites that keep users engaged and improve conversion rates.",
        },
      ]
    }
  },
  {
    id: "project-4",
    title: "Custom Design",
    description: "",
    img: Project5Img,
    content: {
      fullDescription: "Our custom design services address your specific challenges with unique, innovative solutions. We work closely with you to create designs that perfectly match your vision and requirements.",
      steps: [
        {
          title: "Requirement Analysis",
          text: "We thoroughly understand your specific needs before starting the design process.",
        },
        {
          title: "Custom Solution Development",
          text: "Our team creates bespoke designs tailored specifically to your unique requirements.",
        },
        {
          title: "Implementation & Support",
          text: "We not only deliver your custom design but provide ongoing support to ensure long-term success.",
        },
      ]
    }
  },
  {
    id: "project-5",
    title: "Brand Coordination",
    description: "",
    img: Project3Img,
    content: {
      fullDescription: "We ensure your brand communicates consistently across all platforms and touchpoints. Our brand coordination services help establish and maintain a strong, recognizable brand identity.",
      steps: [
        {
          title: "Brand Audit",
          text: "We analyze your current brand elements and identify opportunities for improved consistency.",
        },
        {
          title: "Strategy Development",
          text: "Our team creates a comprehensive plan for coordinating your brand across all channels.",
        },
        {
          title: "Implementation Guidelines",
          text: "We provide clear guidelines to ensure consistent application of your brand elements.",
        },
      ]
    }
  },
  {
    id: "project-6",
    title: "Product Design",
    description: "",
    img: Project4Img,
    content: {
      fullDescription: "Our product design services focus on creating items that are both beautiful and functional. We combine aesthetics with usability to develop products that delight users and meet business objectives.",
      steps: [
        {
          title: "User-Centered Research",
          text: "We begin by understanding the end-users and their needs to inform our design decisions.",
        },
        {
          title: "Prototyping & Testing",
          text: "We develop and test prototypes to refine the design and ensure it meets all requirements.",
        },
        {
          title: "Final Design & Specifications",
          text: "Our team delivers detailed specifications for manufacturing or implementation.",
        },
      ]
    }
  },
];

export function useProjects() {
  return { projects: projectsData };
}

export function useProjectById(id) {
  const project = projectsData.find(p => p.id === id);
  return { project };
} 