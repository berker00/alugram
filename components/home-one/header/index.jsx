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

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
						<NavItem url="#">Ana Sayfa</NavItem>
						<NavItem url="contact-us">Hizmetler</NavItem>
						<NavItem url="contact-us">Portfolyo</NavItem>
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
