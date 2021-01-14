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
    $arequest  = new \WP_REST_Request('GET', '/spacenews-api/news');
    $aresponse = \rest_do_request($arequest);

    if ($aresponse->is_error()) {
        echo "NOPE";
        return;
    } else {
        $adata     = \rest_get_server()->response_to_data($aresponse, true);

        foreach ($adata as $apost) {

            $image = $apost['imageUrl'];


            $postCardProps = [
                'imageUrl' => $image,
                'imageUse' => $image ?? true,
                'dateContent' => \get_the_date('j.m.Y @ G:i', $postId),
                'headingContent' => wp_kses_post($apost['title']),
                'excerptContent' => wp_kses_post($apost['summary']),
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
        \wp_reset_postdata();
    }
    ?>
</div>