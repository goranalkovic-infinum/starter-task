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

<div class="<?php echo esc_attr($carouselClass); ?>" data-swiper-loop="<?php echo esc_attr($isLoop); ?>" data-show-items="<?php echo esc_attr($showItems); ?>">

	<div class="<?php echo esc_attr('swiper-wrapper'); ?>">
		<?php echo wp_kses_post($innerBlockContent); ?>
	</div>

	<div style="display: flex; gap:10px; padding: 10px;">
		<div class="js-block-carousel-prev-arrow">&lt;</div>
		<div class="js-block-carousel-next-arrow">&gt;</div>
		<div class="js-block-carousel-pagination">pagination</div>
	</div>
</div>