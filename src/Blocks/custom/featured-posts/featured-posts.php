<?php

/**
 * Template for the Featured Posts view.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);

$blockClass = Components::checkAttr('blockClass', $attributes, $manifest);
$initialLoad = Components::checkAttr('loadOnStart', $attributes, $manifest) ? 'true' : 'false';

?>

<?php
echo wp_kses_post(
    Components::render('load-more', array_merge($attributes, [
        'blockClass' => $blockClass,
        'loadMoreInitialLoad' => $initialLoad
    ]))
);
?>