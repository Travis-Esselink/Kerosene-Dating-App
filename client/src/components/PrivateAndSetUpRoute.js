import { Navigate } from 'react-router-dom'

const PrivateAndSetUpRoute = ({ children, authorised, userFetched }) => {
    if (!userFetched) {
      return children
    }
  
    if (!authorised) {
      return <Navigate to="/"/>
    } else if (!authorised.displayName || !authorised.dateOfBirth || !authorised.gender || !authorised.genderPref) {
        return <Navigate to="/profile/edit" />
    }
    return children
  }
  
export default PrivateAndSetUpRoute