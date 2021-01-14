<?php

/**
 * Template for the Featured Posts view.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);

$blockClass = Components::checkAttr('blockClass', $attributes, $manifest);
$query = Components::checkAttr('query', $attributes, $manifest);
$excludeCurrentPost = Components::checkAttr('excludeCurrentPost', $attributes, $manifest);
$itemsPerLine = Components::checkAttr('itemsPerLine', $attributes, $manifest);
$showItems = Components::checkAttr('showItems', $attributes, $manifest);
$serverSideRender = Components::checkAttr('serverSideRender', $attributes, $manifest);

global $post;

?>

<div class="<?php echo esc_attr($blockClass); ?>" data-items-per-line=<?php echo \esc_attr($itemsPerLine); ?>>
	<?php
	$postType = $query['postType'];
	$posts = $query['posts'];

	$args = [
		'post_type' => $postType,
		'posts_per_page' => $showItems,
	];

	if ($excludeCurrentPost) {
		$args['post__not_in'] = $posts->ID;
	}

	if ($posts) {
		$args['post__in'] = $posts;
	}

	$theQuery = new \WP_Query($args);

	if ($theQuery->have_posts()) {
		while ($theQuery->have_posts()) {
			$theQuery->the_post();

			$postId = get_the_ID();

			$tags = \get_the_tags($postId);
			$tagNames = [];

			foreach ($tags as $tag) {
				$tagNames[] = '"' . $tag->name . '"';
			}

			$processedTags = '{' . implode(",", $tagNames) . '}';

			$image = \get_the_post_thumbnail_url($postId, 'large');

			$cardProps = [
				'imageUrl' => $image,
				'imageUse' => $image ?? true,
				'introUse' => true,
				'introContent' => \get_the_date('j.m.Y @ G:i', $postId),
				'headingContent' => \get_the_title($postId),
				'paragraphContent' => \get_the_excerpt($postId),
				'buttonUse' => false,
			];

			if ($serverSideRender) {
				$cardProps['headingTag'] = 'div';
				$cardProps['paragraphTag'] = 'div';
			}
	?>

			<div class="<?php echo esc_attr("{$blockClass}__item"); ?>">
				<?php
				echo wp_kses_post(
					Components::render(
						'card',
						$cardProps
					)
				);
				echo $processedTags;
				?>
			</div>
	<?php
		}
		\wp_reset_postdata();
	}
	?>
</div>