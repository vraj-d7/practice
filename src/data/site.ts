// Company details used across the site.
export const site = {
	name: 'Edge Global Trade',
	description:
		'Edge Global Trade helps businesses source, ship, and sell goods across international markets.',
	email: 'info@edgeglobaltrade.com',
	phones: ['+91 99045 72003', '+1 (416) 417-3060', '+1 (780) 264-1788'],
	hours: 'Monday – Saturday, 9am – 5pm',
};

/** "tel:" link for a phone number, keeping only the digits and the leading "+" */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

// TODO: replace each "#" with the company's profile address.
export const socialLinks = [
	{ label: 'Twitter', icon: 'twitter', href: '#' },
	{ label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/edgeglobaltrade' },
	{ label: 'LinkedIn', icon: 'linkedin', href: '#' },
	{ label: 'Facebook', icon: 'facebook', href: '#' },
] as const;

export const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/contact', label: 'Contact' },
];

export const faqs = [
	{
		q: 'What kind of products do you deal in?',
		a: 'We source and supply a wide range of high-quality Indian products based on client requirements. Our focus is on reliable sourcing, consistent quality, and competitive pricing.',
	},
	{
		q: 'Can you help me find specific products from India?',
		a: 'Yes, we specialize in product sourcing. Share your requirements, and we’ll identify the right manufacturers, negotiate pricing, and manage the entire process for you.',
	},
	{
		q: 'Do you handle the complete export process?',
		a: 'Absolutely. From sourcing and quality checks to documentation, customs clearance, and shipping—we manage everything end-to-end.',
	},
	{
		q: 'How do you ensure product quality?',
		a: 'We work with verified suppliers and follow strict quality checks before shipment to ensure everything meets agreed standards.',
	},
	{
		q: 'How can I clean or maintain the product?',
		a: 'Simply follow the instructions included in the packaging or on our website. It’s easy to use and requires no special tools or skills.',
	},
	{
		q: 'Do you ship internationally?',
		a: 'Yes, we export to multiple countries worldwide and ensure smooth logistics and delivery to your destination.',
	},
	{
		q: 'Can I customize my order?',
		a: 'Yes, customization is possible depending on the product. We coordinate with suppliers to meet your specific requirements.',
	},
	{
		q: 'Why should I choose your company?',
		a: 'We focus on transparency, reliability, and long-term partnerships—ensuring you get the right products, at the right price, delivered on time.',
	},
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
