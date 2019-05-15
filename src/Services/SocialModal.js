
import Store from '../Redux/Store'
import {openSocialModal, closeSocialModal} from '../Redux/Social Modal/actions'

export const openModal = () => Store.dispatch(openSocialModal())
export const closeModal = () => Store.dispatch(closeSocialModal())



