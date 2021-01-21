import React from 'react';
import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import manifest from './../manifest.json';

const { resources } = manifest;

export const CarouselEditor = ({ attributes }) => {
	const {
		blockClass,
		blockJsClass,
		allowedBlocks,
		showItems,
	} = attributes;

	const carouselClass = classnames([
		blockClass,
		blockJsClass,
	]);

	return (
		<div className={carouselClass} data-show-items={showItems}>
			<InnerBlocks
				allowedBlocks={allowedBlocks}
			/>
			<div className={`${blockClass}__control-container`}>
				<div className={`${blockClass}__icon ${blockClass}__icon--prev`} dangerouslySetInnerHTML={{ __html: resources.arrowLeft }}></div>
				<div className={`${blockClass}__icon ${blockClass}__icon--next`} dangerouslySetInnerHTML={{ __html: resources.arrowRight }}></div>
				<div className={`${blockClass}__pagination`}></div>
			</div>
		</div>
	);
};
