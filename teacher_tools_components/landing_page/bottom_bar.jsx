import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';


export default class BottomBar extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let style = Style.styles();

    return (
      <div className={Style.css(style.endPage)}>
        <img className={Style.css(style.footerLogo)} src='assets/teacher_tools/footerlogo.png'></img>
      </div>

    );//return

  }//render

}//FirstLaunchNotice class
