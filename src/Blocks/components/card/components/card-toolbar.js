import React from 'react';
import { Fragment } from '@wordpress/element';
import { ImageToolbar } from '../../../components/image/components/image-toolbar';
import { HeadingToolbar } from '../../../components/heading/components/heading-toolbar';
import { ParagraphToolbar } from '../../../components/paragraph/components/paragraph-toolbar';
import { ButtonToolbar } from '../../../components/button/components/button-toolbar';

export const CardToolbar = (attributes) => {
	const {
		setAttributes,
	} = attributes;

	return (
		<Fragment>

			<p style={{margin: "24px 8px", padding: 0, fontSize: "80%"}}>Image</p>
			<ImageToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>

			<p style={{margin: "24px 8px", padding: 0, fontSize: "80%"}}>Intro</p>
			<HeadingToolbar
				{...attributes}
				componentName={'intro'}
				headingAlign={attributes.introAlign}
				headingLevel={attributes.introLevel}
				setAttributes={setAttributes}
			/>

			<p style={{margin: "24px 8px", padding: 0, fontSize: "80%"}}>Heading</p>
			<HeadingToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>

			<p style={{margin: "24px 8px", padding: 0, fontSize: "80%"}}>Paragraph</p>
			<ParagraphToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>

			<p style={{margin: "24px 8px", padding: 0, fontSize: "80%"}}>Button</p>
			<ButtonToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>
		</Fragment>
	);
};
