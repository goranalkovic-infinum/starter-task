<?php

/**
 * Template for the Button Block view.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

echo \wp_kses_post(Components::render('button', $attributes));
