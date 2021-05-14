import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';

const Checkable = (props: { children: any, onCheck: Function }) => {

  const [isChecked, setChecked] = useState(false);

  const toggleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    props.onCheck(event.target.checked);
  }

  return (
    <div>
      <Checkbox checked={isChecked} onChange={toggleCheck} />
      {props.children}
    </div>
  )
}

export default Checkable
