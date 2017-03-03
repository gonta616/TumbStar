'use script';
import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import { Router, Scene, Modal, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

class App extends Component {
    constractor(props){
        super(props);
    }

    render(){
        <RouterWithRedux>
            <Scene key="root">
                <Scene key="tabbar" tabs={true}>
                    <Scene key="BasicComponents" hideNavBar={false} initial={true} component={BasicComponents} title="Basic" icon={TabIcon}/>
                    <Scene key="ApiComponents" hideNavBar={false} component={ApiComponents} title="Api" icon={TabIcon}/>
                    <Scene key="AwesomeLibralies" hideNavBar={false} component={AwesomeLibralies} title="Awesome" icon={TabIcon}/>
                    <Scene key="Hardwares" hideNavBar={false} component={Hardwares} title="Hardwares" icon={TabIcon}/>
                </Scene>
                <Scene key="ImagePage" component={ImagePage} title="ImagePage" icon={TabIcon}/>
            </Scene>
        </RouterWithRedux>
    }
}

export default App;
