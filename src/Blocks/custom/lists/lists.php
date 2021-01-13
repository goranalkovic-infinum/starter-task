<?php

/**
 * Template for the Lists Block view.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

echo \wp_kses_post(Components::render('lists', $attributes));
