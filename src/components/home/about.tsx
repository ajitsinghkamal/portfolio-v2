import React, { FunctionComponent } from "react";
import IconWave from "@assets/wave.svg";
import Button from "@widgets/button";
import css from "./about.module.scss";

type Props = {
	details: string;
};

const AboutSection: FunctionComponent<Props> = ({ details }) => (
	<section className={css.base}>
		<h3>
			<IconWave className="icon" />
			Hello Everyone!!
		</h3>
		<h1 className={css.title}>AJIT SINGH KAMAL</h1>
		<p>{details}</p>
		<div className={css.contact}>
			<Button cls={css.contactItem}>Mail</Button>
			<Button cls={css.contactItem}>LinkedIn</Button>
		</div>
	</section>
);

export default AboutSection;
