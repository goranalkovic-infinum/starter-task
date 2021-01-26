import React from 'react';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { selector, checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from './../manifest.json';

export const ListsEditor = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		componentClass = manifest.componentClass,
		selectorClass = componentClass,
		blockClass,
		placeholder = __('Add Content', 'Unicorns'),

		listsUse = checkAttr('listsUse', attributes, manifest, componentName),

		listsContent = checkAttr('listsContent', attributes, manifest, componentName),
		listsOrdered = checkAttr('listsOrdered', attributes, manifest, componentName),
		listsColor = checkAttr('listsColor', attributes, manifest, componentName),
		listsSize = checkAttr('listsSize', attributes, manifest, componentName),
		listsAlign = checkAttr('listsAlign', attributes, manifest, componentName),
		listsStyle = checkAttr('listsStyle', attributes, manifest, componentName),
		listsHorizontal = checkAttr('listsHorizontal', attributes, manifest, componentName),
		listsShowBullets = checkAttr('listsShowBullets', attributes, manifest, componentName),
	} = attributes;

	const listsClass = classnames([
		componentClass,
		selector(listsColor, componentClass, 'color', listsColor),
		selector(listsSize, componentClass, 'size', listsSize),
		selector(listsAlign, componentClass, 'align', listsAlign),
		selector(listsStyle, componentClass, 'style', listsStyle),
		selector(listsHorizontal, componentClass, 'horizontal', listsHorizontal),
		selector(true, componentClass, 'show-bullets', listsShowBullets ? 'true' : 'false'),
		selector(blockClass, blockClass, selectorClass),
	]);

	console.log(listsClass);

	return (
		<Fragment>
			{listsUse &&
				<RichText
					tagName={listsOrdered}
					multiline="li"
					className={listsClass}
					placeholder={placeholder}
					value={listsContent}
					onChange={(value) => setAttributes({ [`${componentName}Content`]: value })}
					onTagNameChange={(value) => setAttributes({ [`${componentName}Ordered`]: value })}
					formattingControls={[]}
				/>
			}
		</Fragment>
	);
};
