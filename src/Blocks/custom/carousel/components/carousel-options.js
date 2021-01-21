import React from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';

export const CarouselOptions = ({ attributes, setAttributes }) => {
	const {
		isLoop,
	} = attributes;

	return (
		<PanelBody title={__('Carousel Details', 'Unicorns')}>
			<ToggleControl
				label={__('Looped Mode', 'Unicorns')}
				checked={isLoop}
				onChange={(value) => setAttributes({ isLoop: value })}
			/>
		</PanelBody>
	);
};
