import React from 'react';
import { LoadMoreEditor as LoadMoreEditorComponent } from '../../../components/load-more/components/load-more-editor';

export const LoadMoreEditor = ({ attributes, setAttributes }) => {
	return (
		<LoadMoreEditorComponent
			{...attributes}
			setAttributes={setAttributes}
		/>
	);
};
