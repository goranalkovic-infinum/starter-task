import React from 'react';
import classnames from 'classnames';
import { selector } from '@eightshift/frontend-libs/scripts/helpers';
import { ImageEditor } from '../../image/components/image-editor';
import { HeadingEditor } from '../../heading/components/heading-editor';
import { ParagraphEditor } from '../../paragraph/components/paragraph-editor';
import { ListsEditor } from '../../lists/components/lists-editor';
import manifest from '../manifest.json';

export const PostCardEditor = (attributes) => {
	const {
		setAttributes,
		componentClass = manifest.componentClass,
		selectorClass = componentClass,
		blockClass,
	} = attributes;

	const postCardClass = classnames([
		componentClass,
		selector(blockClass, blockClass, selectorClass),
	]);

	return (
		<div className={postCardClass}>

			<ImageEditor
				{...attributes}
				setAttributes={setAttributes}
				blockClass={componentClass}
			/>

			<ParagraphEditor
				{...attributes}
				componentName={'date'}
				paragraphContent={attributes.dateContent}
				paragraphColor={'gray'}
				paragraphSize={'datey'}
				paragraphAlign={attributes.dateAlign}
				setAttributes={setAttributes}
				selectorClass={'date'}
				blockClass={componentClass}
			/>

			<HeadingEditor
				{...attributes}
				headingColor={'black'}
				headingSize={'summary'}
				setAttributes={setAttributes}
				blockClass={componentClass}
			/>


			<ParagraphEditor
				{...attributes}
				componentName={'excerpt'}
				paragraphContent={attributes.excerptContent}
				paragraphColor={attributes.excerptColor}
				paragraphSize={'excerptional'}
				paragraphAlign={attributes.excerptAlign}
				setAttributes={setAttributes}
				selectorClass={'excerpt'}
				blockClass={componentClass}
			/>

			<ListsEditor
				{...attributes}
				listsColor={'black'}
				listsShowBullets={'false'}
				listsHorizontal={'true'}
				listsSize={'tiny'}
				listsSpecial={'true'}
				setAttributes={setAttributes}
				blockClass={componentClass}
			/>

		</div>
	);
};
