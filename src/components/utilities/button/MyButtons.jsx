import {Component} from "react"
import './MyButtons.css'
class MyButton extends Component{

    render(){
      const {b_name, b_type, b_class, cssStyle,} = this.props
      
      return(
        <button type={b_type} className={`btn btn-${b_class} button1`} style={cssStyle}>{b_name}</button>
      )
    }
  
  }

  export default MyButton;