import Image from "next/image";
import { safeRandomUUID } from "@/utils/generateId";

function TestimonialCard({ testimonial: { rating, title, description, author, designation, img } }) {
	return (
		<div className="aximo-testimonial-wrap">
			<div className="aximo-testimonial-rating">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={safeRandomUUID()}>
							<i className="icon-star"></i>
						</li>
					))}
				</ul>
			</div>
			<div className="aximo-testimonial-data">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>

		</div>
	);
}

export default TestimonialCard;
