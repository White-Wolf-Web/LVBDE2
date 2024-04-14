import type { Metadata } from "next";
import Image from "next/image";
import ReikiDistance from "../../public/img/reiki-a-distance.webp"

export const metadata: Metadata = {
	title: "Séance de Reiki à Courcelles| La voie du bien-être",
	description: "Reiki Usui à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
	alternates: {
		canonical: "https://lavoiedubienetre.be/reiki",
	},
	openGraph: {
		title: "Séance de Reiki à Courcelles | La voie du bien-être",
		description: "Reiki Usui à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
		url: "https://lavoiedubienetre.be/reiki"
	},
};
export default function page() {
	return (
		<main>
			 <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl mb-8 tracking-tighter">Explorez le Reiki</h1>
			<section className="container space-y-4 max-w-4xl mx-auto p-4 mb-12">
				<p className="prose prose-neutral dark:prose-invert">
					<strong>Une Porte vers l&apos;Harmonie Intérieure</strong>
				</p>
				<p className="prose prose-neutral dark:prose-invert">
					Au cœur d&apos;un monde en perpétuel mouvement, le Reiki émerge comme un phare de tranquillité, offrant <strong>une voie vers l&apos;équilibre et la sérénité</strong>. Nous sommes
					fiers de présenter le Reiki comme une <strong>pratique énergétique </strong>profonde destinée à tous ceux qui cherchent à enrichir leur parcours de bien-être. Cette technique
					japonaise ancestrale de guérison par l&apos;énergie invite à un voyage intérieur, permettant de rétablir l&apos;harmonie entre le corps, l&apos;esprit et l&apos;âme.{" "}
				</p>
<div>
				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Qu&apos;est-ce que le Reiki ?</h3>
				<Image src={ReikiDistance} alt="Séance de reiki, 2 mains à quelques cm de ditance du ventre" width={400} className="rounded mr-4 mt-4 float-left h-auto" />
				<p className="prose prose-neutral dark:prose-invert">
					Le Reiki, qui signifie &apos;énergie vitale universelle&apos;, est une méthode de guérison douce où le praticien canalise cette <strong>énergie universelle </strong>et la transmet
					par imposition des mains.</p><p className="prose prose-neutral dark:prose-invert"> Cette approche holistique non invasive agit sur tous les plans de l&apos;être, offrant une relaxation profonde, un soulagement du stress et une accélération du
					processus naturel de guérison du corps.</p>  <p className="prose prose-neutral dark:prose-invert"> Ce qui permettra aux énergies d’être équilibrées et régulées, ce qui vous procurera un apaisement durable sur les 3 plans du corps terrestre, physique, mental et de émotionnel.
				</p>
				</div>
				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Les Bienfaits Multidimensionnels du Reiki</h3>
				<p className="prose prose-neutral dark:prose-invert">Pratiquer le Reiki ou recevoir un soin Reiki apporte de nombreux bienfaits, tangibles dès les premières séances :</p>
				<ul>
					<li className="prose prose-neutral dark:prose-invert">
						<strong>Réduction significative du stress et de l&apos;anxiété</strong> :Le Reiki induit un état de <strong>relaxation profonde</strong>, permettant de libérer les tensions
						accumulées et de combattre efficacement le stress.
					</li>
					<li className="prose prose-neutral dark:prose-invert">
						<strong>Amélioration du bien-être émotionnel</strong> : En rééquilibrant les énergies, le Reiki aide à surmonter les blocages émotionnels, favorisant un sentiment de paix et de
						contentement.
					</li>
					<li className="prose prose-neutral dark:prose-invert">
						<strong>Soutien au processus de guérison physique </strong> : Bien qu&apos;il ne remplace pas les traitements médicaux, le Reiki est un complément précieux, aidant à soulager
						la douleur et à accélérer la récupération.
					</li>
					<li className="prose prose-neutral dark:prose-invert">
						<strong>Renforcement de l&apos;énergie vitale</strong> : Les séances de Reiki augmentent votre niveau d&apos;énergie, vous laissant revigoré et prêt à affronter les défis du
						quotidien.
					</li>
				</ul>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Pourquoi Choisir le Reiki ?</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Choisir le Reiki, c&apos;est choisir un chemin de guérison et d&apos;éveil qui respecte votre rythme et vos besoins. Que vous soyez en quête de soulagement physique,
					d&apos;équilibre émotionnel, ou d&apos;une plus grande clarté spirituelle, le Reiki vous offre les outils pour avancer sur votre chemin personnel vers le bien-être. C&apos;est une
					pratique inclusive, ouverte à tous, <strong>sans prérequis ni croyances spécifiques</strong>.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Commencez Votre Voyage de &apos;Guérison&apos; avec le Reiki</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Nous vous invitons à découvrir <strong>le potentiel qui est en vous</strong> et de croissance personnelle que le Reiki peut débloquer. Nous sommes dédiés à vous accompagner dans
					cette exploration avec sensibilité et professionnalisme. Prenez rendez-vous pour une séance de Reiki et commencez votre voyage vers une harmonie profonde et durable.
				</p>

				<p className="prose prose-neutral dark:prose-invert">
					Rejoignez-nous chez la voie du bien-être et laissez le Reiki vous guider vers une vie plus équilibrée, sereine et épanouie. Votre parcours vers le bien-être commence ici, dans un
					espace où chaque soin est une étape vers la découverte de votre potentiel intérieur.
				</p>
			</section>
		</main>
	);
}
