"use client";
import React from "react";
import Image from "next/image";
import Masseur from "../../public/massage-relaxant-courcelles3.jpg";
import CtaButton from "./CtaButton";

export default function Introduction() {
	return (
		<div>
			<p className="prose prose-neutral dark:prose-invert">
				Au cœur de Courcelles, la voie du bien-être vous invite à découvrir l'art ancestral du massage, une porte ouverte vers l'équilibre et l'harmonie intérieure. Spécialistes en Shiatsu,
				Reiki et réflexologie plantaire, je me suis engagé à vous offrir des soins personnalisés et profondément régénérants pour le corps et l'esprit
			</p>
			<Image src={Masseur} alt="Votre masseur à Courcelles Belgique" className="imgIntroMasseur"></Image>
			<div className="inline-header divIntroduction">
				<h3>Massage</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Imaginez un moment où le monde extérieur s’efface, laissant place à une quiétude absolue. C’est ce que vous promettent nos massages, une expérience unique qui vous transporte loin
					de tout. Ici à Courcelles chaque massage relaxant est une invitation à un voyage intérieur, où l’on peut tout oublier, s’abandonner et profiter d'un réconfort profond d’un massage.
				</p>
				<p className="prose prose-neutral dark:prose-invert">
					{" "}
					Laissez-vous bercer par la promesse d’une relaxation profonde avec notre spécial massage du dos. Ici à la voie du bien-être, ce ne sont pas juste des massages, vous venez vous
					réfugier dans votre sas de décompression, votre bulle de sérénité.
				</p>
			</div>
			<div className="inline-header divIntroduction">
				<h3>Shiatsu</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Une thérapie manuelle japonaise qui, par une stimulation douce des points d'acupuncture à travers le vêtement, ne se contente pas de masser mais libère les blocages énergétiques.
					Ce processus permet de rééquilibrer les flux vitaux, offrant ainsi soulagement et détente musculaire, et invitent à un lâcher-prise profond.
				</p>
			</div>
			<div className="inline-header divIntroduction">
				<h3>Reiki</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Au-delà d'une simple pratique énergétique, le Reiki est un voyage vers le rééquilibrage et la guérison sur tous les plans de l'être. Par une stimulation non invasive, il apaise le
					mental et le corps, favorisant une relaxation profonde et stimulante.
				</p>
			</div>
			<div className="inline-header divIntroduction">
				<h3>Réflexologie Plantaire</h3>
				<p className="prose prose-neutral dark:prose-invert">
					Cette technique ne se limite pas au massage des pieds mais est une voie vers une santé optimale et un bien-être accru. Chaque pression appliquée est un geste d'acupression qui
					soulage les courbatures et libère les tensions.
				</p>
			</div>
            <CtaButton />
		</div>
	);
}
