import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';

const Checkable = (props: any) => {

    const [isChecked, setChecked] = useState(false);

    const toggleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    return (
        <div className="checkable">
            <Checkbox checked={isChecked} onChange={toggleCheck} />
            {props.children}
        </div>
    )
}

export default Checkable
