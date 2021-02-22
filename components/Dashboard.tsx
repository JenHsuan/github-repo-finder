import React, {
    useEffect,
    useRef,
    useCallback
} from 'react';

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    selectRepos,
    selectFilterText,
    selectShowSpinner
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

 import debounce from 'lodash.debounce';

const Dashboard: React.FC<{}> = () => {
    const repos = useSelector(selectRepos);
    const filterText = useSelector(selectFilterText);
    const showSpinner = useSelector(selectShowSpinner);

    const articleRef = useRef();
    const disPatch = useDispatch();
    //let cnt = useRef(2);
    let observer;
    let cnt = 2;

    const debouncedAppendRepos = useCallback(
		debounce((filterText, cnt) => {
            disPatch(appendRepos(filterText, cnt))
            console.log('search')
        }, 2500),
		[filterText], // will be created only once initially
    );

    useEffect(() => {
        cnt = 2;
        const callback = entries => {
            for (let entry of entries) {
                if (entry.isIntersecting) {
                    // Put image to the state when the target moves in the viewpoint
                    if (filterText !== '') {
                        debouncedAppendRepos(filterText, cnt++);
                        //disPatch(appendRepos(filterText, cnt++))
                        //observer.unobserve(articleRef.current);
                    }
                }
            }
        };
        if(!observer) {
            observer = new window.IntersectionObserver(callback);
        }
        observer.unobserve(articleRef.current);
        observer.observe(articleRef.current)
        //Monitor elements
    }, [filterText]);


    return (
        <>
            <NavBar/>
            <SearchBar placeholder="Type something..."/>
            <ReposContainerStyle variant = 'basic'>
                {showSpinner && (
                    <SpinnerContainerStyle>
                        <Spinner animation="border" role="status"/>
                    </SpinnerContainerStyle>)}
                {!showSpinner && repos && repos.map((repo, index) => {
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
            </ReposContainerStyle>
        </>
    )
}

export default Dashboard
