import React from 'react';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { ButtonEditor } from '../../../components/button/components/button-editor';
import { checkAttr, selector } from '@eightshift/frontend-libs/scripts/helpers';

import manifest from '../manifest.json';

export const LoadMoreEditor = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		componentClass = manifest.componentClass,
		selectorClass = componentClass,
		blockClass,
		componentTitle = manifest.title,
		componentDescription = manifest.description,

		loadMoreUse = checkAttr('loadMoreUse', attributes, manifest, componentName),

	} = attributes;

	const loadMoreClass = classnames([
		componentClass,
		selector(blockClass, blockClass, selectorClass),
	]);

	return (
		<div className={loadMoreClass}>
			{loadMoreUse &&
				<Fragment>
					<div className={`${componentClass}__editor-wrapper`}>
						<p className={`${componentClass}__editor-wrapper-title`}>
							{componentTitle}
						</p>
						<small className={`${componentClass}__editor-wrapper-subtitle`}>
							{componentDescription}
							</small>

						<ButtonEditor
							{...attributes}
							buttonAlign='center'
							setAttributes={setAttributes}
							blockClass={componentClass}
						/>
					</div>
				</Fragment>
			}
		</div>
	);
};
