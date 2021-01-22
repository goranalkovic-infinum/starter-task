import React from 'react';
import { Fragment } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { ColorPaletteCustom } from '@eightshift/frontend-libs/scripts/components';
import { SelectControl, Icon, ToggleControl } from '@wordpress/components';
import { icons } from '@eightshift/frontend-libs/scripts/editor';
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from '../manifest.json';

const { options, title } = manifest;

export const ListsOptions = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		label = title,
		listsShowControls = true,

		listsUse = checkAttr('listsUse', attributes, manifest, componentName),

		listsColor = checkAttr('listsColor', attributes, manifest, componentName),
		listsSize = checkAttr('listsSize', attributes, manifest, componentName),
		listsShowBullets = checkAttr('listsShowBullets', attributes, manifest, componentName),
		listsHorizontal = checkAttr('listsHorizontal', attributes, manifest, componentName),
		listsStyle = checkAttr('listsStyle', attributes, manifest, componentName),

		showListsColor = true,
		showListsSize = true,
		showListsStyle = true,
	} = attributes;

	if (!listsShowControls) {
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
				checked={listsUse}
				onChange={(value) => setAttributes({ [`${componentName}Use`]: value })}
			/>

			{listsUse &&
				<Fragment>
					{showListsColor &&
						<ColorPaletteCustom
							label={
								<Fragment>
									<Icon icon={icons.color} />
									{__('Color', 'Unicorns')}
								</Fragment>
							}
							value={listsColor}
							onChange={(value) => setAttributes({ [`${componentName}Color`]: value })}
						/>
					}	
		

					{showListsSize &&
						<SelectControl
							label={__('Size', 'Unicorns')}
							value={listsSize}
							options={options.sizes}
							onChange={(value) => setAttributes({ [`${componentName}Size`]: value })}
						/>
					}

					<hr />

					{showListsStyle &&
						<SelectControl
							label={__('List style', 'Unicorns')}
							value={listsStyle}
							options={options.styles}
							onChange={(value) => setAttributes({ [`${componentName}Style`]: value })}
						/>
					}

					<ToggleControl
						label={__('Show bullet points', 'Unicorns')}
						checked={listsShowBullets}
						onChange={(value) => setAttributes({ [`${componentName}ShowBullets`]: value })}
					/>					
					
					<ToggleControl
						label={__('Horizontal list', 'Unicorns')}
						checked={listsHorizontal}
						help={__('Best used with "Show bullet points" disabled', 'Unicorns')}
						onChange={(value) => setAttributes({ [`${componentName}Horizontal`]: value })}
					/>		
				</Fragment>
			}

		</Fragment>
	);
};
