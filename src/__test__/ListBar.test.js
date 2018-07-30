import React from 'react';
import { createStore } from "redux";
import renderer from 'react-test-renderer';

import InitialState from '../InitialState';

import { SEARCH_PERSON_ACTION , VIEW_PERSON_DETAILS_ACTION } from "../Action";

import reducer from '../Reducer';

import ListBar from '../Components/ListBar';

it('ListBar Component list all users', ()=>{
    const store = createStore(reducer,InitialState);
    const ListBarSection = renderer.create(<ListBar store = { store } />).toJSON();
    expect(ListBarSection).toMatchSnapshot(); 
});

it('ListBar Component list searched user', ()=>{
    const store = createStore(reducer,InitialState);
    store.dispatch(SEARCH_PERSON_ACTION({name:"john"}));
    const ListBarSection = renderer.create(<ListBar store = { store } />).toJSON();
    expect(ListBarSection).toMatchSnapshot();
});

