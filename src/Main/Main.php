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
			'methods' => \WP_REST_Server::READABLE,
			'callback' => [$this, 'getLatestNews'],
		];

		\register_rest_route('spacenews-api', '/news/latest', $options);

		$options2 = [
			'methods' => \WP_REST_Server::READABLE,
			'callback' => [$this, 'getNews'],
		];

		\register_rest_route('spacenews-api', '/news', $options2);
	}

	/**
	 * This method fetches the latest 4 news from a public API.
	 * 
	 * @return WP_REST_Response
	 */
	public function getLatestNews()
	{
		$url = 'https://www.spaceflightnewsapi.net/api/v2/articles?_limit=4';
		$remoteResponse = \wp_remote_get($url);

		if (is_array($remoteResponse)) {
			$body = json_decode($remoteResponse['body'], true);
		}

		if (!isset($body)) {
			return new \WP_Error('no_news', 'there are no news available', ['status' => 404]);
		}
		$response = new \WP_REST_Response($body);
		$response->set_status(200);

		return $response;
	}

	/**
	 * This method fetches news from a public API.
	 * 
	 * @return WP_REST_Response
	 */
	public function getNews($data)
	{
		$params = $data->get_params();

		foreach ($params as $name => $value) {
			if ($name != '_limit' && $name != '_start') {
				unset($params[$name]);
			}
		}

		$parsedParams = "";

		if (sizeof($params) > 0) {
			$parsedParams = '?' . http_build_query($params);
		}

		$url = "https://www.spaceflightnewsapi.net/api/v2/articles$parsedParams";
		$remoteResponse = \wp_remote_get($url);

		if (is_array($remoteResponse)) {
			$body = json_decode($remoteResponse['body'], true);
		}

		if (!isset($body)) {
			return new \WP_Error('no_news', 'there are no news available', ['status' => 404]);
		}
		$response = new \WP_REST_Response($body);
		$response->set_status(200);

		return $response;
	}
}
