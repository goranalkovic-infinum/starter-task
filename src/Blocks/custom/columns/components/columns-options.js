import React from 'react';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { PanelBody, Icon, RangeControl, SelectControl } from '@wordpress/components';
import { Responsive, HelpModal } from '@eightshift/frontend-libs/scripts/components';
import { icons, ucfirst } from '@eightshift/frontend-libs/scripts/editor';
import manifest from './../manifest.json';
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';

const { attributes: reset, options } = manifest;

export const ColumnsOptions = ({ attributes, setAttributes }) => {
	const gutter = [
		attributes.gutterLarge,
		attributes.gutterDesktop,
		attributes.gutterTablet,
		attributes.gutterMobile,
	];

	const verticalSpacing = [
		attributes.verticalSpacingLarge,
		attributes.verticalSpacingDesktop,
		attributes.verticalSpacingTablet,
		attributes.verticalSpacingMobile,
	];

	const verticalAlign = checkAttr('verticalAlign', attributes, manifest);

	return (
		<PanelBody title={__('Columns Details', 'Unicorns')}>

			<HelpModal
				type="columns"
				buttonLabel={__('How to use columns?', 'Unicorns')}
				modalLabel={__('Columns', 'Unicorns')}
			/>

			<br /><br />

			<SelectControl
				label={__('Content vertical align', 'Unicorns')}
				value={verticalAlign}
				options={options.verticalAlignments}
				onChange={(value) => setAttributes({ ['verticalAlign']: value })}
			/>

			<Responsive
				label={
					<Fragment>
						<Icon icon={icons.containerWidth} />
						{__('Gutter', 'Unicorns')}
					</Fragment>
				}
			>
				{gutter.map((item, index) => {

					const point = ucfirst(options.breakpoints[index]);
					const attr = `gutter${point}`;

					return (
						<Fragment key={index}>
							<RangeControl
								label={point}
								allowReset={true}
								value={attributes[attr]}
								onChange={(value) => setAttributes({ [attr]: value })}
								min={options.gutters.min}
								max={options.gutters.max}
								step={options.gutters.step}
								resetFallbackValue={reset[attr].default}
							/>
						</Fragment>
					);
				})}
			</Responsive>

			<Responsive
				label={
					<Fragment>
						<Icon icon={icons.containerHeight} />
						{__('Vertical Spacing', 'Unicorns')}
					</Fragment>
				}
			>
				{verticalSpacing.map((item, index) => {

					const point = ucfirst(options.breakpoints[index]);
					const attr = `verticalSpacing${point}`;

					return (
						<Fragment key={index}>
							<RangeControl
								label={point}
								allowReset={true}
								value={attributes[attr]}
								onChange={(value) => setAttributes({ [attr]: value })}
								min={options.gutters.min}
								max={options.gutters.max}
								step={options.gutters.step}
								resetFallbackValue={reset[attr].default}
							/>
						</Fragment>
					);
				})}
			</Responsive>
		</PanelBody>
	);
};
