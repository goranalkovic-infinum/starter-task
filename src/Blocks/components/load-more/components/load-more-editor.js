import React from 'react';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { checkAttr, selector } from '@eightshift/frontend-libs/scripts/helpers';

import manifest from '../manifest.json';

export const LoadMoreEditor = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		componentClass = manifest.componentClass,
		componentTitle = manifest.title,
		componentDescription = manifest.description,

		buttonLabelPlaceholder = __('Button label', 'unicorns'),
		loadMoreUse = checkAttr('loadMoreUse', attributes, manifest, componentName),

		loadMoreButtonLabel = checkAttr('loadMoreButtonLabel', attributes, manifest, componentName),
	} = attributes;

	return (
		<Fragment>
			{loadMoreUse &&
				<Fragment>
					<div style={{
						border: '1px solid #808080',
						borderRadius: '0.5rem',
						padding: '1rem',
						textAlign: 'center'
					}}>
						<p style={{
							marginTop: '0',
							marginBottom: '0.5rem'
						}}>
							{componentTitle}
						</p>
						<small><i>{componentDescription}</i></small>
						<br />
						<br />

						<div className="btn-wrap btn-wrap__align--center">
							<div className="btn">
								<RichText
									placeholder={buttonLabelPlaceholder}
									value={loadMoreButtonLabel}
									onChange={(value) => setAttributes({ [`loadMoreButtonLabel`]: value })}
									className={componentClass}
									keepPlaceholderOnFocus
									allowedFormats={[]}
								/></div>
						</div>
					</div>
			</Fragment>
			}
		</Fragment>
	);
};
