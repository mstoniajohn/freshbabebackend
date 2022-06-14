export default {
	name: 'about',
	type: 'document',
	title: 'About',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Event',
		},

		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
		},

		{ name: 'image', title: 'Image', type: 'image' },
	],
};
