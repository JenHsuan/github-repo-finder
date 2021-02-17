import React, {useEffect, createRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Repo = (
    {name, description, url, login, avatar_url} :
    {name: string,
     description: string,
     url: string,
     login: string,
     avatar_url: string}) => {
    return (
        <div>
            <div>name: {name}</div>
            <div>description: {description}</div>
            <div>url: {url}</div>
            <div>login: {login}</div>
            <div>avatar_url: {avatar_url}</div>
        </div>
    )
}

export default Repo
