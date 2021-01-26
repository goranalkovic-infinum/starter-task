<?php

/**
 * The class register route for NewsRoute endpoint
 *
 * @package Unicorns\Rest\Routes
 */

declare(strict_types=1);

namespace Unicorns\Rest\Routes;

use Unicorns\Config\Config;
use UnicornsVendor\EightshiftLibs\Rest\Routes\AbstractRoute;
use UnicornsVendor\EightshiftLibs\Rest\CallableRouteInterface;

/**
 * Class NewsRoute
 */
class NewsRoute extends AbstractRoute implements CallableRouteInterface
{
	private const ROUTE_NAME = '/news';

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
		return self::ROUTE_NAME;
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
	 * Callback method for NewsRoute.
	 *
	 * @param \WP_REST_Request $data Data got from endpoint url.
	 * @return \WP_REST_Response|mixed If response generated an error, WP_Error, if response
	 *                                is already an instance, WP_HTTP_Response, otherwise
	 *                                returns a new WP_REST_Response instance.
	 */
	public function routeCallback(\WP_REST_Request $data)
	{
		$params = $data->get_params();

		$api = new NewsApi();

		$data = $api->getData($params);

		return $data;
	}
}
