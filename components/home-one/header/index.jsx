"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
/* eslint-disable for-direction */
import Dropdown from "@/components/common/navigation/desktop-nav/Dropdown";
import DropdownItem from "@/components/common/navigation/desktop-nav/DropdownItem";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import { useEffect } from "react";

function Header() {
	// Sayfa içi yumuşak kaydırma fonksiyonu
	useEffect(() => {
		// Link tıklamalarını dinle
		const handleScrollToElement = (e) => {
			// Sadece # ile başlayan linkleri ele al
			const href = e.currentTarget.getAttribute('href');
			if (href && href.startsWith('#')) {
				e.preventDefault();
				
				// Hedef elementin ID'sini al
				const targetId = href.replace('#', '');
				const targetElement = document.getElementById(targetId);
				
				if (targetElement) {
					// Yumuşak kaydırma ile hedefe git
					window.scrollTo({
						top: targetElement.offsetTop - 100, // Header yüksekliği için ofset
						behavior: 'smooth'
					});
				}
			}
		};
		
		// Tüm sayfa içi linkleri seç ve tıklama olayını ekle
		const inPageLinks = document.querySelectorAll('a[href^="#"]');
		inPageLinks.forEach(link => {
			link.addEventListener('click', handleScrollToElement);
		});
		
		// Temizlik fonksiyonu
		return () => {
			inPageLinks.forEach(link => {
				link.removeEventListener('click', handleScrollToElement);
			});
		};
	}, []);

	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="#">Ana Sayfa</NavItem>
							<NavItem url="#services">Hizmetler</NavItem>
							<NavItem url="#projects">Portfolyo</NavItem>
							<NavItem url="contact-us">İletişim</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="Alugram" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
