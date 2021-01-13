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
			'layoutLeft' => Components::render(
				'copyright',
				[
					'copyrightBy' => esc_html__('Eightshift', 'unicorns'),
					'copyrightYear' => gmdate('Y'),
					'copyrightContent' => esc_html__('Made with 🧡  by Eightshift team', 'unicorns'),
				]
			),
			'layoutRight' => Components::render(
				'menu',
				[
					'variation' => 'horizontal'
				]
			),
		]
	)
);

wp_footer();
?>
</body>
</html>
