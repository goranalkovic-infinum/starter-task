<?php

/**
 * Template for the Link Block view.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

echo \wp_kses_post(Components::render('link', $attributes));
