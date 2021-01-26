<?php

/**
 * An interface for generic APIs.
 *
 * @package Unicorns\Rest\Routes
 */

namespace Unicorns\Rest\Routes;

/**
 * GenericApi Interface.
 */
interface GenericApi
{
	/**
	 * GET method function.
	 *
	 * @param array $params Input query parameters.
	 */
	public function getData($params);
}
