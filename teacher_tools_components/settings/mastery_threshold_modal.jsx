import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import CloseSvg         from 'svg/close.svg.jsx';




export default class MasteryThresholdModal extends React.Component {

  constructor(props, context) {
    super(props, context);
    modalHidden: false
  }

  render() {
    let style = Style.styles();

    return (
      <div style={{visibility: this.props.style}}>
        <div className={Style.css(style.modalOverlay)}></div>
        <div className={Style.css(style.masteryThresholdModal)}>
          <a
            onClick={this.props.closeNotice}
            className={Style.css(style.xOut)}>
            <CloseSvg width='32' height='32' color='#fff'/>
          </a>
          <p className={Style.css(style.modalQuestion)}>What is it?</p>
          <p className={Style.css(style.modalAnswer)}>Students who score below the Mastery Threshold on their first
            quiz attempt will be guided to do a targeted review and then
            attempt the quiz a second time.</p>
          <p className={Style.css(style.modalQuestion)}>Why use it?</p>
          <p className={Style.css(style.modalAnswer)}>Students who score below the Mastery Threshold on their first
            quiz attempt will be guided to do a targeted review and then
            attempt the quiz a second time.</p>
          <p className={Style.css(style.modalQuestion)}><img style={{margin: '0 5px 4px 0'}} src='assets/teacher_tools/exclamation-white.png'></img>80% Reccommended</p>
          <p className={Style.css(style.modalAnswer)}>You can change this percentage as often as you like until the
            first student takes an end-of-module summative quiz. After
            that, the threshold cannot be changed.</p>
        </div>
      </div>
    );//return

  }//render

}//MasteryThresholdModal class
