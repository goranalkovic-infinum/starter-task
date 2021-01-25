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
			<?php echo $manifest['resources']['arrowLeft']; ?>
		</div>
		<div class="<?php echo esc_attr($blockClass); ?>__icon <?php echo esc_attr($blockClass); ?>__icon--next">
			<?php echo $manifest['resources']['arrowRight']; ?>
		</div>
		<div class="<?php echo esc_attr($blockClass); ?>__pagination"></div>
	</div>
</div>