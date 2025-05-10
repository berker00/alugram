import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link 
				className="aximo-default-btn rounded-circle aximo-header-btn d-flex align-items-center justify-content-center" 
				href="https://www.instagram.com/alugramcom" 
				target="_blank" 
				rel="noopener noreferrer"
				style={{ 
					width: "45px", 
					height: "45px", 
					padding: "0",
					background: "#203977",
					border: "none"
				}}
			>
				<i className="icon-instagram" style={{ fontSize: "20px", color: "#ffffff" }}></i>
			</Link>
		</div>
	);
}

export default HeaderButton;
