import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import {Link}           from 'react-router';
import {Accordion, AccordionSection} from 'common/react-accordionlly/accordion.js';
import BottomBar        from './bottom_bar.jsx';
import MessagingTeacherOpen from './messaging_teacher_open.jsx';
import CustomMessagesOpen from './custom_messages_open.jsx';



export default class Settings extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      img: 'assets/teacher_tools/horizontal-switch-icon.png',
      isToggled: this.props.isToggled ? this.props.isToggled : true
    };
    this.onAutoOnOff = this.onAutoOnOff.bind(this);
  }

  render() {
    let style = Style.styles();
    let path = `/courses/${this.props.params.courseId}`

    return (
      <div>
        <div className={Style.css(style.flexHome)}>
          <h1 className={Style.css(style.messageSettingsHeader)}>Message Settings</h1>
          <Link to={path}><button className={Style.css(style.settingsButton)}>Faculty Tools</button></Link>
        </div>
        <p className={Style.css(style.settingsDescription)}>Waymaker Faculty Tools send automated messages to your students to help you use your time more effectively in guiding and encouraging students.</p>
        <div className={Style.css(style.flexHome)}>
          <p className={Style.css(style.changesSaved)}>All changes have been saved</p>
          <p className={Style.css(style.autoMsgSettings)}>Auto Msg.<span className={Style.css(style.settingsSwitch)}><a onClick={this.onAutoOnOff}>
            <img
              src={`assets/teacher_tools/${this.state.isToggled ? 'horizontal-switch-icon' : 'off-horizontal'}.png`}>
            </img>
          </a></span></p>
        </div>
        <MessagingTeacherOpen {...this.props} />
        <CustomMessagesOpen {...this.props} />
        <BottomBar />
      </div>

    );//return

  }//render

  onAutoOnOff(e) {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  //NOT YET BEING USED - trying bryan's accordion first
  noticeDismissedToggle(e) {
    this.setState({
      noticeDismissed: !this.state.noticeDismissed
    })
  }

}//Settings class
