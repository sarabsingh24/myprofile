import React from 'react';
import './style.css'

export default function Column({ children, column}) {
    return <div className={column}>{children}</div>;
}
