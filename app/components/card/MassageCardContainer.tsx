import React from "react";
import MassageCard from "./MassageCard";
import MassageCarData from "../../data/massageCardData.json";

interface massageCardData {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	imageAlt: string;
}

export default function MassageCardContainer() {
	return (
		<div className="w-full  custom-3d-effect">
			<div className="bg-black text-white p-4 rounded-lg">
				<div className="container max-w-[1000px] mx-auto px-4 my-12">
				<h2 className="text-3xl md:text-4xl leading-snug mb-4">Soins thérapeutiques</h2>
					<div className="flex flex-wrap -mx-4">
						{MassageCarData.map((card: massageCardData) => (
							<MassageCard key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} imageAlt={card.imageAlt} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
