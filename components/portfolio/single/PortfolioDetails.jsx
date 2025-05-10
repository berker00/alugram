"use client";
import FadeInRight from "@/components/animation/FadeInRight";
import FadeInUp from "@/components/animation/FadeInUp";
import { useProjectById } from "@/hooks/useProjects";
import Image from "next/image";
import Single1Img from "../../../public/images/portfolio/p_single1.png";
import Single2Img from "../../../public/images/portfolio/p_single2.png";
import Star2Img from "../../../public/images/v1/star2.png";

function PortfolioDetails({ projectId }) {
	const { project } = useProjectById(projectId);
	
	// Fallback for when a project isn't found
	if (!project) {
		return (
			<div className="aximo-project-single-section">
				<div className="container">
					<div className="aximo-default-content">
						<h2>Project not found</h2>
						<p>The requested project could not be found.</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="aximo-project-single-section">
			<div className="container">
				<FadeInUp className="aximo-project-single-thumb">
					<Image src={project.bigimg} alt={project.title} />
				</FadeInUp>

				<div className="aximo-project-single-wrap">
					<div className="row">
						<div className="col-lg-4 order-lg-2">
							<FadeInRight className="aximo-project-single-thumb2 ">
								<Image src={Single2Img} alt="Single 2" sizes="100vw" />
							</FadeInRight>
						</div>
						<div className="col-lg-8">
							<div className="aximo-default-content m-right-gap">
								<h2>
									{project.title}
									<span className="aximo-title-animation">
										
										<span className="aximo-title-icon">
											<Image src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
									{project.content.fullDescription}
								</p>
								<div className="aximo-resolve-project-wrap">
									{project.content.steps.map((item, index) => (
										<div key={index} className="aximo-resolve-project-item">
											<h3>
												{index + 1}. {item.title}:
											</h3>
											<p>{item.text}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
