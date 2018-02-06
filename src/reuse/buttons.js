import React from 'react';

export default function button(props) {
    return (
    <button
    style={{padding: '10px 30px', backgroundColor: 'var(--red)', border: 'none', borderRadius:'5px', marginTop: '20px', marginBottom: '30px',
            color: '#fff', boxShadow: '1px 1px 1px #d3d3d3', cursor: 'pointer',
            }}
    onClick={props.func}
    >
        {props.text}
    </button>)
}