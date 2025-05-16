import Image from "next/image";
import LogoWhiteImg from "../../../public/images/logo/alugramlogo4klight.png";
import AtlasLogo from "../../../public/images/logo/atlasbeyaz.png"; 

function FooterBottom() {
	return (
		<>
			<div className="col-lg-4">
				<div className="aximo-footer-logo">
					<a href="">
						<Image 
							src={LogoWhiteImg} 
							alt="Alugram Logo" 
							width={150} 
							height={40} 
							style={{ objectFit: 'contain' }}
						/>
					</a>
				</div>
			</div>
			
			<div className="col-lg-4">
				<div className="d-flex align-items-center justify-content-center">
					<span className="me-2 text-white">Developed by</span>
					<a href="https://atlasyazilim.org" target="_blank" rel="noopener noreferrer">
						<Image 
							src={AtlasLogo} 
							alt="Atlas Yazılım" 
							width={60} 
							height={17} 
							style={{ objectFit: 'contain' }}
						/>
					</a>
				</div>
			</div>
			
			<div className="col-lg-4">
				<div className="aximo-copywright one text-end">
					<p style={{ fontSize: '13px' }}>&copy; Copyright 2025, All Rights Reserved by Alugram</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
