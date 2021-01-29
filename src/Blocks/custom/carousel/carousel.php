<?php

/**
 * Template for the Carousel Block.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;
use Unicorns\Manifest\Manifest;

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

	<div class="<?php echo esc_attr('control-container'); ?>">
		<div class="<?php echo esc_attr('js-block-carousel-prev-arrow'); ?>">
			<img src="<?php echo \apply_filters(Manifest::MANIFEST_ITEM, 'arrow-left.svg') ?>" alt="Previous">
		</div>
		<div class="<?php echo esc_attr('js-block-carousel-next-arrow'); ?>">
			<img src="<?php echo \apply_filters(Manifest::MANIFEST_ITEM, 'arrow-right.svg') ?>" alt="Next">
		</div>
		<div class="<?php echo esc_attr('js-block-carousel-pagination'); ?>"></div>
	</div>
</div>