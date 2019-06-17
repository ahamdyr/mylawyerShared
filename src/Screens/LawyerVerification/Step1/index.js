import Step1 from './Step1'
import {connect} from 'react-redux'

const mapStateToProps =  state => ({

})

const mapDispatchersToProps = dispatch => ({
  //setQuestionBody: (body) => dispatch(setQuestionBody(body)),
})  
export default connect(mapStateToProps, mapDispatchersToProps)(Step1)