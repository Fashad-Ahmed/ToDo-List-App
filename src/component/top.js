import React from 'react';
import Link from '@material-ui/core/Link';

export default function ButtonLink() {
    return (
        <Link
            component="button"
            variant="body"
            onClick={() => {
                console.info("I'm a button.");
            }}
        >
            <h1 style={{ fontWeight: 'bolder' }}> TO-DO LIST APP </h1>
        </Link>
    );
}