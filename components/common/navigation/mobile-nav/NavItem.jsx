/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";

const NavItem = ({ items, depthLevel, showMenu, setShowMenu }) => {
	const [dropdown, setDropdown] = useState(false);

	const closeDropdown = () => {
		dropdown && setDropdown(false);
		showMenu && setShowMenu(false);
	};

	const toggleDropdown = (e) => {
		e.stopPropagation();
		setDropdown((prev) => !prev);
	};

	// Sayfa içi navigasyon için scroll fonksiyonu
	const handleInPageNavigation = (e) => {
		if (items.url.startsWith('#')) {
			e.preventDefault();
			const targetId = items.url.replace('#', '');
			const targetElement = document.getElementById(targetId);
			
			if (targetElement) {
				// Önce menüyü kapat, sonra hedefe kaydır
				closeDropdown();
				
				// Biraz gecikme ekleyerek menünün kapanmasını bekle
				setTimeout(() => {
					window.scrollTo({
						top: targetElement.offsetTop - 100,
						behavior: 'smooth'
					});
				}, 300);
			}
		} else {
			// Normal link tıklaması - menüyü kapat
			closeDropdown();
		}
	};

	const animationVariants = {
		initial: {
			rotate: 0,
		},
		animate: () => {
			if (dropdown) {
				return {
					rotate: -180,
					transition: {
						duration: 0.25,
					},
				};
			}
		},
	};

	return items.submenu ? (
		<li className="nav-item nav-item-has-children" onClick={closeDropdown}>
			<button type="button" aria-expanded={dropdown ? "true" : "false"} onClick={(e) => toggleDropdown(e)}>
				{items.title}

				<motion.i
					variants={animationVariants}
					initial="initial"
					animate="animate"
					className="fas fa-angle-down"
				></motion.i>
			</button>
			{dropdown && <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />}
		</li>
	) : (
		<li className="nav-item">
			<Link href={items.url} onClick={handleInPageNavigation}>
				{items.title}
			</Link>
		</li>
	);
};

export default NavItem;
