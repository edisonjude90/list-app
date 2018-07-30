import { SEARCH_PERSON, VIEW_PERSON_DETAILS } from "../Constants";

const rootReducer = (state,action)=> {

    switch (action.type) {
        
        case SEARCH_PERSON:
            const resultSearchBox = state.personList.filter(item => {
                const searchTerm = action.payload.name.toLowerCase();
                if (item.first.toLowerCase().indexOf(searchTerm) >= 0 || item.last.toLowerCase().indexOf(searchTerm) >= 0){
                    return item;   
                }
            });
            return {
                ...state,
                searchResult:resultSearchBox
            }; 
        break;   

        case VIEW_PERSON_DETAILS:
            const resultViewDetails = state.personList.filter(item => {
                if (item.id === action.payload.id){
                    return item;
                }
            });    
            return {
                ...state,
                viewDetails:resultViewDetails[0]
            }
        break;

        default:
            return {
                    ...state,
                    searchResult:state.personList
            };

    }

}

export default rootReducer;