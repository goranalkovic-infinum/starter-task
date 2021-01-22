<?php

/**
 * Template for the LoadMore Component.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);

$componentName = $attributes['componentName'] ?? $manifest['componentName'];

$blockClass = $attributes['blockClass'] ?? '';
$componentClass = $attributes['componentClass'] ?? $manifest['componentClass'];
$componentJsClass = $attributes['componentJsClass'] ?? $manifest['componentJsClass'];
$selectorClass = $attributes['selectorClass'] ?? $componentClass;

$loadMoreButtonLabel = Components::checkAttr('loadMoreButtonLabel', $attributes, $manifest, $componentName);
$loadMoreContainer = Components::checkAttr('loadMoreContainer', $attributes, $manifest, $componentName);
$loadMoreUrl = Components::checkAttr('loadMoreUrl', $attributes, $manifest, $componentName);
$loadMoreUsePagination = Components::checkAttr('loadMoreUsePagination', $attributes, $manifest, $componentName);
$loadMoreItemsPerPage = Components::checkAttr('loadMoreItemsPerPage', $attributes, $manifest, $componentName);
$loadMoreItemsPerPageParameterName = Components::checkAttr('loadMoreItemsPerPageParameterName', $attributes, $manifest, $componentName);
$loadMoreStartItem = Components::checkAttr('loadMoreStartItem', $attributes, $manifest, $componentName);
$loadMoreStartItemParameterName = Components::checkAttr('loadMoreStartItemParameterName', $attributes, $manifest, $componentName);

$loadMoreClass = Components::classnames([
	$componentClass,
	$componentJsClass,
	$selectorClass
]);

?>

<div class="<?php echo \esc_attr($loadMoreClass); ?>" data-url="<?php echo \esc_url_raw($loadMoreUrl); ?>" data-paginated="<?php echo \esc_attr($loadMoreUsePagination); ?>" data-per-page="<?php echo \esc_attr($loadMoreItemsPerPage); ?>" data-per-page-param="<?php echo \esc_attr($loadMoreItemsPerPageParameterName); ?>" data-start-item="<?php echo \esc_attr($loadMoreStartItem); ?>" data-start-item-param="<?php echo \esc_attr($loadMoreStartItemParameterName); ?>">
	<div class="<?php echo \esc_attr($componentJsClass) ?>--container"></div>
	
	<?php
	echo \wp_kses_post(Components::render('button', array_merge(
		$attributes,
		[
			'blockClass' => $componentClass,
			'buttonContent' => $loadMoreButtonLabel,
			'buttonAlign' => 'center',
		]
	)));
	?>
</div>