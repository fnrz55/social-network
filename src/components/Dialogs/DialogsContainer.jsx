import { connect } from 'react-redux';
import Dialogs from './Dialogs'
import { withAurhRedirect } from '../../HOC/withAurhRedirect'
import { compose } from 'redux'

compose(connect(),withAurhRedirect)(Dialogs)

export default compose(connect(),withAurhRedirect)(Dialogs)
// let authRedirectComponent=withAurhRedirect(Dialogs)
// const DialogsContainer=connect()(authRedirectComponent)

