import React, { useEffect } from 'react';

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    getUsers,
    getData,
    getRepos
} from "./actions/action";

import {
    selectUsers,
    selectData,
    selectRepos
} from "./states/states";

import {
    TemplateStyle,
} from './styles/Style';

type ReduxTesterType = {
    void
}

const ReduxTester: React.FC<ReduxTesterType> = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    useEffect(() => {
        dispatch(getData());
        dispatch(getRepos("ABC"));
    },[]);

    return (
        <TemplateStyle variant='main'>
            <div data-testid="text-content">
                {data}
            </div>
        </TemplateStyle>
    )
}

export default ReduxTester
