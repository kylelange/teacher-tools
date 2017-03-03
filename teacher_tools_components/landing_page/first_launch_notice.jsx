import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import Tooltip          from 'common/tooltip/tooltip.jsx';
import CloseSvg         from 'svg/close.svg.jsx';

export default class AlertInput extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let style = Style.styles();

    return (
      <div>
        <label htmlFor="faculty" className={Style.css(style.launchInputLabel)}>
          Select Faculty Member :
          <input type="text" name="faculty" />
        </label>
      </div>

    );//return

  }//render

}//AlertInput class

export default class LaunchOnOff extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      hover: false,
      img: 'assets/teacher_tools/horizontal-switch-icon.png',
      isToggled: this.props.isToggled ? this.props.isToggled : false
    };
    this.onAutoOnOff = this.onAutoOnOff.bind(this);
    this.questionHover = this.questionHover.bind(this);
  }

  render() {
    let style = Style.styles();

    return (
      <div>
        <a className={Style.css(style.automatedMessages)}>Automated Messages :</a>
        <a className={Style.css(style.inlineTeacherTools)}><Tooltip message='Waymaker can personalize and send messages to your students automatically on your behalf.  Go to settings to personalize the automated messages that you would like Waymaker to send.' className={Style.css(style.inlineTeacherTools)}><img src='assets/teacher_tools/question-icon.png'></img></Tooltip></a>
        <a onClick={this.onAutoOnOff}>
          <img
            className={Style.css(style.launchOnOff)}
            src={`assets/teacher_tools/${this.state.isToggled ? 'horizontal-switch-icon' : 'off-horizontal'}.png`}>
          </img>
        </a>
      </div>
    );//return

  }//render

  onAutoOnOff(e) {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  questionHover(e) {
    let hover;
    if(e.type === 'mouseenter') {
      hover = true;
    } else if (e.type === 'mouseleave') {
      hover = false;
    }

    this.setState({hover: this.state.hover});
  }

}//LaunchOnOff class

export default class FirstLaunchNotice extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let style = Style.styles();

    return (
      <div className={Style.css(style.launchDiv)}>
        <div className={Style.css(style.flexHome)}>
          <AlertInput />
          <LaunchOnOff />
        </div>
        <a
          onClick={this.props.closeNotice}
          className={Style.css(style.xOut)}>
          <CloseSvg width='32' height='32' color='#fff'/>
        </a>
      </div>

    );//return

  }//render

}//FirstLaunchNotice class
