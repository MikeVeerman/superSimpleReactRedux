import React, { Component } from 'react';

/**
 * The Banana component. When clicked, it triggers the clickBanana prop function
 */
export default class Banana extends Component {
	render() {
		return (
		    <div>
                <img onClick={event => this.props.clickBanana(this.props.clicks)} src="banana.png" alt="banana"/>
            </div>
        );
    }
}