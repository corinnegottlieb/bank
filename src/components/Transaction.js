import React, {Component} from 'react'

class Transaction extends Component {
    render(){
const data = this.props.data
return (<div className="transaction">
    <div>{data.vendor}</div>
    <div className={this.props.getClassName(data.amount)}>{data.amount}</div>
</div>)
    }}

    export default Transaction