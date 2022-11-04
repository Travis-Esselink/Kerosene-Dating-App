import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children, authorised, userFetched }) => {
    if (!userFetched) {
      return children
    }
      
    if (authorised) {
      return children
    } else {
        return <Navigate to="/"/>
    }
  }
  
export default PrivateRoute