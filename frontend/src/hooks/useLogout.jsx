import { useAuthContext } from "./useAuthContext"
import { useTaskContext } from "./useTasksContext"
export const  useLogout=()=>{
    const {dispatch}=useAuthContext()
    const {dispatch:tasksDispatch}=useTaskContext()
    const logout =()=>{
        
        //remove user from storage
        localStorage.removeItem('user')

        dispatch({type:'LOGOUT'})
        workoutsDispatch({type:'SET_TASKS',payload:null})

    }
    return {logout}
    
}