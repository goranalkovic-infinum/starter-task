<?php

/**
 * The file that defines the main start class.
 *
 * A class definition that includes attributes and functions used across both the
 * theme-facing side of the site and the admin area.
 *
 * @package Unicorns\Main
 */

declare(strict_types=1);

namespace Unicorns\Main;

use UnicornsVendor\EightshiftLibs\Main\AbstractMain;

/**
 * The main start class.
 *
 * This is used to define admin-specific hooks, and
 * theme-facing site hooks.
 *
 * Also maintains the unique identifier of this theme as well as the current
 * version of the theme.
 */
class Main extends AbstractMain
{

	/**
	 * Register the project with the WordPress system.
	 *
	 * The register_service method will call the register() method in every service class,
	 * which holds the actions and filters - effectively replacing the need to manually add
	 * them in one place.
	 *
	 * @return void
	 */
	public function register(): void
	{
		\add_action('after_setup_theme', [$this, 'registerServices']);
		\add_action('after_setup_theme', [$this, 'enableFeaturedImages']);
		\add_action('rest_api_init', [$this, 'addPublicRestApi']);
	}

	/**
	 * This method enables 'Featured image' functionality'.
	 * 
	 * @return void
	 */
	public function enableFeaturedImages(): void
	{
		\add_theme_support('post-thumbnails');
	}

	/**
	 * This method adds a new API route.
	 * 
	 * @return void
	 */
	public function addPublicRestApi(): void
	{
		$options = [
			[
				'methods' => \WP_REST_Server::READABLE,
				'callback' => 'getLatestNews',
			],
		];
		
		\register_rest_route('spacenews-api', '/news', $options);
	}

	/**
	 * This method fetches the latest news from a public API.
	 * 
	 * @return WP_REST_Response
	 */
	public function getLatestNews()
	{
		$posts = [];

		$response = new \WP_REST_Response($posts);
		$response->set_status(200);

		return $response;
	}
}
