import React from "react";
import { CssBaseline} from '@mui/material';
import AppBars from "./component/Appbars";
import Footer from "./component/Footer";
import Routes from "./routes";
const App = ()=>{
    return (
        <>
            <CssBaseline />
            <AppBars/>
            <Routes/>
            <Footer/>
        </>
    );
}
export default App;