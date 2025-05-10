import BreadCrumb from "@/components/common/Breadcrumb";
import Projects from "@/components/home-one/projects";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import { useProjectById } from "@/hooks/useProjects";

// This creates a dynamic page for each portfolio item
function SinglePortfolioPage({ params }) {
	const { id } = params;
	const { project } = useProjectById(id); // Fetch project data

	// Handle cases where project data is not yet loaded or not found
	if (!project) {
		return (
			<>
				{/* You might want a loading indicator here or a specific "not found" page */}
				<BreadCrumb title="Loading project..." /> 
				<PortfolioDetails projectId={id} />
				<Projects />
			</>
		);
	}
	
	return (
		<>
			<BreadCrumb title={project.title} />
			<PortfolioDetails projectId={id} />
			<Projects />
		</>
	);
}

export default SinglePortfolioPage; 