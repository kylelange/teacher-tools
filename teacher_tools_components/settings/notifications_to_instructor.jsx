import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import RadioButtonsThree  from './radio_buttons_three.jsx';
import NotificationButtons  from './notification_buttons.jsx';
import Tooltip          from 'common/tooltip/tooltip.jsx';



export default class NotificationsToInstructor extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let style = Style.styles();

    return (
      <div>
        <p className={Style.css(style.notifactionsHeader)}>Notifictions to Instructor</p>
        <div className={Style.css(style.flexSettings)}>
          <p className={Style.css(style.notificationsSubHead)}>When a struggles <span style={{fontStyle: 'italic'}}>despite</span> studying :</p>
            <a>
              <Tooltip
                message='Waymaker flags students who score below the mastery threshold on their first quiz attempt despite using at least 25% of formative assessments.   We will then send you an email with a suggestion to forward one of the below messages.'>
                <img src='assets/teacher_tools/question-icon-green.png'></img>
              </Tooltip>
            </a>
        </div>
        <div className={Style.css(style.notificationsWindow)}>
          <RadioButtonsThree
            message='Notify Instructor :'
            label1='Each time a student struggles'
            label2='Once a day'
            label3='Do not send notifications'
            value1='each-notification'
            value2='each-day'
            value3='do-not-send'
          />
          <p className={Style.css(style.labelStyle)}>Templates to message students :</p>
          <NotificationButtons />
        </div>
      </div>

    );//return

  }//render

}//NotificationsToInstructor class
