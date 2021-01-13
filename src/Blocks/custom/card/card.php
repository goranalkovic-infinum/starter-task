<?php

/**
 * Template for the Card Block.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

echo wp_kses_post(Components::render('card', $attributes));
