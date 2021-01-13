<?php

/**
 * Template for the Paragraph Block view.
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

echo \wp_kses_post(Components::render('paragraph', $attributes));
