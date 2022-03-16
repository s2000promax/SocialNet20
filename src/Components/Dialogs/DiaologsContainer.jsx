import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {sendMessageCreator} from '../../redux/dialogs-reducer'



import Dialogs from './Diaologs';


let mapStateToProps = (state) => {
return {
    dialogsPage:  state.dialogsPage
      }
}

let mapDispatchToProps = (dispatch) => {
return {
        
        sendMessage: (newMessageBody) => {
                              dispatch( sendMessageCreator(newMessageBody)  );
                               }
       }
}

/*
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
*/

export default compose(
connect(mapStateToProps, mapDispatchToProps), withAuthRedirect
)(Dialogs)