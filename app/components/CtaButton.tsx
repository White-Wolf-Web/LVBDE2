import React from "react";
import Link from "next/link";

export default function CtaButton() {
	return (
		<Link href="https://widget.treatwell.be/fr/salon/377730/menu/">
		<button type="button" className="bg-cyan-700 text-white font-bold py-2 px-4 rounded hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl active:shadow-inner active:bg-cyan-700 active:translate-y-px" aria-label="En savoir plus sur nos services de massage">
  Réservez Maintenant 😊
</button></Link>

	);
}
