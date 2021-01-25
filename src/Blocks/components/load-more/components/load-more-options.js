import React from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { ToggleControl, TextControl, RangeControl } from '@wordpress/components';
import { ButtonOptions } from '../../../components/button/components/button-options';
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from '../manifest.json';

const { options, title } = manifest;

export const LoadMoreOptions = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		loadMoreShowControls = true,
		label = title,
		loadMoreUse = checkAttr('loadMoreUse', attributes, manifest, componentName),
		loadMoreUrl = checkAttr('loadMoreUrl', attributes, manifest, componentName),
		loadMoreUsePagination = checkAttr('loadMoreUsePagination', attributes, manifest, componentName),
		loadMoreItemsPerPage = checkAttr('loadMoreItemsPerPage', attributes, manifest, componentName),
		loadMoreItemsPerPageParameterName = checkAttr('loadMoreItemsPerPageParameterName', attributes, manifest, componentName),
		loadMoreStartItem = checkAttr('loadMoreStartItem', attributes, manifest, componentName),
		loadMoreStartItemParameterName = checkAttr('loadMoreStartItemParameterName', attributes, manifest, componentName),
	} = attributes;

	if (!loadMoreShowControls) {
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
				onChange={(value) => setAttributes({ [`loadMoreUse`]: value })}
			/>


			{loadMoreUse &&
				<Fragment>

					<TextControl
						label="URL"
						value={loadMoreUrl ?? ''}
						onChange={(value) => setAttributes({ [`loadMoreUrl`]: value })}
					/>

					{loadMoreUsePagination && <hr />}

					<ToggleControl
						label={__('Pagination', 'Unicorns')}
						checked={loadMoreUsePagination}
						onChange={(value) => setAttributes({ [`loadMoreUsePagination`]: value })}
					/>


					{loadMoreUsePagination &&
						<Fragment>
							<RangeControl
								label="Items per page"
								value={loadMoreItemsPerPage}
								onChange={(value) => setAttributes({ [`loadMoreItemsPerPage`]: value })}
								min={options.loadMoreItemsPerPage.min}
								max={options.loadMoreItemsPerPage.max}
								step={1}
							/>
							<TextControl
								label="Items per page URL parameter"
								value={loadMoreItemsPerPageParameterName ?? ''}
								onChange={(value) => setAttributes({ [`loadMoreItemsPerPageParameterName`]: value })}
							/>
							<RangeControl
								label="Starting item index"
								value={loadMoreStartItem}
								onChange={(value) => setAttributes({ [`loadMoreStartItem`]: value })}
								min={options.loadMoreStartItem.min}
								max={options.loadMoreStartItem.max}
								step={1}
							/>
							<TextControl
								label="Starting item index URL parameter"
								value={loadMoreStartItemParameterName}
								onChange={(value) => setAttributes({ [`loadMoreStartItemParameterName`]: value })}
							/>
						</Fragment>
					}

					<ButtonOptions
						{...attributes}
						showButtonIsAnchor={false}
						showButtonIsNewTab={false}
						showButtonId={false}
						setAttributes={setAttributes}
					/>
				</Fragment>
			}
		</Fragment>
	);
};
