import React from 'react';
import readme from './readme.mdx';
import manifest from './../manifest.json';
import { LoadMoreEditor } from '../components/load-more-editor';
import { LoadMoreOptions } from '../components/load-more-options';

export default {
	title: `Components/${manifest.title}`,
	parameters: {
		docs: { 
			page: readme
		}
	},
};

const props = manifest.example.attributes;

export const editor = () => (
	<LoadMoreEditor {...props} />
);

export const options = () => (
	<LoadMoreOptions {...props} />
);