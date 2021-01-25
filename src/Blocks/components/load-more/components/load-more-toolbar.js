import React from 'react';
import { ButtonToolbar } from '../../../components/button/components/button-toolbar';

export const LoadMoreToolbar = (attributes) => {
    const {
        setAttributes,
    } = attributes;

    return (
        <Fragment>
            <ButtonToolbar
                {...attributes}
                setAttributes={setAttributes}
            />
        </Fragment>
    );
};
