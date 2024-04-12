import React from "react";
import styles from "./components.module.css";

export default function GloogleMap() {
	return (

        
		<section className={styles.googleMapContainer}>
            
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.7794708265674!2d4.322296566029993!3d50.46383115554205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c23185a0470331%3A0xdb0fae66d0976815!2sMassage%20relaxant%20Courcelles!5e0!3m2!1sfr!2sbe!4v1712813864963!5m2!1sfr!2sbe"
				width="1000"
				height="600"
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade" 
				title="Localisation de la voie du bien-être à Courcelles"></iframe>
		</section>
        
    	);
}
