<?php

/**
 * Display footer
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;
use Unicorns\Manifest\Manifest;

?>

</main>

<?php
echo wp_kses_post(
	Components::render(
		'layout-three-columns',
		[
			'selectorClass' => 'footer',
			'layoutLeft' => [
				Components::render(
					'logo',
					[
						'parentClass' => 'footer',
						'logoSrc' => \apply_filters(Manifest::MANIFEST_ITEM, 'logo.svg'),
						'logoAlt' => \get_bloginfo('name'),
						'logoTitle' => \get_bloginfo('name'),
						'logoHref' => \get_bloginfo('url'),
					]
				),
				Components::render(
					'menu',
					[
						'parentClass' => 'footer',
						'menu' => 'footer_main_nav',
						'variation' => 'horizontal'
					]
				),
			],
			'layoutRight' => Components::render(
				'copyright',
				[
					'copyrightYear' => gmdate('Y'),
					'copyrightContent' => esc_html__('All love and happiness'),
				]
			),
		]
	)
);

wp_footer();
?>
</body>

</html>