import React from 'react';

import {
    useSelector
} from "react-redux";

import {
    selectRepos,
    selectFilterText
} from "./states/states";

import {
    ReposContainerStyle,
    SpinnerContainerStyle
} from './styles/Style';

import SearchBar from '../components/SearchBar';
import Repo from '../components/Repo';
import NavBar from '../components/NavBar';
import { Spinner } from 'react-bootstrap';

const Dashboard: React.FC<{}> = () => {
    const repos = useSelector(selectRepos);
    const filterText = useSelector(selectFilterText);
    return (
        <>
            <NavBar/>
            <SearchBar placeholder="Type something..."/>
            <ReposContainerStyle variant = 'basic'>
                {repos && repos.map(repo => {
                    return (
                    <Repo name = {repo.full_name}
                        url = {repo.html_url}
                        description = {repo.description}
                        avatar_url = {repo.owner.avatar_url}/>
                    );
                })}
                {filterText !== '' && repos && repos.length === 0 && (
                    <SpinnerContainerStyle>
                        <Spinner animation="border" role="status"/>
                    </SpinnerContainerStyle>)}
            </ReposContainerStyle>
        </>
    )
}

export default Dashboard
