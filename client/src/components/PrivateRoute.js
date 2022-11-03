import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children, authorised }) => {
    if (authorised) {
      return children
    } else {
        return <Navigate to="/"/>
    }
  }
  
export default PrivateRoute