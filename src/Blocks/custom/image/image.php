<?php

/**
 * Template for the Image Block view.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

echo wp_kses_post(Components::render('image', $attributes));
