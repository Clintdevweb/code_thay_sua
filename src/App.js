import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import UserProFile from './FormValidation/UserProfile/UserProFile';
import DemoJSS from './JSS_Styled_Component/DemoJSS/DemoJSS';
import ThemeDemo from './JSS_Styled_Component/Themes/ThemeDemo';
import ToDoList from './JSS_Styled_Component/BaiTapStyleComponent/ToDoList/ToDoList';
import BaiTapQuanLy from './BaiTapQuanLy/BaiTapQuanLy';
import DemoHookUseState from './Hook/DemoHookUseState';
import DemoHookUseEffect from './Hook/DemoHookUseEffect';
import DemoUseCallBack from './Hook/DemoUseCallBack';
import DemoHookUseMemo from './Hook/DemoHook UseMemo';
import DemoUseRef from './Hook/DemoUseRef';
import DemoUserReducer from './Hook/DemoUserReducer';
import DemoUserContext from './Hook/DemoUserContext';
import ContextProvider from './Hook/Context/ContextProvider';
import DemoReduxApp from './Hook/DemoReduxApp';
import DemoUseSpring from './Hook/ReactSpring/DemoUseSpring';
import Ex2Spring from './Hook/ReactSpring/Ex2Spring';
import Ex3UseSpring from './Hook/ReactSpring/Ex3UseSpring';
import Ex4UseTrail from './Hook/ReactSpring/Ex4UseTrail';
import Ex5UseTransition from './Hook/ReactSpring/Ex5UseTransition';




export default class App extends Component {
  render() {
    return (
      <ContextProvider>
        {/* <UserProFile /> */}
        {/* <DemoJSS /> */}
        {/* <ThemeDemo /> */}
        {/* <ToDoList /> */}
        {/* <BaiTapQuanLy /> */}
        {/* <DemoHookUseState /> */}
        {/* <DemoHookUseEffect /> */}
        {/* <DemoUseCallBack /> */}
        {/* <DemoHookUseMemo /> */}
        {/* <DemoUseRef /> */}

        {/* <DemoUserReducer /> */}
        {/* <DemoUserContext /> */}
        {/* <DemoReduxApp /> */}
        {/* <DemoUseSpring /> */}
        {/* <Ex2Spring /> */}
        {/* <Ex3UseSpring /> */}
        {/* <Ex4UseTrail /> */}
        <Ex5UseTransition />
      </ContextProvider>
    )
  }
}

