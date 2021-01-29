import React from 'react';
import { Fragment } from '@wordpress/element';
import { ImageOptions } from '../../image/components/image-options';
import { HeadingOptions } from '../../heading/components/heading-options';
import { ParagraphOptions } from '../../paragraph/components/paragraph-options';
import { ListsOptions } from '../../lists/components/lists-options';

export const CardOptions = (attributes) => {
	const {
		setAttributes,
	} = attributes;

	return (
		<Fragment>

			<ImageOptions
				{...attributes}
				setAttributes={setAttributes}
			/>

			<hr />

			<ParagraphOptions
				{...attributes}
				componentName={'date'}
				label={'Date'}
				paragraphColor={attributes.introColor}
				paragraphSize={attributes.introSize}
				setAttributes={setAttributes}
			/>

			<hr />

			<HeadingOptions
				{...attributes}
				setAttributes={setAttributes}
			/>


			<hr />

			<ParagraphOptions
		{...attributes}
		componentName={'excerpt'}
		label={'Excerpt'}
		paragraphColor={attributes.excerptColor}
		paragraphSize={attributes.excerptSize}
		setAttributes={setAttributes}
			/>

			<hr />

			<ListsOptions
				{...attributes}
				setAttributes={setAttributes}
			/>

		</Fragment>
	);
};
