import React from 'react';
import { createStore } from "redux";
import renderer from 'react-test-renderer';

import InitialState from '../InitialState';
import { VIEW_PERSON_DETAILS } from "../Constants";
import { VIEW_PERSON_DETAILS_ACTION } from "../Action";
import reducer from '../Reducer';

import SearchInfo from '../Components/SearchInfo';

it('SearchInfo Component Displays Users Info', ()=>{
    const store = createStore(reducer,InitialState);
    store.dispatch(VIEW_PERSON_DETAILS_ACTION({id:1}));
    const SearchInfoSection = renderer.create(<SearchInfo store = { store } />).toJSON();
    expect(SearchInfoSection).toMatchSnapshot();
});
