"use client";
import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="aximo-counter-wrap">
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={5} duration={3} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Yıllık deneyim</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={10} duration={3} redraw={true} enableScrollSpy />
					</span>
					k
				</h2>
				<p>Başarılı projeler</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
					</span>
					%
				</h2>
				<p>Müşteri memnuniyet oranı</p>
			</div>
		</div>
	);
}

export default AboutCounter;
