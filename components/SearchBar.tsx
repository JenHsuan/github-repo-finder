import React, {useEffect, createRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRepos, setFilterText } from './actions/action';
import {
    selectFilterText
} from './states/states';

import {
    SearchBarContainerStyle
} from './styles/Style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

type SearchBarType = {
    placeholder: string
}

const SearchBar: React.FC<SearchBarType> = ({placeholder = 'Input keywords'}) => {
    const text = createRef<HTMLInputElement>();
    const disPatch = useDispatch();
    const filterText = useSelector(selectFilterText);
    useEffect(() => {
        text.current.value = filterText;
    },[]);

    const onChange = e => {
        console.log(e)
        if (text.current.value !== filterText) {
            disPatch(getRepos(e.target.value));
            disPatch(setFilterText(e.target.value));
        }
    }

    return (
        <SearchBarContainerStyle>
            <FontAwesomeIcon icon={faSearch} />
            <input ref={text} type="text" placeholder={placeholder} onChange={onChange}/>
        </SearchBarContainerStyle>
    )
}

export default SearchBar
