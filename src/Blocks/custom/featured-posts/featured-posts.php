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
    $request  = new \WP_REST_Request('GET', '/spacenews-api/news/latest');
    $response = \rest_do_request($request);

    if ($response->is_error()) {
        echo "Error loading news";
    } else {
        $data     = \rest_get_server()->response_to_data($response, true);

        foreach ($data as $post) {

            $postImage = $post['imageUrl'];

            $postDate = date_create($post['publishedAt']);

            $postTitle = $post['title'];

            $postExcerpt = $post['summary'];

            $postCardProps = [
                'imageUrl' => wp_kses_post($postImage),
                'imageUse' => $postImage ?? true,
                'dateContent' => date_format($postDate, 'j.m.Y @ G:i'),
                'headingContent' => wp_kses_post($postTitle),
                'excerptContent' => wp_kses_post($postExcerpt),
                'tagsContent' => '<li>Prvo</li><li>Drugo</li><li>Trece</li>'
            ];

            if ($serverSideRender) {
                $postCardProps['headingTag'] = 'div';
                $postCardProps['paragraphTag'] = 'div';
            }
    ?>

            <div class="<?php echo esc_attr("{$blockClass}__item"); ?>">
                <?php
                echo wp_kses_post(
                    Components::render(
                        'post-card',
                        $postCardProps
                    )
                );
                ?>
            </div>
    <?php
        }
    }

    ?>
</div>

<?php
$loadMoreProps = [
    'loadMoreUrl' => '/wp-json/spacenews-api/news',
    'loadMoreButtonLabel' => 'Load More',
    'loadMoreContainer' => esc_attr($blockClass),
];

echo wp_kses_post(
    Components::render(
        'load-more',
        $loadMoreProps
    )
);
?>