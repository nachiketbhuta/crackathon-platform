import React from 'react'

export default function Language(props) {
    return (
        <option value={props.lang}>{props.lang}</option>
    );
}
