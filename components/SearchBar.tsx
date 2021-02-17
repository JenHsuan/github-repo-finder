import React, {useEffect, createRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRepos, setFilterText } from './actions/action';
import {
    selectFilterText
} from './states/states';

const SearchBar = ({placeholder = 'Input keywords'}:{placeholder: string}) => {
    const text = createRef<HTMLInputElement>()
    const disPatch = useDispatch();
    const filterText = useSelector(selectFilterText)
    useEffect(() => {
        text.current.value = filterText;
    },[]);

    const onChange = e => {
        if (text.current.value !== filterText) {
            disPatch(getRepos(e.target.value));
            disPatch(setFilterText(e.target.value));
        }
    }

    return (
        <div>
            <input className="article-searchbar" ref={text} type="text" placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default SearchBar
