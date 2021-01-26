<?php

/**
 * Template for the Carousel Block.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);

$blockClass = Components::checkAttr('blockClass', $attributes, $manifest);
$blockJsClass = Components::checkAttr('blockJsClass', $attributes, $manifest);
$isLoop = Components::checkAttr('isLoop', $attributes, $manifest);
$showItems = Components::checkAttr('showItems', $attributes, $manifest);

$carouselClass = Components::classnames([
	$blockClass,
	$blockJsClass,
	'swiper-container',
]);

?>

<div class="<?php echo esc_attr($carouselClass); ?>" 
	data-swiper-loop="<?php echo esc_attr($isLoop); ?>" 
	data-show-items="<?php echo esc_attr($showItems); ?>">

	<div class="<?php echo esc_attr('swiper-wrapper'); ?>">
		<?php
		$innerBlockContent = str_replace( "{$blockClass}__item", "{$blockClass}__item {$blockJsClass}-item", $innerBlockContent);
		$innerBlockContent = str_replace( "{$blockJsClass}-item-inner", "{$blockClass}__item-inner {$blockJsClass}-item-inner", $innerBlockContent);
		echo wp_kses_post($innerBlockContent);
		?>
	</div>

	<div class="<?php echo esc_attr("{$blockClass}__control-container {$blockJsClass}-control-container"); ?>">
		<button class="<?php echo esc_attr("{$blockClass}__icon {$blockJsClass}-icon"); ?> <?php echo esc_attr("{$blockClass}__icon--prev {$blockJsClass}-icon-prev"); ?>">
			<?php echo $manifest['resources']['arrowLeft']; ?>
		</button>
		<button class="<?php echo esc_attr("{$blockClass}__icon {$blockJsClass}-icon"); ?> <?php echo esc_attr("{$blockClass}__icon--next {$blockJsClass}-icon-next"); ?>">
			<?php echo $manifest['resources']['arrowRight']; ?>
		</button>
		<span class="<?php echo esc_attr("{$blockClass}__pagination {$blockJsClass}-pagination"); ?>"></span>
	</div>
</div>