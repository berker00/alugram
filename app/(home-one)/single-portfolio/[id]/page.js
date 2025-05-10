import BreadCrumb from "@/components/common/Breadcrumb";
import Projects from "@/components/home-one/projects";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import { useProjectById } from "@/hooks/useProjects";

// This creates a dynamic page for each portfolio item
function SinglePortfolioPage({ params }) {
	const { id } = params;
	
	return (
		<>
			<BreadCrumb title="Portfolio Details" />
			<PortfolioDetails projectId={id} />
			<Projects />
		</>
	);
}

export default SinglePortfolioPage; 