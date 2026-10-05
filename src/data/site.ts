// Company details used across the site.
// TODO: replace the placeholder contact details with the real ones.
export const site = {
	name: 'Edge Global Trade',
	description:
		'Edge Global Trade helps businesses source, ship, and sell goods across international markets.',
	email: 'hello@example.com',
	phone: '+00 000 000 0000',
	address: 'Office address goes here',
	hours: 'Monday – Friday, 9:00 – 18:00',
};

export const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/contact', label: 'Contact' },
];

export type IconName = 'globe' | 'ship' | 'shield' | 'box' | 'search' | 'chart';

export const services: {
	slug: string;
	icon: IconName;
	title: string;
	summary: string;
	points: string[];
}[] = [
	{
		slug: 'import-export',
		icon: 'globe',
		title: 'Import & Export',
		summary: 'End-to-end management of goods moving in and out of international markets.',
		points: [
			'Trade planning for new markets',
			'Supplier and buyer coordination',
			'Order tracking from origin to destination',
		],
	},
	{
		slug: 'sourcing',
		icon: 'search',
		title: 'Product Sourcing',
		summary: 'Finding reliable suppliers that meet your quality, price, and volume needs.',
		points: [
			'Supplier research and vetting',
			'Sample and quality checks',
			'Price and terms negotiation',
		],
	},
	{
		slug: 'freight',
		icon: 'ship',
		title: 'Freight & Logistics',
		summary: 'Sea, air, and land freight coordinated through trusted carrier partners.',
		points: [
			'Full and part container loads',
			'Air freight for urgent shipments',
			'Door-to-door delivery options',
		],
	},
	{
		slug: 'customs',
		icon: 'shield',
		title: 'Customs & Compliance',
		summary: 'Paperwork, duties, and regulations handled so shipments clear smoothly.',
		points: [
			'Customs documentation',
			'Tariff and duty guidance',
			'Import and export regulations',
		],
	},
	{
		slug: 'warehousing',
		icon: 'box',
		title: 'Warehousing & Distribution',
		summary: 'Storage and onward distribution so your goods are ready when you need them.',
		points: ['Short and long-term storage', 'Inventory management', 'Regional distribution'],
	},
	{
		slug: 'consulting',
		icon: 'chart',
		title: 'Trade Consulting',
		summary: 'Practical advice for businesses entering or growing in global trade.',
		points: ['Market entry strategy', 'Cost and route optimisation', 'Risk assessment'],
	},
];
