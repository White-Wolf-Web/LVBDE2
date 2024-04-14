import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./components.module.css";
import MiniFacebook from "../../public/img/mini-facebook.webp";
import MiniInstagram from "../../public/img/mini-instagram.webp";
import MiniYouTube from "../../public/img/mini-youtube.webp";
import MiniPinterest from "../../public/img/mini-pinterest.webp";
import CtaButton from "./CtaButton";
import Adress from "../../public/adress.svg";
import Phone from "../../public/smartphone.svg";
import Mail from "../../public/email.svg";

export default function Footer() {
	return (
		<footer className="mt-4 px-4 flex flex-col sm:flex-row items-center justify-between ">
			<div id="contact" className="">
				<p className="prose prose-neutral dark:prose-invert text-center">
					<strong>CONTACT</strong>
				</p>
				<div className="flex ml-1">
				
					<Image src={Mail} alt="" width={20} height={20} />
					<p className="prose prose-neutral dark:prose-invert">&nbsp; lavoiedubienetre@outlook.com</p>
				</div>
				<div className="flex">
					
					<Image src={Phone} alt="" width={24} height={24} />
					<p className=" text-gray-300 dark:prose-invert">&nbsp; 0477 13 19 93</p>
				</div>
				<div className="flex">
					
					<Image src={Adress} alt="" width={24} height={24} />
					<p className="prose prose-neutral dark:prose-invert">&nbsp; Rue de Chapelle 54, 6183 Courcelles</p>
				</div>
			</div>

			<div className="">
				<p className="prose prose-neutral dark:prose-invert text-center">
					<strong>Massage Shiatsu</strong>
				</p>
				<p className="prose prose-neutral dark:prose-invert text-center">
					<strong>Réflexologie plantaire</strong>
				</p>
				<div className={Styles.socialNetworkIcon}>
					<Link href="https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/">
						<Image src={MiniFacebook} alt="Notre page Facebook" width={40} height={40} />
					</Link>
					<Link href="https://instagram.com">
						<Image src={MiniInstagram} alt="Note page Instagram" width={40} height={40} />
					</Link>
					<Link href="https://instagram.com">
						<Image src={MiniYouTube} alt="Notre chaine Youtube" width={40} height={40} />
					</Link>
					<Link href="https://pinterest.com">
						<Image src={MiniPinterest} alt="Notre tableau Pinterest" width={40} height={40} />
					</Link>
				</div>
				<div className="flex justify-center mt-11">
					<CtaButton />
				</div>
			</div>
		</footer>
	);
}
