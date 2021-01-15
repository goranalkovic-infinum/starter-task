import React from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { URLInput } from '@wordpress/block-editor';
import { SelectControl, TextControl, Icon, ToggleControl } from '@wordpress/components';
import { getPaletteColors, icons } from '@eightshift/frontend-libs/scripts/editor';
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from '../manifest.json';

const { options, title } = manifest;

export const buttonColors = () => {
	const colors = getPaletteColors();

	return [
		colors.primary,
		colors.black,
	];
};

export const LoadMoreOptions = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		label = title,
		buttonShowControls = true,

		loadMoreUse = checkAttr('loadMoreUse', attributes, manifest, componentName),
		loadMoreUrl = checkAttr('loadMoreUrl', attributes, manifest, componentName),


	} = attributes;

	if (!buttonShowControls) {
		return null;
	}

	return (
		<Fragment>

			{label &&
				<h3 className={'options-label'}>
					{label}
				</h3>
			}

			<ToggleControl
				label={sprintf(__('Use %s', 'Unicorns'), label)}
				checked={loadMoreUse}
				onChange={(value) => setAttributes({ [`${componentName}Use`]: value })}
			/>

			{buttonUse &&
				<Fragment>

					<URLInput
						label={__('Url', 'Unicorns')}
						value={loadMoreUrl}
						autoFocus={false}
						onChange={(value) => setAttributes({ [`${componentName}Url`]: value })}
					/>

					<hr />

					<ButtonOptions
						{...attributes}
						setAttributes={setAttributes}
					/>
				</Fragment>
			}

		</Fragment>
	);
};
