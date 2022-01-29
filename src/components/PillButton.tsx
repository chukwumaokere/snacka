import React, { useCallback } from 'react';

type Props = {
    text: string,
    color: string,
    outline: Boolean,
}

function PillButton (props: Props) {
    const outline = props.outline ? 'border-2 border-white ' : '';

    const onClick = useCallback(() => {
        console.log('Clicked', props.text);
    }, []);

    return (
        // eslint-disable-next-line max-len
        <button className={`flex rounded-full items-center text-white whitespace-nowrap px-4 py-1 ${props.color} ${outline}`}
            onClick={onClick}>
            {props.text}
        </button>
    );
}

export default PillButton;
