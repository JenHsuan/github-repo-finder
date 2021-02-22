import React, {
    useEffect,
    useRef,
    useCallback
} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getRepos, setFilterText } from './actions/action';
import {
    selectFilterText
} from './states/states';

import {
    SearchBarContainerStyle
} from './styles/Style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash.debounce';

type SearchBarType = {
    placeholder: string
}

const SearchBar: React.FC<SearchBarType> = ({placeholder = 'Input keywords'}) => {
    const text = useRef<HTMLInputElement>();
    const disPatch = useDispatch();
    const filterText = useSelector(selectFilterText);
    useEffect(() => {
        text.current.value = filterText;
    },[]);

    const debouncedSearch = useCallback(
		debounce(value => {
            disPatch(getRepos(value));
            disPatch(setFilterText(value));
            console.log('search')
        }, 2500),
		[], // will be created only once initially
	);

    const onChange = e => {
		const { value } = e.target;
        console.log(e)
        if (text.current.value !== filterText) {
            debouncedSearch(value);
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
