import React, { useEffect } from 'react';

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    getRepos
} from "./actions/action";

import {
    selectRepos
} from "./states/states";

import {
    TemplateStyle,
} from './styles/Style';

import SearchBar from '../components/SearchBar';
import Repo from '../components/Repo';

const Dashboard: React.FC<{}> = () => {
    const repos = useSelector(selectRepos)
    return (
        <>
          <SearchBar placeholder="Input keywords"/>
          {repos && repos.map(repo => {
              return (
                <Repo name = {repo.full_name}
                url = {repo.url}
                description = {repo.description}
                login = {repo.owner.login}
                avatar_url = {repo.owner.avatar_url}/>
              );
          })}
        </>
    )
}

export default Dashboard
