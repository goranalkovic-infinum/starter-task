import React from 'react';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { LoadMoreEditor } from './components/load-more-editor';
import { LoadMoreOptions } from './components/load-more-options';

export const LoadMore = (props) => {
	return (
		<Fragment>
			<InspectorControls>
				<LoadMoreOptions {...props} />
			</InspectorControls>
			<LoadMoreEditor {...props} />
		</Fragment>
	);
};
