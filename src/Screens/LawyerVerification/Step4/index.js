import Step4 from './Step4'
import {connect} from 'react-redux'

const mapStateToProps =  state => ({

})

const mapDispatchersToProps = dispatch => ({
  //setQuestionBody: (body) => dispatch(setQuestionBody(body)),
})  
export default connect(mapStateToProps, mapDispatchersToProps)(Step4)