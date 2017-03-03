import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import CloseSvg         from 'svg/close.svg.jsx';


export default class SecondLaunchNotice extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let style = Style.styles();

    return (
      <div className={Style.css(style.launchDiv, style.flexHome, style.facToolsContainer)}>
        <div className={Style.css(style.secondLaunchDiv)}>
          <img className={Style.css(style.inlineTeacherTools, style.alertIcon)} src='assets/teacher_tools/alert_icon.png' />
          <p className={Style.css(style.inlineTeacherTools, style.launchInputLabel)}>Some parts of Message Settings still need to be customized.  Head that way.</p>
        </div>
        <a
          onClick={this.props.closeNotice}
          className={Style.css(style.xOut)}>
          <CloseSvg width='32' height='32' color='#fff'/>
        </a>
      </div>

    );//return

  }//render

}//SecondLaunchNotice class
