import React from 'react'
import '../styles/checkbox.scss'

const checkbox = props => {  
    return (
      <>
        <label className="check body medium" htmlFor={props.id}>
            {props.value}
            <input type="checkbox" 
                   checked={props.checked} 
                   onChange={(e) => props.change(e)}
                   id={props.id} 
                   name={props.id} 
                   value={props.value}/>
            <span className="checkmark"></span>
        </label>
      </>
    )
}
  
export default checkbox