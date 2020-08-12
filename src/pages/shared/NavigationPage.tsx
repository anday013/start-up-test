import React from 'react'
import './NavigationPage.css'
import { Navbar, Header } from '../../components'

interface NavigationPageProps {
    children: any
}

const NavigationPage: React.FC<NavigationPageProps> = props => {
    const { children } = props;
    return (
        <div className="page-container">
            <Navbar />
            <Header />
            <div className="page-content">
                {children}
            </div>
        </div>
    )
}


export default NavigationPage