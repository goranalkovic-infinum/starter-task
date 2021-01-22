<?php

/**
 * Template for the PostCard Component.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);

$componentClass = $attributes['componentClass'] ?? $manifest['componentClass'];
$selectorClass = $attributes['selectorClass'] ?? $componentClass;
$blockClass = $attributes['blockClass'] ?? '';

$cardClass = Components::classnames([
	$componentClass,
	Components::selector($blockClass, $blockClass, "{$selectorClass}"),
]);

?>

<div class="<?php echo \esc_attr($cardClass); ?>">
	<?php
	echo \wp_kses_post(Components::render('image', array_merge(
		$attributes,
		[
			'blockClass' => $componentClass
		]
	)));
	echo \wp_kses_post(Components::render('paragraph', array_merge(
		$attributes,
		[
			'componentName' => 'date',
			'paragraphUse' => $attributes['dateUse'],
			'paragraphContent' => $attributes['dateContent'] ?? '',
			'paragraphColor' => 'gray',
			'paragraphSize' => 'datey',
			'paragraphAlign' => $attributes['dateAlign'],
			'selectorClass' => 'date',
			'paragraphFontStyle' => 'italic',
			'blockClass' => $componentClass
		]
	)));
	echo \wp_kses_post(Components::render('heading', array_merge(
		$attributes,
		[
			'headingColor' => 'black',
			'headingSize' => 'summary',
			'headingAlign' => 'left',
			'blockClass' => $componentClass
		]
	)));
	echo \wp_kses_post(Components::render('paragraph', array_merge(
		$attributes,
		[
			'componentName' => 'excerpt',
			'paragraphUse' => $attributes['excerptUse'],
			'paragraphContent' => $attributes['excerptContent'] ?? '',
			'paragraphColor' => $attributes['excerptColor'],
			'paragraphSize' => 'excerptional',
			'paragraphAlign' => $attributes['excerptAlign'],
			'selectorClass' => 'excerpt',
			'blockClass' => $componentClass
		]
	)));
	echo \wp_kses_post(Components::render('lists', array_merge(
		$attributes,
		[
			'listsContent' => $attributes['tagsContent'],
			'listsColor' => 'black',
			'listsShowBullets' => 'false',
			'listsHorizontal' => 'true',
			'listsSize' => 'tiny',
			'listsSpecial' => 'true',
			'blockClass' => $componentClass
		]
	)));
	?>
</div>
