<?php

/**
 * The class register route for NewsRoute endpoint
 *
 * @package Unicorns\Rest\Routes
 */

declare(strict_types=1);

namespace Unicorns\Rest\Routes;

use Unicorns\Config\Config;
use UnicornsVendor\EightshiftLibs\Helpers\Components;
use UnicornsVendor\EightshiftLibs\Rest\Routes\AbstractRoute;
use UnicornsVendor\EightshiftLibs\Rest\CallableRouteInterface;

/**
 * Class NewsRoute
 */
class NewsRoute extends AbstractRoute implements CallableRouteInterface
{

	/**
	 * Method that returns project Route namespace.
	 *
	 * @return string Project namespace UnicornsVendor\for REST route.
	 */
	protected function getNamespace(): string
	{
		return Config::getProjectRoutesNamespace();
	}

	/**
	 * Method that returns project route version.
	 *
	 * @return string Route version as a string.
	 */
	protected function getVersion(): string
	{
		return Config::getProjectRoutesVersion();
	}

	/**
	 * Get the base url of the route
	 *
	 * @return string The base URL for route you are adding.
	 */
	protected function getRouteName(): string
	{
		return '/news';
	}

	/**
	 * Get callback arguments array
	 *
	 * @return array Either an array of options for the endpoint, or an array of arrays for multiple methods.
	 */
	protected function getCallbackArguments(): array
	{
		return [
			'methods' => static::READABLE,
			'callback' => [$this, 'routeCallback'],
			'permission_callback' => '__return_true'
		];
	}

	/**
	 * Method that returns rest response
	 *
	 * @param \WP_REST_Request $request Data got from endpoint url.
	 *
	 * @return \WP_REST_Response|mixed If response generated an error, WP_Error, if response
	 *                                is already an instance, WP_HTTP_Response, otherwise
	 *                                returns a new WP_REST_Response instance.
	 */
	public function routeCallback(\WP_REST_Request $data)
	{
		$params = $data->get_params();

		$returnHtml = false;

		foreach ($params as $name => $value) {
			if ($name != '_limit' && $name != '_start') {
				unset($params[$name]);
			}
			if ($name == 'html') {
				$returnHtml = true;
			}
		}

		$parsedParams = "";

		if (sizeof($params) > 0) {
			$parsedParams = '?' . http_build_query($params);
		}

		$url = "https://test.spaceflightnewsapi.net/api/v2/articles$parsedParams";
		$remoteResponse = \wp_remote_get($url);

		if (is_array($remoteResponse)) {
			$body = json_decode($remoteResponse['body'], true);
		}

		if (!isset($body)) {
			return new \WP_Error('no_news', 'there are no news available', ['status' => 404]);
		}

		if ($returnHtml) {
			$outputHtml = '';

			foreach ($body as $post) {
				$postImage = $post['imageUrl'];

				$postDate = date_create($post['publishedAt']);

				$postTitle = $post['title'];

				$postExcerpt = $post['summary'];

				$postCardProps = [
					'imageUrl' => wp_kses_post($postImage),
					'imageUse' => $postImage ?? true,
					'dateContent' => date_format($postDate, 'j.m.Y @ G:i'),
					'headingContent' => wp_kses_post($postTitle),
					'excerptContent' => wp_kses_post($postExcerpt),
					'tagsContent' => '<li>Prvo</li><li>Drugo</li><li>Trece</li>'
				];

				$outputHtml .= '<div class="block-featured-posts__item">';
				$outputHtml .= Components::render('post-card', $postCardProps);
				$outputHtml .= '</div>';
			}

			return \rest_ensure_response($outputHtml);
		}

		return \rest_ensure_response($body);
	}
}
