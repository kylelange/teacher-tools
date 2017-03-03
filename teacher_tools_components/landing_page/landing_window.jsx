import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';


export default class LandingWindow extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let style = Style.styles();

    return (
      <div className={Style.css(style.landingWindow, style.flexHome, style.facToolsContainer)}>
        <p className={Style.css(style.studentP)}>{this.props.desc}</p>
        <a className={Style.css(style.takeActionLink)}>View</a>
      </div>

    );//return

  }//render

}//FirstLaunchNotice class
