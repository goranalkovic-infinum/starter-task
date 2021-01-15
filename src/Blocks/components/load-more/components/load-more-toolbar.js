import React from 'react';
import { Fragment } from '@wordpress/element';
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from '../manifest.json';

export const LoadMoreToolbar = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		loadMoreShowControls = true,

		loadMoreUse = checkAttr('loadMoreUseUse', attributes, manifest, componentName),
	} = attributes;

	if (!loadMoreShowControls) {
		return null;
	}

	return (
		<Fragment>
			{loadMoreUse &&
				<ButtonToolbar
					{...attributes}
					setAttributes={setAttributes}
				/>
			}
		</Fragment>
	);
};