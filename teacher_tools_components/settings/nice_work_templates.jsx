import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import LightSwitchOnOff  from './lightswitch_on_off.jsx';



export default class NiceWorkTemplates extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let style = Style.styles();

    return (
      <div className={Style.css(style.templatesWindow, style.flexHome, style.facToolsContainer)}>
        <div className={Style.css(style.flexSettings)}>
          <LightSwitchOnOff />
          <p className={Style.css(style.templatePtag)}>Nice Work Templates :</p>
        </div>
        <div className={Style.css(style.settingsMarginRight)}>
          <button className={Style.css(style.templateButtons)}>1st Time</button>
          <button className={Style.css(style.templateButtons)}>2nd Time</button>
          <button className={Style.css(style.templateButtons)}>3rd Time</button>
          <button className={Style.css(style.templateButtons)}>4th Time</button>
        </div>


      </div>

    );//return

  }//render

}//AutoMsgToStudents class
