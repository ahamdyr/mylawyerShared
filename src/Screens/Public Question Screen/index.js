import PublicQuestionScreen from './PublicQuestionScreen'
import {connect} from 'react-redux'
// import {
  
// } from '../../Redux/SideMenu/actions'

const mapStateToProps =  state => ({
  isLoggedUser: state.isLoggedUser,
  answers: state.answers,
  attachs: state.attachs
})

  
const mapDispatchersToProps = dispatch => ({
  
})


export default connect(mapStateToProps, mapDispatchersToProps)(PublicQuestionScreen)