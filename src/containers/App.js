import React, { Component } from 'react';
import Counter from '../components/Counter';
import Banana from '../components/Banana';
import { connect } from 'react-redux';
import { clickBanana } from '../actions';
import { bindActionCreators } from 'redux';

/**
 * The main app
 */
class App extends Component {
  render() {
    return (
        <div>
            <h1>Click on the banana to increment</h1>
            <Counter clicks={this.props.clicks}/>
            <Banana clicks={this.props.clicks}
                    clickBanana={this.props.clickBanana}/>
        </div>
    );
  }
}

/**
 * Maps selected fields from the state to props
 * @param state the application state
 */
function mapStateToProps(state) {
    return {
        clicks: state.clicks
    };
}

/**
 * Maps the actionCreators to props
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clickBanana:clickBanana}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);