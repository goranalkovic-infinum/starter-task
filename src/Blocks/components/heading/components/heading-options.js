import React from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { ColorPaletteCustom } from '@eightshift/frontend-libs/scripts/components';
import { icons } from '@eightshift/frontend-libs/scripts/editor';
import { SelectControl, Icon, ToggleControl } from '@wordpress/components';
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';
import manifest from './../manifest.json';

const { options, title } = manifest;

export const HeadingOptions = (attributes) => {
	const {
		setAttributes,
		componentName = manifest.componentName,
		label = title,
		headingShowControls = true,

		headingUse = checkAttr('headingUse', attributes, manifest, componentName),

		headingColor = checkAttr('headingColor', attributes, manifest, componentName),
		headingSize = checkAttr('headingSize', attributes, manifest, componentName),
		headingUppercase = checkAttr('headingUppercase', attributes, manifest, componentName),

		showHeadingColor = true,
		showHeadingSize = true,
	} = attributes;

	if (!headingShowControls) {
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
				checked={headingUse}
				onChange={(value) => setAttributes({ [`${componentName}Use`]: value })}
			/>

			{headingUse &&
				<Fragment>
					{showHeadingColor &&
						<ColorPaletteCustom
							label={
								<Fragment>
									<Icon icon={icons.color} />
									{__('Color', 'Unicorns')}
								</Fragment>
							}
							value={headingColor}
							onChange={(value) => setAttributes({ [`${componentName}Color`]: value })}
						/>
					}

					{showHeadingSize &&
						<Fragment>
							<SelectControl
								label={__('Size', 'Unicorns')}
								value={headingSize}
								options={options.sizes}
								onChange={(value) => setAttributes({ [`${componentName}Size`]: value })}
							/>
							<ToggleControl
								label={__('Uppercase', 'Unicorns')}
								checked={headingUppercase}
								onChange={(value) => setAttributes({ [`${componentName}Uppercase`]: value })}
							/>
						</Fragment>
					}
				</Fragment>
			}

		</Fragment>
	);
};
