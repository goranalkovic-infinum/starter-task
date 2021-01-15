import React from 'react';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { checkAttr, selector } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from '../manifest.json';

export const LoadMoreEditor = (attributes) => {
	const {
		componentName = manifest.componentName,
		componentClass = manifest.componentClass,
		selectorClass = componentClass,
		blockClass,

		loadMoreUse = checkAttr('loadMoreUse', attributes, manifest, componentName),
		loadMoreButtonLabel = checkAttr('loadMoreButtonLabel', attributes, manifest, componentName),
	} = attributes;

	const buttonWrapClass = classnames([
		selector(componentClass, `${componentClass}-wrap`),
		selector(buttonAlign, `${componentClass}-wrap`, 'align', buttonAlign),
		selector(blockClass, blockClass, `${selectorClass}-wrap`),
	]);

	const buttonClass = classnames([
		componentClass,
		selector(buttonSize, componentClass, 'size', buttonSize),
		selector(buttonColor, componentClass, 'color', buttonColor),
		selector(buttonWidth, componentClass, 'size-width', buttonWidth),
		selector(!(buttonContent && buttonUrl), `${componentClass}-placeholder`),
		selector(blockClass, blockClass, selectorClass),
	]);

	return (
		<Fragment>
			{loadMoreUse &&
				<div className={buttonWrapClass}>
					<i>{loadMoreButtonLabel}</i>
				</div>
			}
		</Fragment>
	);
};
