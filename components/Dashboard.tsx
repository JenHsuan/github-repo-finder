import React, {useEffect, useRef } from 'react';

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    selectRepos,
    selectFilterText,
    selectPageCnt
} from "./states/states";

import {
    ReposContainerStyle,
    SpinnerContainerStyle
} from './styles/Style';

import SearchBar from '../components/SearchBar';
import Repo from '../components/Repo';
import NavBar from '../components/NavBar';
import { Spinner } from 'react-bootstrap';

import {
    appendRepos,
    setPageCnt
 } from './actions/action';

const Dashboard: React.FC<{}> = () => {
    const repos = useSelector(selectRepos);
    const filterText = useSelector(selectFilterText);
    const pageCnt = useSelector(selectPageCnt);

    const articleRef = useRef();
    const disPatch = useDispatch();
    let cnt = useRef(2);
    let observer;

    useEffect(() => {
        const callback = entries => {
            for (let entry of entries) {
                if (entry.isIntersecting) {
                    // Put image to the state when the target moves in the viewpoint
                    if (filterText !== '') {
                        disPatch(appendRepos(filterText, cnt.current++))
                    }
                }
            }
        };

        observer = new window.IntersectionObserver(callback);
        //Monitor elements
    }, [filterText]);


    useEffect(() => {
        observer.observe(articleRef.current)
    },[filterText])

    return (
        <>
            <NavBar/>
            <SearchBar placeholder="Type something..."/>
            <ReposContainerStyle variant = 'basic'>
                {repos && repos.map((repo, index) => {
                    return (
                    <Repo key = {`repo-${index}`}
                        name = {repo.full_name}
                        url = {repo.html_url}
                        description = {repo.description}
                        avatar_url = {repo.owner.avatar_url}
                        watchers = {repo.watchers}
                        forks = {repo.forks}
                        score = {repo.score}/>
                    );
                })}
                <div ref = {articleRef}></div>
                {filterText !== '' && repos && repos.length === 0 && (
                    <SpinnerContainerStyle>
                        <Spinner animation="border" role="status"/>
                    </SpinnerContainerStyle>)}
            </ReposContainerStyle>
        </>
    )
}

export default Dashboard
