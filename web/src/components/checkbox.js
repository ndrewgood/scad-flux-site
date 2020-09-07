import React from 'react'
import '../styles/checkbox.scss'

const checkbox = props => {  
    return (
      <>
        <label className="check body medium" for={props.id}>
            {props.value}
            <input type="checkbox" id={props.id} name={props.id} value={props.value}/>
            <span className="checkmark"></span>
        </label>
      </>
    )
}
  
export default checkbox