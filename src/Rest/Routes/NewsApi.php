<?php

/**
 * NewsApi class.
 *
 * @package Unicorns\Rest\Routes
 */

namespace Unicorns\Rest\Routes;

use UnicornsVendor\EightshiftLibs\Helpers\Components;

/**
 * Class NewsApi
 */
class NewsApi implements GenericApi
{
	private const API_URL = "https://test.spaceflightnewsapi.net/api/v2/articles";

	/**
	 * Generates HTML from
	 *
	 * @param array $data Input data.
	 * @return string Generated HTML
	 */
	private function generateHtml($data)
	{
		$outputHtml = '';

		foreach ($data as $post) {
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
			];

			$outputHtml .= '<div class="block-featured-posts__item">';
			$outputHtml .= Components::render('post-card', $postCardProps);
			$outputHtml .= '</div>';
		}

		return $outputHtml;
	}

	/**
	 * Returns data from an API
	 *
	 * @param mixed $params Input query parameters.
	 * @return \WP_REST_Response|\WP_Error
	 */
	public function getData($params)
	{
		$outputHtml = isset($params['html']);

		if ($outputHtml) {
			unset($params['html']);
		}

		$body = FetchFromExternal::getData(self::API_URL, $params);

		if (!isset($body)) {
			return new \WP_Error('no_news', 'there are no news available', ['status' => 404]);
		}

		if ($outputHtml) {
			return \rest_ensure_response($this->generateHtml($body));
		}

		return \rest_ensure_response($body);
	}
}
