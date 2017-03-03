import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';


export default class LightSwitchOnOff extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      img: 'assets/teacher_tools/lightswitch-on.png',
      isToggled: this.props.isToggled ? this.props.isToggled : false
    };
    this.onAutoOnOff = this.onAutoOnOff.bind(this);
  }

  render() {
    let style = Style.styles();

    return (
      <div className={Style.css(style.settingsMarginLeft, style.settingsMarginRight)}>
        <a onClick={this.onAutoOnOff}>
          <img
            className={Style.css(style.launchOnOff)}
            src={`assets/teacher_tools/${this.state.isToggled ? 'lightswitch-on' : 'lightswitch-off'}.png`}>
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

}//LightSwitchOnOff class
