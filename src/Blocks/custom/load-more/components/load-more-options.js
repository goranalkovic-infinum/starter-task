import React from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { LoadMoreOptions as LoadMoreOptionsComponent } from '../../../components/load-more/components/load-more-options';

export const LoadMoreOptions = ({ attributes, setAttributes }) => {
	return (
		<PanelBody title={__('Load More Details', 'Unicorns')}>
			<LoadMoreOptionsComponent
				{...attributes}
				setAttributes={setAttributes}
			/>
		</PanelBody>
	);
};