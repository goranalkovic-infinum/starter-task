<?php

/**
 * Template for the Heading Block view.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

echo \wp_kses_post(Components::render('heading', $attributes));
