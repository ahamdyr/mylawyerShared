import SelectMajor from './SelectMajor'
import {connect} from 'react-redux'

const mapStateToProps =  state => ({

})

const mapDispatchersToProps = dispatch => ({
  //setQuestionBody: (body) => dispatch(setQuestionBody(body)),
})  
export default connect(mapStateToProps, mapDispatchersToProps)(SelectMajor)