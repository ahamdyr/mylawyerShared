
import {connect} from 'react-redux'

import SelectComponent from './SelectComponent'
import {
  getTopicsRequest
} from '../../../Redux/TopicSelect/actions'

const mapStateToProps =  state => ({
  getTopicsSuccess : state.getTopicsSuccess,
  //getTopicsLoading: state.getTopicsLoading
})

  
const mapDispatchersToProps = dispatch => ({
  getTopicsRequest: () => dispatch(getTopicsRequest())
})



export default connect(mapStateToProps, mapDispatchersToProps)(SelectComponent)