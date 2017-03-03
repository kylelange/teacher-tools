import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';



export default class NotificationButtons extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let style = Style.styles();

    return (
      <div className={Style.css(style.flexButtons)}>
        <button className={Style.css(style.notificationButtons)}>Office Hours Invintation</button>
        <button className={Style.css(style.notificationButtons)}>Supplemental Help</button>
      </div>

    );//return

  }//render

}//NotificationButtons class
