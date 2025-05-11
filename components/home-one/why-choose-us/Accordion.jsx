"use client";

import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import { useEffect, useState } from "react";

function Accordion() {
	const [initialized, setInitialized] = useState(false);

	// Sayfa yüklendiğinde bootstrap'i ve stilleri düzgün yapılandır
	useEffect(() => {
		// Bootstrap'in yüklenmesi ve DOM'un hazır olması için kısa bir süre bekle
		const timeoutId = setTimeout(() => {
			if (typeof window !== 'undefined') {
				// Tüm accordion öğelerinin stillerini düzenle
				const accordionItems = document.querySelectorAll("#aximo-accordion .accordion-item");
				
				// Kapalı accordion öğeleri için arka plan rengini ayarla
				accordionItems.forEach(item => {
					if (!item.querySelector('.accordion-collapse.show')) {
						item.style.backgroundColor = '#FFFFFF';
						item.style.boxShadow = 'none';
					}
				});
				
				// Bootstrap olaylarını dinle ve stilleri düzenle
				const accordionElements = document.querySelectorAll('#aximo-accordion .accordion-collapse');
				accordionElements.forEach(element => {
					element.addEventListener('show.bs.collapse', function () {
						const parentItem = this.closest('.accordion-item');
						if (parentItem) {
							// Açılırken yumuşak geçiş sağla
							parentItem.style.transition = 'all 0.3s ease';
							parentItem.style.backgroundColor = 'var(--accent-bg)';
							parentItem.style.boxShadow = '3px 3px 0 0 var(--dark-bg)';
							
							// Metin rengini de yumuşak geçişle değiştir
							const accordionButton = parentItem.querySelector('.accordion-button');
							if (accordionButton) {
								accordionButton.style.transition = 'color 0.3s ease';
								accordionButton.style.color = 'white';
							}
							
							const accordionBody = parentItem.querySelector('.accordion-body');
							if (accordionBody) {
								accordionBody.style.transition = 'color 0.3s ease';
								accordionBody.style.color = 'white';
							}
						}
					});
					
					element.addEventListener('hide.bs.collapse', function () {
						const parentItem = this.closest('.accordion-item');
						if (parentItem) {
							// Kapanırken yumuşak geçiş sağla
							parentItem.style.transition = 'all 0.3s ease';
							parentItem.style.backgroundColor = '#FFFFFF';
							parentItem.style.boxShadow = 'none';
							
							// Metin rengini de yumuşak geçişle değiştir
							const accordionButton = parentItem.querySelector('.accordion-button');
							if (accordionButton) {
								accordionButton.style.transition = 'color 0.3s ease';
								accordionButton.style.color = 'var(--heading-color)';
							}
							
							const accordionBody = parentItem.querySelector('.accordion-body');
							if (accordionBody) {
								accordionBody.style.transition = 'color 0.3s ease';
								accordionBody.style.color = 'var(--body-color)';
							}
						}
					});
				});
				
				setInitialized(true);
			}
		}, 200); // Biraz daha uzun süre bekleyerek DOM'un hazır olduğundan emin oluyoruz
		
		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<FadeInStaggerTwo className="accordion aximo-accordion-wrap" id="aximo-accordion">
			<style jsx global>{`
				/* Global stil ayarlamaları */
				.accordion-item {
					transition: all 0.3s ease !important;
					background-color: #FFFFFF !important;
					border: 2px solid var(--dark-bg) !important;
				}
				
				.accordion-item:has(.accordion-collapse.show) {
					background-color: var(--accent-bg) !important;
					box-shadow: 3px 3px 0 0 var(--dark-bg) !important;
					transition: all 0.3s ease !important;
				}
				
				.accordion-button {
					background: none !important;
					transition: color 0.3s ease !important;
				}
				
				.accordion-button:not(.collapsed) {
					color: white !important;
					transition: color 0.3s ease !important;
				}
				
				.accordion-collapse.show .accordion-body {
					color: white !important;
					transition: color 0.3s ease !important;
				}
			`}</style>
			
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
					>
						01/ Fikir aşaması
					</button>
				</h3>
				<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						Her şey bir fikirle başlar. Vizyonunuzu dinliyor, hedeflerinizi anlıyor ve yaratıcı bir plan oluşturuyoruz.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header" id="headingOne">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
					>
						02/ Tasarım ve Geliştirme
					</button>
				</h3>
				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						Uzman ekibimiz, markanıza özel tasarımlar yaratır. Tüm süreci herdetayıyla titizlikle geliştiriyoruz.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
					>
						03/ Uygulama ve Teslim
					</button>
				</h3>
				<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
						Tasarımı hayat geçiriyor, projenizi eksiksiz teslim ediyoruz. Süreci takip ederek hatasız sonuçlar sunuyoruz. 
					</div>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default Accordion;
