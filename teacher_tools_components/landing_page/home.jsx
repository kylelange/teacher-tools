import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import {Link}           from 'react-router';
import FirstLaunchNotice from './first_launch_notice.jsx';
import StrugglingStudents from './struggling_students.jsx';
import LandingWindow from './landing_window.jsx';
import BottomBar from './bottom_bar.jsx';
import SecondLaunchNotice from './second_launch_notice.jsx';
import TeacherToolSettings from './settings.jsx';


export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      isToggled: this.props.isToggled ? this.props.isToggled : false,
      visits: 0,
      noticeDismissed: false
    };
    this.autoCheck = this.autoCheck.bind(this);
    this.alertCounter = this.alertCounter.bind(this);
    this.noticeDismissedToggle = this.noticeDismissedToggle.bind(this);
  }

  render() {
    let style = Style.styles();
    let path = `/courses/${this.props.params.courseId}/settings`
    
    return (
      <div>
        <div className={Style.css(style.flexHome)}>
          <h1 className={Style.css(style.headerText)}>Faculty Tools</h1>
          <div>
            <p onClick={this.autoCheck}className={Style.css(style.inlineTeacherTools, style.autoMsgState)}>Auto Msg.
              <span className={Style.css(style.autoMsgSpan)}>{this.state.isToggled ? ' ON' : ' OFF'}</span></p>
            <Link to={path}><button className={Style.css(style.settingsButton)}>Settings</button></Link>
          </div>
        </div>
        {this.alertCounter(this.state.visits)}
        <StrugglingStudents />
        <LandingWindow desc='View automated messages sent'/>
        <LandingWindow desc='View individual student histories'/>
        <BottomBar />
      </div>

    );//return

  }//render

  alertCounter(visits) {
    let to_return = null;
    if(visits === 0 && !this.state.noticeDismissed) {
      to_return = <FirstLaunchNotice closeNotice={this.noticeDismissedToggle} />
    } else if(visits === 1 && !this.state.noticeDismissed) {
      to_return = <SecondLaunchNotice closeNotice={this.noticeDismissedToggle} />
    }
    return to_return;
  }

  noticeDismissedToggle(e) {
    this.setState({
      noticeDismissed: !this.state.noticeDismissed
    })
  }

  autoCheck(e) {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

}//Home class
