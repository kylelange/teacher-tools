import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';


export default class ResetToDefault extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.resetDefault = this.resetDefault.bind(this);
  }

  render() {
    let style = Style.styles();

    return (
      <div style={this.props.style} className={Style.css(style.resetToDefault)}>
        <a onClick={this.resetDefault} className={Style.css(style.resetToDefaultAtag)}>Reset to Default</a>
      </div>

    );//return

  }//render

  resetDefault(e) {
    alert('Clicking here will reset settings to default.');
  }

}//ResetToDefault class
