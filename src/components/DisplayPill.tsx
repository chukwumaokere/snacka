import React from 'react';

type Props = {
    text: string,
    color: string,
    outline: Boolean,
}

function DisplayPill (props: Props) {
    const outline = props.outline ? 'border-2 border-white ' : '';
    return (
        // eslint-disable-next-line max-len
        <div className={`flex rounded-full items-center text-white whitespace-nowrap px-4 py-1 ${props.color} ${outline}`}>
            {props.text}
        </div>
    );
}

export default DisplayPill;
