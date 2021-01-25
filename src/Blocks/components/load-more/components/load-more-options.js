import React from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { ToggleControl, TextControl, RangeControl } from '@wordpress/components';
import { ButtonOptions } from '../../../components/button/components/button-options';
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from '../manifest.json';
import {camelCase} from 'lodash';

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

	const componentNameCamelCase = camelCase(componentName);

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
				onChange={(value) => setAttributes({ [`${componentNameCamelCase}Use`]: value })}
			/>

			{loadMoreUse &&
				<Fragment>
					<TextControl
						label={__("URL", 'unicorns')}
						value={loadMoreUrl ?? ''}
						onChange={(value) => setAttributes({ [`${componentNameCamelCase}Url`]: value })}
					/>

					{loadMoreUsePagination && <hr />}

					<ToggleControl
						label={__('Pagination', 'Unicorns')}
						checked={loadMoreUsePagination}
						onChange={(value) => setAttributes({ [`${componentNameCamelCase}UsePagination`]: value })}
					/>

					{loadMoreUsePagination &&
						<Fragment>
							<RangeControl
								label={__("Items per page", 'unicorns')}
								value={loadMoreItemsPerPage}
								onChange={(value) => setAttributes({ [`${componentNameCamelCase}ItemsPerPage`]: value })}
								min={options.loadMoreItemsPerPage.min}
								max={options.loadMoreItemsPerPage.max}
								step={1}
							/>
							<TextControl
								label={__("Items per page URL parameter", 'unicorns')}
								value={loadMoreItemsPerPageParameterName ?? ''}
								onChange={(value) => setAttributes({ [`${componentNameCamelCase}ItemsPerPageParameterName`]: value })}
							/>
							<RangeControl
								label={__("Starting item index", 'unicorns')}
								value={loadMoreStartItem}
								onChange={(value) => setAttributes({ [`${componentNameCamelCase}StartItem`]: value })}
								min={options.loadMoreStartItem.min}
								max={options.loadMoreStartItem.max}
								step={1}
							/>
							<TextControl
								label={__("Starting item index URL parameter", 'unicorns')}
								value={loadMoreStartItemParameterName}
								onChange={(value) => setAttributes({ [`${componentNameCamelCase}StartItemParameterName`]: value })}
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
