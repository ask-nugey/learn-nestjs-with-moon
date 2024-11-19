// @ts-check
import { essentials, typescript } from '@packages/eslint-config';

export default [
	{
		files: ['**/*.@(js|ts)'],
	},

	...essentials,
	{
		files: ['**/*.@(js|ts)'],
		rules: {
			'import/no-default-export': ['off'],
			'unicorn/filename-case': ['off'],
		},
	},

	...typescript,
];
