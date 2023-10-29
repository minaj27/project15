export const greetReducer=(state={greet:"Good Morning",fruit:"Apple"},action)=>{
    switch(action.type){
        case "GREETING":
            return{
                ...state,
                greet:action.payload
            }
            case "ADDFRUIT":
                return{
                    ...state,
                    fruit:action.payload
                }
    }
    return state

}