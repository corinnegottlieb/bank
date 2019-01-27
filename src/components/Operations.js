import React, { Component } from 'react'
import InsufficientFunds from './InsufficientFunds';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: ""
        }

    }

    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    pushTransaction = async (event) => {
        if (event.target.name === "deposit") {
            this.props.pushTransaction(this.state)
            this.props.changeStatus(true)
        }
        else if (event.target.name === "withdraw" && this.props.balance - this.state.amount < -500) {
            this.props.changeStatus(false)
        }
        else {

            await this.setState({
                amount: `-${this.state.amount}`
            })
            this.props.pushTransaction(this.state)
            this.props.changeStatus(true)
        }
    }

    render() {
        return (<div id="transactions">
            <input name="amount" value={this.state.amount} onChange={this.updateState} type="text" placeholder="Amount"></input>
            <input name="vendor" value={this.state.vendor} onChange={this.updateState} type="text" placeholder="Vendor"></input>
            <input name="category" value={this.state.category} onChange={this.updateState} type="text" placeholder="Category"></input>
            <button onClick={this.pushTransaction} name="deposit">Deposit</button>
            <button onClick={this.pushTransaction} name="withdraw">Withdraw</button>
            <InsufficientFunds insufficientFunds={this.props.insufficientFunds} />
        </div>)
    }
}

export default Operations