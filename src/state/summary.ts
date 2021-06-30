import { readable } from 'svelte/store';

interface Work {
	type: 'fullTime' | 'pen' | 'gif';
	name: string;
	tech: string[];
	link?: string;
	imageUrl?: string;
	description?: string;
	duration?: {
		from: string;
		to?: string;
	};
}

interface Social {
	url: string;
	label: string;
}

export interface State {
	works: Work[];
	social: Record<string, Social>;
}

const state: State = {
	social: {
		repo: {
			url: `https://github.com/AjitsinghKamal/portfolio-v2`,
			label: `Repo`
		},
		linkedin: {
			url: `https://linkedin.com/in/ajitsinghkamal/`,
			label: `LinkedIn`
		},
		mail: {
			url: `mailto:ajitskamal@gmail.com`,
			label: `Email`
		},
		git: {
			url: `https://github.com/AjitsinghKamal/`,
			label: `Github`
		},
		codepen: {
			url: `https://codepen.io/AjitsinghKamal/`,
			label: `Codepen`
		},
		stackoverflow: {
			url: `https://stackoverflow.com/users/6517778/`,
			label: `Stackoverflow`
		}
	},
	works: [
		{
			duration: {
				from: `2019`
			},
			name: `UpGrad`,
			tech: ['JS', 'React', 'Vue', 'Backbone'],
			link: `https://upgrad.com/enterprise`,
			type: 'fullTime'
		},
		{
			imageUrl: `https://res.cloudinary.com/dwpjvs0lj/image/upload/v1616596555/afzqmy.gif`,
			description: `Three Codepen`,
			name: `threejs-codepen`,
			tech: ['ThreeJS'],
			link: `https://codepen.io/AjitsinghKamal/full/VrLYLG`,
			type: `gif`
		},
		{
			duration: {
				from: `2018`,
				to: `2019`
			},
			name: `Cyware`,
			tech: ['TS', 'Vue', 'Nuxt', 'Angular'],
			link: `https://cyware.com`,
			type: `fullTime`
		},
		{
			name: `ww-codepen`,
			tech: ['CSS'],
			link: `https://codepen.io/AjitsinghKamal/full/EXoaNJ`,
			type: `pen`
		},
		{
			duration: {
				from: `2018`,
				to: `2018`
			},
			name: `SudeepGandhi.com`,
			tech: ['JS', 'HTML', 'CSS', 'Firebase'],
			link: `https://sudeepgandhi.com`,
			type: `fullTime`
		},
		{
			duration: {
				from: `2017`,
				to: `2018`
			},
			name: `HDFC Red`,
			tech: ['TS', 'Angular2'],
			type: `fullTime`
		}
	]
};
export const summaryStore = readable(state, () => {
	return () => null;
});
