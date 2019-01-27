import React, { Component } from 'react';

class InsufficientFunds extends Component {

    render() {
 
        if (this.props.insufficientFunds) {
            return (<div>
                <div>Sorry you have insufficient funds</div>
            </div>)
        }

        else return null
    }
}

export default InsufficientFunds