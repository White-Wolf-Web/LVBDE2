import React from "react";
import Banniere from "./Banniere";
import { Navbar } from "./nav";

export default function Header() {
	return (
		<header>
			<Banniere />
			<Navbar />
		</header>
	);
}
