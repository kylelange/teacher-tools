import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import Tooltip          from 'common/tooltip/tooltip.jsx';

export default class CommonInput extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  render() {
    let style = Style.styles();

    return (
      <label style={this.loadLabelStyles()}>
        {this.props.label}
        <input
          name={this.props.name}
          type='text'
          style={this.loadInputStyles()}
          value={this.props.value}
          onChange={this.props.onChange}
          defaultValue={this.props.defaultValue}
        />
      </label>

    );//return

  }//render

  loadInputStyles() {
    return (
      {width: this.props.width ? this.props.width : '232px',
       height: this.props.height ? this.props.height : '37px',
       borderColor: this.props.borderColor ? this.props.borderColor : '#007A7C'
      }
    )
  }

  loadLabelStyles() {
    return ({
      color: this.props.color ? this.props.color : '#000',
      fontSize: this.props.fontSize ? this.props.fontSize : '18px',
      fontWeight: this.props.fontWeight ? this.props.fontWeight : 'bold',
      margin: this.props.margin ? this.props.margin : '20px 10px 0 20px'
    });
  }

}//CommonInput class
