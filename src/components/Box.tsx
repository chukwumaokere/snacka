import React, { useEffect, useState } from 'react';

type Props = {
    m?: string,
    mt?: string,
    mb?: string,
    ml?: string,
    mr?: string,
    mx?: string,
    my?: string,
    className?: string,
    children: React.ReactNode
}
function Box (props: Props) {
    /* const [classes, setMargins] = useState({
        m: props.m,
        mt: props.mt,
        mb: props.mb,
        ml: props.ml,
        mr: props.mr,
        mx: props.mx,
        my: props.my,
    });

    const m = props.m ? ' m-' + props.m : '';
    const mt = props.mt ? ' mt-' + props.mt: '';
    const mb = props.mb ? ' mb-' + props.mb : '';
    const ml = props.ml ? ' ml-' + props.ml : '';
    const mr = props.mr ? ' mr-' + props.mr : '';
    const mx = props.mx ? ' mx-' + props.mx : '';
    const my = props.my ? ' my-' + props.my : '';
    const tclass = props.tclass ? ' ' + props.tclass : ''; */

    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default Box;
