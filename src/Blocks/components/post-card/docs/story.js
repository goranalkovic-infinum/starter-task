import React from 'react';
import readme from './readme.mdx';
import manifest from './../manifest.json';
import imageManifest from './../../image/manifest.json';
import headingManifest from './../../heading/manifest.json';
import paragraphManifest from './../../paragraph/manifest.json';
import listsManifest from './../../lists/manifest.json';
import { PostCardEditor } from '../components/card-editor';
import { PostCardOptions } from '../components/card-options';
import { PostCardToolbar } from '../components/card-toolbar';

export default {
	title: `Components/${manifest.title}`,
	parameters: {
		docs: { 
			page: readme
		}
	},
};

const props = {
	...imageManifest.example.attributes,
	...headingManifest.example.attributes,
	...paragraphManifest.example.attributes,
	...listsManifest.example.attributes,
	...manifest.example.attributes,
};

export const editor = () => (
	<PostCardEditor {...props} />
);

export const options = () => (
	<PostCardOptions {...props} />
);

export const toolbar = () => (
	<PostCardToolbar {...props} />
);
