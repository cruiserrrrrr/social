import React from "react";
import Main from "../shared/pages/Main";
import Header from "../shared/components/Header";
import "./App.scss";

function App() {
    return (
        <div className="app">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;