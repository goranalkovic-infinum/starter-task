<?php

/**
 * The file that is an FetchFromExternal class.
 *
 * @package Unicorns\Rest\Routes;
 */

declare(strict_types=1);

namespace Unicorns\Rest\Routes;

use WP_Error;

/**
 * Class for fetching data from an external source.
 */
class FetchFromExternal
{

	/**
	 * Fetches data from an external source and decodes it.
	 *
	 * @param string $url    URL to fetch from.
	 * @param array  $params Query parameters.
	 * @return array|WP_Error The response or WP_Error on failure
	 */
	public static function getData($url, $params = [])
	{
		$parsedParams = '';

		if (isset($params) && sizeof($params) > 0) {
			$parsedParams = '?' . http_build_query($params);
		}

		$data = \wp_remote_get($url . $parsedParams);

		if (!isset($data)) {
			return new \WP_Error('request_error', "request unsuccessful", ['status' => 400]);
		}

		try {
			return json_decode($data['body'], true);
		} catch (\Throwable $th) {
			return new \WP_Error('request_error', "request wasn't successful", ['status' => 400]);
		}
	}
}
