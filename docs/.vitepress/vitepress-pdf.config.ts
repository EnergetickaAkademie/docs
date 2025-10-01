// vitepress-pdf.config.ts

import { defineUserConfig } from 'vitepress-export-pdf'

const routeOrder = [
	'/index.html',
	'/enak/index.html',
	//'/3d/index.html',
	'/3d/elektrarny/index.html',
	'/3d/budovy/index.html',
	'/3d/krajina/index.html',
	'/github/index.html',
	'/scenarios/index.html',
];

export default defineUserConfig({
	sorter: (pageA, pageB) => {
		console.log('Page A Path:', pageA.path);
		console.log('Page B Path:', pageB.path);

		const aIndex = routeOrder.findIndex(route => route === pageA.path)
		const bIndex = routeOrder.findIndex(route => route === pageB.path)
		
		if (aIndex === -1 || bIndex === -1) {
			return 0; 
		}
		
		return aIndex - bIndex
	},
})