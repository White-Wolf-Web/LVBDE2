import type { Metadata } from "next";
import shiatsuSurFuton from "../../../public/img/shiatsu-sur-futon.jpg";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Shiatsu à Courcelles | La voie du bien-être",
	description: "Shiatsu à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
	alternates: {
		canonical: "https://lavoiedubienetre.be/shiatsu/traditionnel",
	},
	openGraph: {
		title: "Shiatsu à Courcelles | La voie du bien-être",
		description: "Shiatsu à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
		url: "https://lavoiedubienetre.be/shiatsu/traditionnel",
	},
};
export default function page() {
	return (
		<main>
			<h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">Plongez dans l&apos;Univers du Shiatsu</h1>
			<section className="container space-y-4 max-w-4xl mx-auto p-4 mb-12">
				<p className="text-base text-gray-300 font-light leading-relaxed mb-4 text-center">
					<strong>Une Thérapie Holistique pour Harmoniser Corps et Esprit</strong>
				</p>
				<p className="prose prose-neutral dark:prose-invert">
					Le Shiatsu, une forme de thérapie manuelle d&apos;origine japonaise, est reconnu pour sa capacité à rétablir l&apos;équilibre énergétique du corps, à promouvoir la santé et le
					bien-être général. Chez la voie du bien-être, nous vous invitons à découvrir le Shiatsu, une pratique ancestrale qui utilise la pression des doigts et des paumes pour stimuler les
					méridiens du corps, offrant ainsi une expérience de relaxation profonde tout en adressant divers déséquilibres physiques et émotionnels.
				</p>

				<div className="w-full float-none">
					<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">L&apos;Essence du Shiatsu : Plus qu&apos;un Massage, une Voie vers l&apos;Équilibre</h3>
					<div className="float-none">
						<Image src={shiatsuSurFuton} alt="Homme pratiquant le shiatsu sur un futon " width={400} className="rounded mr-4 mt-4 float-left h-auto" />
						<p className="prose prose-neutral dark:prose-invert">
							Le Shiatsu se distingue des autres formes de massage par son approche holistique et sa philosophie fondée sur les principes de la médecine traditionnelle chinoise. Il ne se
							limite pas à traiter les symptômes isolés, mais vise à harmoniser le Qi (énergie vitale) dans l&apos;ensemble du corps, favorisant ainsi la capacité naturelle de guérison
							et le bien-être complet de l&apos;individu.</p><p className="prose prose-neutral dark:prose-invert"> En Orient le shiatsu est considéré telle une médecine préventive, &apos;Se soigner avant d'être malade&apos;.
						</p>
					</div>
				</div>
			

				<div className="w-full">
					<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Découvrez les Bienfaits Multiples du Shiatsu</h3>
					<p className="prose prose-neutral dark:prose-invert">Le Shiatsu offre une palette étendue de bienfaits, tant sur le plan physique qu&apos;émotionnel :</p>
					<ul>
						<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
							<strong>Réduction du stress et de l&apos;anxiété</strong> : En agissant sur le système nerveux, le Shiatsu aide à relâcher les tensions accumulées, induisant un état de
							relaxation profonde.
						</li>
						<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
							<strong>Soulagement des douleurs</strong> : La pratique est efficace pour atténuer divers types de douleurs, notamment celles liées au dos, à la nuque et aux articulations,
							en rétablissant la circulation énergétique.
						</li>
						<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
							<strong>Amélioration du sommeil</strong>: Les séances de Shiatsu peuvent contribuer à combattre l&apos;insomnie et améliorer la qualité du sommeil grâce à leur effet
							apaisant sur l&apos;esprit.
						</li>
						<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
							<strong>Stimulation de la digestion</strong> : En travaillant sur les zones spécifiques liées au système digestif, le Shiatsu favorise un meilleur fonctionnement de
							l&apos;appareil digestif.
						</li>
						<li className="text-base text-gray-300 font-light leading-relaxed mb-4">
							<strong>Renforcement du système immunitaire</strong>: La pratique régulière du Shiatsu peut aider à prévenir les maladies en renforçant les défenses naturelles de
							l&apos;organisme.
						</li>
					</ul>
				</div>
				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Un moment de de vie à soi</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Nous croyons que chaque individu est unique, et ainsi, chaque séance de Shiatsu est adaptée à vos besoins spécifiques. Notre praticien expérimentés prent le temps de vous écouter
					et de comprendre vos attentes pour vous offrir une expérience véritablement sur mesure, qui reflète votre état physique et émotionnel du moment.
				</p>
				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Un Cadre Serein pour une Immersion Totale</h3>
				<p className="prose prose-neutral dark:prose-invert">
					La voie du bien-être offre un espace dédié au Shiatsu, conçu pour vous plonger dans une atmosphère de calme et de sérénité. Notre objectif est de créer un environnement où vous
					pouvez vous détendre pleinement, vous libérer des contraintes du quotidien et vous reconnecter avec vous-même, le tout dans un cadre qui respire la tranquillité et l&apos;harmonie.
				</p>
				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Pourquoi Choisir le Shiatsu ?</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Opter pour le Shiatsu, c&apos;est choisir un chemin vers l&apos;équilibre et la vitalité. Que vous cherchiez à soulager des tensions physiques, à diminuer votre niveau de stress,
					ou simplement à vous accorder un moment de détente profonde, le Shiatsu se présente comme une solution holistique et bénéfique pour tous.
				</p>
				<p className="prose prose-neutral dark:prose-invert">
					Nous vous invitons à prendre rendez-vous pour une séance de Shiatsu et à expérimenter par vous-même les effets revitalisants de cette pratique millénaire. Laissez-nous vous
					accompagner dans votre voyage vers un bien-être intégral, où chaque pression exercée ouvre la voie à un équilibre retrouvé entre votre corps et votre esprit.
				</p>
			</section>
		</main>
	);
}
