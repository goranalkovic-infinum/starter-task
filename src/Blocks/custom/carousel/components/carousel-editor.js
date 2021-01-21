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
			<div className={`${carouselClass}__control-container`}>
				<div className={`${carouselClass}__icon ${carouselClass}__icon--left`} dangerouslySetInnerHTML={{ __html: resources.arrowLeft }}></div>
				<div className={`${carouselClass}__icon ${carouselClass}__icon--right`} dangerouslySetInnerHTML={{ __html: resources.arrowRight }}></div>
				<div className={`${carouselClass}__pagination`}></div>
			</div>
		</div>
	);
};
