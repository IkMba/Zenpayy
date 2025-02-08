import { useDispatch } from "react-redux"
import { setCurrentUser, setIsAuthenticated } from "./registerSlice"
import { useNavigate } from "react-router-dom"

export const useLogout =() => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    dispatch(setCurrentUser(''))
    dispatch(setIsAuthenticated(false))
    navigate('/')
}