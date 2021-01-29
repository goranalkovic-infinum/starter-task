<?php

/**
 * Template for the LoadMore Component.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);

$componentClass = $attributes['componentClass'] ?? $manifest['componentClass'];
$selectorClass = $attributes['selectorClass'] ?? $componentClass;

$loadMoreButtonLabel = $attributes['loadMoreButtonLabel'] ?? 'Load More';
$loadMoreContainer = $attributes['loadMoreContainer'] ?? '';
$loadMoreUrl = $attributes['loadMoreUrl'] ?? '';

$blockClass = $attributes['blockClass'] ?? '';

$loadMoreClass = Components::classnames([
	$componentClass,
	Components::selector($blockClass, $blockClass, "{$selectorClass}"),
]);

?>

<div class="<?php echo \esc_attr($loadMoreClass); ?>" data-url="<?php echo \esc_attr($loadMoreUrl); ?>" data-container="<?php echo \esc_attr($loadMoreContainer); ?>">
	<?php
	echo \wp_kses_post(Components::render('button', array_merge(
		$attributes,
		[
			'blockClass' => $componentClass,
			'buttonContent' => $loadMoreButtonLabel,
			'buttonAlign' => 'center'
		]
	)));
	?>
</div>