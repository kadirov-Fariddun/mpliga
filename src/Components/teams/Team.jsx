import React from 'react';
import { Helmet } from 'react-helmet';

export default function Team({ children }) {
    return (
        <>
            <div className="tp">
                <div className="container">
                    {children}
                </div>
            </div>
        </>
    )
}
