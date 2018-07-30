import React from "react";
import { connect } from "react-redux";
import { SEARCH_PERSON_ACTION , VIEW_PERSON_DETAILS_ACTION } from "../Action";

const mapStateToProps = (state) => ({
    searchResult:state.searchResult
});

const mapDispatchToProps = (dispatch)=>{
    return {
        searchPerson:(payload) => (dispatch(SEARCH_PERSON_ACTION(payload))),
        viewDetailsFor:(payload) => (dispatch(VIEW_PERSON_DETAILS_ACTION(payload)))
    };
};

class ConnectListBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchText:""
        }
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(e){
        this.setState({
            searchText:e.target.value
        },()=>{
            this.props.searchPerson({
                name:this.state.searchText
            });
        });
    }

    ViewDetails(id){
        this.props.viewDetailsFor({id:id});
    }
    
    render(){
        
        var allResult = this.props.searchResult.map((item)=>(
            <li key = {item.id} onClick = { ()=>{ this.ViewDetails(item.id) } } >
                <span>{ item.first + " " + item.last }</span>
            </li>
        ));

        if (allResult.length === 0){
            allResult = <li> No Results Found </li>;
        }

        return (
                <div className="list-bar">
                    <header>
                        <h2>List</h2>
                    </header>
                    <div className="search-box">
                        <input type="text" placeholder = "Search" value = { this.state.searchText } onChange = { this.handleChange } />
                    </div>
                    <ul className = "person-list">
                        { allResult }
                    </ul>
                </div>
        );

    }

}

const ListBar = connect(mapStateToProps,mapDispatchToProps)(ConnectListBar);

export default ListBar;