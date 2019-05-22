import SocialScreen from './SocialScreen'
import { connect } from 'react-redux'
import {closeSocialModal, openSocialModal} from '../../Redux/Social Modal/actions'


const mapStateToProps = state => ({
  //socialModalOpen : state.socialModalOpen
})


const mapDispatchersToProps = dispatch => ({
  // closeSocialModal: ()=>{
  //   dispatch(closeSocialModal())
  // },
  // openSocialModal : ()=>{
  //   dispatch(openSocialModal())
  // }
})

export default connect(mapStateToProps, mapDispatchersToProps)(SocialScreen)