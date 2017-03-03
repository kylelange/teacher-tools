import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';


export default class RadioButtonsThree extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedRadio: ''
    };
    this.selectedRadioChange = this.selectedRadioChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      selectedRadio: this.props.value2
    });
  }

  render() {
    let style = Style.styles();

    return (
      <div style={this.loadDivStyles()}>
        <p style={this.loadPtagStyles()}>{this.props.message}</p>
        <form>
          <div className="radio">
            <label style={this.loadLabelStyles()}>
              <input
                style={this.loadInputStyles()}
                type="radio"
                value={this.props.value1}
                checked={this.props.checked === this.props.value1}
                onChange={this.props.onChange}
                name={this.props.name}
              />
            {this.props.label1}
            </label>
          </div>
          <div className="radio">
            <label style={this.loadLabelStyles()}>
              <input
                style={this.loadInputStyles()}
                type="radio"
                value={this.props.value2}
                checked={this.props.checked === this.props.value2}
                onChange={this.props.onChange}
                name={this.props.name}
              />
            {this.props.label2}
            </label>
          </div>
          <div className="radio">
            <label style={this.loadLabelStyles()}>
              <input
                style={this.loadInputStyles()}
                type="radio"
                value={this.props.value3}
                checked={this.props.checked === this.props.value3}
                onChange={this.props.onChange}
                name={this.props.name}
              />
            {this.props.label3}
            </label>
          </div>
        </form>
      </div>
    );//return

  }//render

  selectedRadioChange(e) {
    this.setState({
      selectedRadio: e.target.value
    });
  }

  loadDivStyles() {
    return (
      {
        marginLeft: this.props.marginLeft ? this.props.marginLeft : '20px',
        marginBottom: this.props.marginBottom ? this.props.marginBottom: '25px'
      }
    )
  }

  loadPtagStyles() {
    return (
      {
       color: this.props.borderColor ? this.props.borderColor : '#000',
       fontSize: this.props.fontSize ? this.props.fontSize : '18px',
       fontWeight: this.props.fontWeight ? this.props.fontWeight : 'bold',
       marginBottom: this.props.marginBottom ? this.props.marginBottom : '5px'
      }
    )
  }

  loadLabelStyles() {
    return (
      {
        color: this.props.borderColor ? this.props.borderColor : '#000',
        fontSize: this.props.fontSize ? this.props.fontSize : '18px',
        height: this.props.height ? this.props.height : '20px',
        marginBottom: this.props.marginBottom ? this.props.marginBottom : '5px'
      }
    )
  }

  loadInputStyles() {
    return (
      {
        marginRight: this.props.marginRight ? this.props.marginRight : '10px'
      }
    )
  }




}//RadioButtonsThree class
