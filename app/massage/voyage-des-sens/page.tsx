import type { Metadata } from "next";
//import { MetadataVoyageDesSens } from "@/components/metadata/MetadataVoyageDesSens";

export const metadata: Metadata = {
	title: "Massage doux voyage des sens à Courcelles | Bien-être",
	description: "Massage doux à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant",
	alternates: {
		canonical: "https://lavoiedubienetre.be/massage/voyage-des-sens",
	},
	openGraph: {
		title: "Massage des fascias à Courcelles | La voie du bien-être",
		description: "Massage doux des fascias à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
		url: "https://lavoiedubienetre.be/massage/voyage-des-sens"
	},
};
export default function page() {
	return (
		<main>
			<h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">Le Massage &apos;Voyage des Sens&apos;</h1>
			<section className="container space-y-4 max-w-4xl mx-auto p-4 mb-12">
				<p className="text-base text-gray-800 font-light leading-relaxed mb-4 text-center">
					<strong>Un Massage qui Éveille et Apaise</strong>
				</p>
				<p className="prose prose-neutral dark:prose-invert">
					Dans la quête incessante du bien-être et de l&apos;équilibre intérieur, le massage Voyage des Sens se distingue comme une expérience unique, offerte par La voie du bien-être,
					destinée à ceux qui aspirent à une détente profonde et à <strong>une évasion sensorielle </strong>
					sans pareille. Sur une durée de deux heures, ce massage exceptionnel invite à un périple où chaque toucher délicat est une escale vers la sérénité.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">L&apos;Essence du &apos;Voyage des Sens&apos;</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Ce massage est une ode à la douceur, une <strong>célébration du lâcher-prise</strong>. Par des techniques spécifiquement conçues pour <strong>agir sur les fascias</strong>, ce
					massage offre une décontraction musculaire profonde, favorisant une détente intégrale du corps et de l&apos;esprit. Les fascias, ces tissus conjonctifs qui enveloppent et
					soutiennent les muscles, sont le secret d&apos;une relaxation profonde et durable. En les mobilisant avec délicatesse, ce soin holistique permet de libérer les blocages, de
					fluidifier la circulation énergétique et de restaurer un état de bien-être global.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Une Symphonie de Bienfaits</h3>
				<p className="prose prose-neutral dark:prose-invert">Ce massage transcende le concept traditionnel du massage par ses bienfaits multiples :</p>
				<ul>
					<li className="text-base text-gray-800 font-light leading-relaxed mb-4">
						<strong>Détente musculaire et décontraction fasciale</strong>: Par des manipulations douces et précises, ce massage libère les tensions accumulées, offrant un{" "}
						<strong>soulagement profond des muscles et des fascias</strong>.
					</li>
					<li className="text-base text-gray-800 font-light leading-relaxed mb-4">
						<strong>Harmonisation corps-esprit</strong> : Dans ce voyage, le mental est invité à se délester de ses préoccupations, guidant vers une paix intérieure et une clarté
						d&apos;esprit renouvelée.
					</li>
					<li className="text-base text-gray-800 font-light leading-relaxed mb-4">
						<strong>Stimulation de la circulation</strong>: La technique utilisée encourage une meilleure circulation sanguine et lymphatique, contribuant à une sensation de légèreté et de
						vitalité.
					</li>
					<li className="text-base text-gray-800 font-light leading-relaxed mb-4">
						<strong>Réduction du stress et de l&apos;anxiété </strong>En agissant sur le système nerveux, ce massage doux aide à diminuer significativement le niveau de stress, invitant à
						un état de relaxation profonde.
					</li>
				</ul>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Une Expérience Sensorielle Sur Mesure</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Chez La voie du bien-être, nous comprenons que chaque individu est unique, avec ses propres besoins et aspirations. C&apos;est pourquoi le &apos;Voyage des Sens&apos; est
					entièrement personnalisable. Notre thérapeute expert, à l&apos;écoute de vos désirs, adaptent les huiles essentielles utilisées, l&apos;intensité du toucher et le rythme du
					massage, pour que votre expérience soit en parfaite harmonie avec vos attentes.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Invitation au Voyage</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Ce soin n&apos;est pas seulement un massage; c&apos;est une promesse de renouveau, une parenthèse enchantée dans le tumulte du quotidien. Que vous cherchiez à vous offrir un moment
					de détente absolue, à soulager des tensions profondes, ou simplement à vous accorder une pause de pure évasion, ce massage est une destination en soi.
				</p>

				<p className="prose prose-neutral dark:prose-invert">
					Nous vous invitons à prendre rendez-vous pour votre &apos;Voyage des Sens&apos;. Préparez-vous à être transporté dans un monde où le temps s&apos;arrête, où chaque sensation est
					une découverte, et chaque instant un pas de plus vers <strong>un bien-être profond</strong>. Pendant ce moment, embarquez pour une odyssée de douceur et de relaxation, et laissez
					votre corps et <strong>votre esprit se régénérer sous le soin attentif</strong> de notre expert.
				</p>
			</section>
			{/*<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataVoyageDesSens) }} />*/}
		</main>
	);
}
