import React from 'react';
import { Fragment } from '@wordpress/element';
import { ImageToolbar } from '../../image/components/image-toolbar';
import { HeadingToolbar } from '../../heading/components/heading-toolbar';
import { ParagraphToolbar } from '../../paragraph/components/paragraph-toolbar';
import { ListsToolbar } from '../../lists/components/lists-toolbar';

export const PostCardToolbar = (attributes) => {
	const {
		setAttributes,
	} = attributes;

	return (
		<Fragment>

			<ImageToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>

			<ParagraphToolbar
				{...attributes}
				componentName={'date'}
				paragraphAlign={attributes.dateAlign}
				setAttributes={setAttributes}
			/>

			<HeadingToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>

			<ParagraphToolbar
				{...attributes}
				componentName={'excerpt'}
				paragraphAlign={attributes.excerptAlign}
				setAttributes={setAttributes}
			/>

			<ListsToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>
		</Fragment>
	);
};
