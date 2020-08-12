import React, { useState } from 'react'
import './Filter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchForm = props => {
    const [searchValue, setSearchValue] = useState('');
    const formHandler = (value: string) => {
        setSearchValue(value)
    }
    return (
        <form>
            <input className="search-input" type="text" placeholder="Search" onChange={(event) => formHandler(event.target.value)} value={searchValue}/>
            <FontAwesomeIcon icon={faSearch} color="#eee" size="sm" />
        </form>
    )
}

const Filter = props => {
    return (
        <div className="filter-container">
            <div className="filter-top">
                <h1>Teammates</h1>
                <SearchForm />
            </div>
            <hr />
            <div className="filter-down">
                <select className="select-active">
                    <option value="active">Active</option>
                </select>
                <select className="select-active">
                    <option value="active">Active</option>
                </select>
                <select className="select-active">
                    <option value="active">Active</option>
                </select>
                <select className="select-active">
                    <option value="active">Active</option>
                </select>
            </div>
        </div>
    )
}


export default Filter; 