module.exports = {
	siteMetadata: {
		title: `Ajit's Dev Blog`,
		description: `Ajit Singh Kamal is a UI/UX engineer based in India. With more than 4 years of experience in working with frontend technologies, he excels in UI development and creating aesthetically pleasing and intutive user experiences for the web.`,
		author: `@AjitsinghKamal`,
		githubLink: `https://github.com/AjitsinghKamal/portfolio-v2`,
		intro: `I am Ajit Singh Kamal, a UI developer based in India. I started working
		in the field of front-end development in the year 2017. Since then, I've
		worked as a freelancer, honed my skills in a fast-paced young startup,
		and improved my understanding of usability and scale, working with some
		established organizations.`,
		work: [
			{
				intro: `Currently working with India's largest higher education startup and
				building an online classroom platform, ensuring education for the
				quarantined world.`,
				from: `2019`,
				name: `UpGrad`,
				image: `upgrad`,
			},
			{
				intro: `Build, optimise and refactor. Worked on multiple products while working
				with this young startup operating in the field of cyber threat intelligence.`,
				from: `2018`,
				to: `2019`,
				name: `Cyware`,
				image: `cyware`,
			},
			{
				intro: `A startup working towards increasing the reach of real-estate marketplace to the public which was later acquired
				by Olx.`,
				from: `2017`,
				to: `2018`,
				name: `HDFC Red`,
				image: `red`,
			},
		],
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-alias-imports`,
			options: {
				aliases: {
					"@components": `src/components/`,
					"@layout": `src/layout/`,
					"@pages": `src/pages/`,
					"@utils": `src/utils/`,
					"@src": `src/`,
				},
			},
		},
		`gatsby-plugin-scss-typescript`,
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
	],
};
