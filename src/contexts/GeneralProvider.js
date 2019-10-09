import React from 'react';
import AuthContextProvider from './AuthContext';
import ThemeContextProvider from './ThemeContext';
import TaskContextProvider from './TaskContext';


const GeneralProvider = (props) => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <TaskContextProvider>
                {props.children}
                </TaskContextProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}

export default GeneralProvider;