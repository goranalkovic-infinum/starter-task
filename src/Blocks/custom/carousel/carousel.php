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

	<div class="<?php echo esc_attr($blockClass); ?>__control-container">
		<div class="<?php echo esc_attr($blockClass); ?>__icon <?php echo esc_attr($blockClass); ?>__icon--prev">
			<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
				<g fill="none" fill-rule="evenodd">
					<circle cx="24" cy="24" r="24" fill="#EEE" />
					<path stroke="#979797" stroke-width="2" d="M29.527 14.158l-9.685 9.684 9.685 9.685" />
				</g>
			</svg>
		</div>
		<div class="<?php echo esc_attr($blockClass); ?>__icon <?php echo esc_attr($blockClass); ?>__icon--next">
			<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
				<g fill="none" fill-rule="evenodd">
					<circle cx="24" cy="24" r="24" fill="#EEE" />
					<path stroke="#979797" stroke-width="2" d="M19.842 14.158l9.685 9.684-9.685 9.685" />
				</g>
			</svg>
		</div>
		<div class="<?php echo esc_attr($blockClass); ?>__pagination"></div>
	</div>
</div>