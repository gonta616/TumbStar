'use strict';

import React, { Component } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './core/store';

function setup(): ReactClass<{}> {

  /**
   *
   */
    class Root extends Component {
        constractor(props){
            super(props);
        }

        render(){
            return (
            	<Provider store={this.state.store}>
            		<App/>
            	</Provider>
            );
        }
    }
    return Root;
}

module.exports = setup;
