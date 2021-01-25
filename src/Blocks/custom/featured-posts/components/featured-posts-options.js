import React from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { ToggleControl } from '@wordpress/components';

import { LoadMoreOptions as LoadMoreOptionsComponent } from '../../../components/load-more/components/load-more-options';


export const FeaturedPostsOptions = ({ attributes, setAttributes }) => {
	const {
		blockName,
		loadOnStart,
	} = attributes;

	return (
		<PanelBody title={__('Featured Posts', 'Unicorns')}>

			<ToggleControl
				label={__('Initial item load', 'Unicorns')}
				checked={loadOnStart}
				onChange={(value) => setAttributes({ loadOnStart: value })}
			/>

			<LoadMoreOptionsComponent
				{...attributes}
				setAttributes={setAttributes}
			/>

		</PanelBody>
	);
};
