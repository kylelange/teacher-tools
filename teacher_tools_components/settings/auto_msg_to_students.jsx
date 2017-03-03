import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import Tooltip          from 'common/tooltip/tooltip.jsx';
import NiceWorkTemplates  from './nice_work_templates.jsx';
import StudyTipsTemplates  from './study_tips_templates.jsx';



export default class AutoMsgToStudents extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let style = Style.styles();

    return (
      <div>
        <p className={Style.css(style.automatedMsgHeader)}>Automated Messages to Students</p>
        <div className={Style.css(style.flexSettings)}>
          <p className={Style.css(style.labelStyle)}>When a student passes the quiz:</p>
          <a style={{marginTop: '20px'}}>
            <Tooltip
              message='When students reach or exceed the mastery threshold on a quiz, this message provides positive reinforcement.  One of four versions is sent no more than once every two weeks to any student.'>
              <img src='assets/teacher_tools/question-icon-green.png'></img>
            </Tooltip>
          </a>
        </div>
        <NiceWorkTemplates />
        <div className={Style.css(style.flexSettings)}>
          <p className={Style.css(style.labelStyle)}>When a student struggles and <span style={{fontStyle: 'italic'}}>did not</span> study :</p>
          <a style={{marginTop: '20px'}}>
            <Tooltip
              message='When a student fails the first quiz and studied less than 25% of the material, this message shares helpful study tips. It is sent no more than once every two weeks to any student.'>
              <img src='assets/teacher_tools/question-icon-green.png'></img>
            </Tooltip>
          </a>
        </div>
        <StudyTipsTemplates />
      </div>
    );//return

  }//render

}//AutoMsgToStudents class
