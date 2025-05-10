import { redirect } from "next/navigation";
import { projectsData } from "@/hooks/useProjects";
import BreadCrumb from "@/components/common/Breadcrumb";
import Projects from "@/components/home-one/projects";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";

// Redirect from the base single-portfolio page to the first project
export default function SinglePortfolio() {
	// Get the ID of the first project or use a default if no projects exist
	const firstProjectId = projectsData.length > 0 ? projectsData[0].id : "project-1";
	
	// Redirect to the specific project page
	redirect(`/single-portfolio/${firstProjectId}`);
}
