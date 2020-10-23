module.exports = {
	siteMetadata: {
		title: `Ajit's Dev Blog`,
		description: `Ajit Singh Kamal is a UI/UX engineer based in India. With more than 4 years of experience in working with frontend technologies, he excels in UI development and creating aesthetically pleasing and intutive user experiences for the web.`,
		author: `@AjitsinghKamal`,
		repoLink: `https://github.com/AjitsinghKamal/portfolio-v2`,
		emailLink: `mailto:ajitskamal@gmail.com`,
		linkedinLink: `https://linkedin.com/in/ajitsinghkamal/`,
		codepenLink: `https://codepen.io/AjitsinghKamal/`,
		stackoverLink: `https://stackoverflow.com/users/6517778/`,
		githubLink: `github.com/AjitsinghKamal/`,
		intro: `A UI / UX developer based in India. 
		I create rich and accessible user experiences for the web with a keep focus on the aesthetics, semantics, and scalability of the product.`,
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
				intro: `Developed the online portfolio for Mr.Sudeep Gandhi, an exceptional calligraphist, and helped him expand his online reach.`,
				from: `2018`,
				to: `2018`,
				name: `Sudeep Gandhi's Portfolio`,
				image: `sg`,
			},
			{
				intro: `A startup working towards increasing the reach of real-estate marketplace to the public which was later acquired
				by Olx. Worked with multiple products using multiple tech, which included Angular and PHP`,
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
		`gatsby-plugin-emotion`,
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
					"@widgets": `src/widgets/`,
					"@assets": `src/assets/`,
					"@src": `src/`,
					"@styles": `src/styles`,
				},
			},
		},
		`gatsby-plugin-scss-typescript`,
		`gatsby-plugin-theme-ui`,
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
