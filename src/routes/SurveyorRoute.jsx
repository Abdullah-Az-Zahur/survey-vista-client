
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import useRole from '../hooks/useRole'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
const SurveyorRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'surveyor') return children
  return <Navigate to='/dashboard' />
}

export default SurveyorRoute

SurveyorRoute.propTypes = {
  children: PropTypes.element,
}