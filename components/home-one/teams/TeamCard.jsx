import Image from "next/image";
import Link from "next/link";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="aximo-team-wrap">
			<div className="aximo-team-thumb">
				<Image src={img} alt={name} sizes="100vw" />

			</div>
			<div className="aximo-team-data">
				<Link href="/single-team">
					<h3>{name}</h3>
				</Link>
				<p>{designation}</p>
			</div>
		</div>
	);
}

export default TeamCard;
