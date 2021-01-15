<?php

/**
 * Display footer
 *
 * @package Unicorns
 */

use UnicornsVendor\EightshiftLibs\Helpers\Components;

?>

</main>

<?php
echo wp_kses_post(
	Components::render(
		'layout-three-columns',
		[
			'layoutLeft' => [
				Components::render(
					'menu',
					[
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