import React from 'react'
import { NavigationPage } from '../'
import { Filter, UserCard }  from '../../components'
import { Status, Application } from '../../entities/constants'
import './Teammates.css'
const Teammates = props => {
    return (
        <NavigationPage>
            <Filter />
            <div className="user-cards">
                <UserCard name="Anday" status={Status.ActiveNow} time="Local Time 2:30 PM" application={Application.GoogleDocs}/>
                <UserCard name="Anday" status={Status.ActiveNow} time="Local Time 2:30 PM" application={Application.GoogleDocs}/>
                <UserCard name="Anday" status={Status.ActiveNow} time="Local Time 2:30 PM" application={Application.GoogleDocs}/>
                <UserCard name="Anday" status={Status.ActiveNow} time="Local Time 2:30 PM" application={Application.GoogleDocs}/>
                <UserCard name="Anday" status={Status.ActiveNow} time="Local Time 2:30 PM" application={Application.GoogleDocs}/>
                <UserCard name="Anday" status={Status.ActiveNow} time="Local Time 2:30 PM" application={Application.GoogleDocs}/>
                <UserCard name="Anday" status={Status.ActiveNow} time="Local Time 2:30 PM" application={Application.GoogleDocs}/>
                <UserCard name="Anday" status={Status.ActiveNow} time="Local Time 2:30 PM" application={Application.GoogleDocs}/>
                <UserCard name="Anday" status={Status.ActiveNow} time="Local Time 2:30 PM" application={Application.GoogleDocs}/>
            </div>
        </NavigationPage>
    )
}


export default Teammates; 