import React from 'react';
import { AlignmentToolbar } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from '../manifest.json';

const { options } = manifest;

export const ListsToolbar = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		listsShowControls = true,

		listsUse = checkAttr('listsUse', attributes, manifest, componentName),

		listsAlign = checkAttr('listsAlign', attributes, manifest, componentName),

		showlistsAlign = true,
	} = attributes;

	if (!listsShowControls) {
		return null;
	}

	return (
		<Fragment>
			{listsUse &&
				<Fragment>
					{showlistsAlign &&
						<AlignmentToolbar
							value={listsAlign}
							options={options.aligns}
							onChange={(value) => setAttributes({ [`${componentName}Align`]: value })}
						/>
					}
				</Fragment>
			}
		</Fragment>
	);
};
