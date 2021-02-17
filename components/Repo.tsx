import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    RepoStyle,
    RepoImgStyle,
    RepoTextStyle
} from './styles/Style';

type RepoType = {
    name: string,
    description: string,
    url: string,
    avatar_url: string
    watchers: string,
    forks: string,
    score: string,
}

const Repo: React.FC<RepoType> = ({name, description, url, avatar_url, watchers, forks, score}) => {
    return (
        <RepoStyle onClick = {() => window.open(url, '_blank')}>
            <RepoImgStyle variant = 'basic' src={avatar_url} />
            <RepoTextStyle variant = 'title'>{name}</RepoTextStyle>
            <RepoTextStyle variant = 'basic' >watchers: {watchers}</RepoTextStyle>
            <RepoTextStyle variant = 'basic' >forks: {forks}</RepoTextStyle>
            <RepoTextStyle variant = 'subtitle'>{description}</RepoTextStyle>

        </RepoStyle>
    )
}

export default Repo
