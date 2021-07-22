import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               <ol key="relativeList">
                   <li key="relativeListItem1">ajit</li>
                   <li key="relativeListItem2">anuj</li>
                   <li key="relativeListItem3">rajat</li>
               </ol>
            </div>
        )
    }
}


export default App;
