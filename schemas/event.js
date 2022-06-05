export default {
	name: 'event',
	type: 'document',
	title: 'Event',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Event',
		},
		{
			name: 'location',
			type: 'string',
			title: 'Location',
		},
		{
			name: 'info',
			title: 'Info',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'date',
			type: 'datetime',
			title: 'Date',
		},
		{
			name: 'time',
			type: 'string',
			title: 'Time',
		},
		{ name: 'image', title: 'Image', type: 'image' },
	],
};
