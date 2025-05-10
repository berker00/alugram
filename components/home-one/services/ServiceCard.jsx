import Image from "next/image";
import Link from "next/link";
import ArrowRightImg from "../../../public/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon } }) {
	return (
		<div className="aximo-iconbox-wrap">
			<div className="aximo-iconbox-icon">
				<i className={`${icon}`}></i>
			</div>
			<div className="aximo-iconbox-data">
				<h3>{title}</h3>
				<p dangerouslySetInnerHTML={{ __html: description }}></p>
			</div>
		</div>
	);
}

export default ServiceCard;
