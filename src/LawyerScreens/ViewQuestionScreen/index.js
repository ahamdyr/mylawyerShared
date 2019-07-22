import ViewQuestionScreen from './ViewQuestionScreen'
import {connect} from 'react-redux'


const mapStateToProps =  state => ({
  accessToken: state.accessToken
})

  
const mapDispatchersToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchersToProps)(ViewQuestionScreen)