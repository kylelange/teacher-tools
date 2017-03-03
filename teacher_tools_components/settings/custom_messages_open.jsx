import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import CourseStore        from 'stores/alt.course-store.jsx';
import CourseActions      from 'actions/alt.course-actions.jsx';
import CloseSvg         from 'svg/close.svg.jsx';
import CommonInput      from './common_input.jsx';
import Tooltip          from 'common/tooltip/tooltip.jsx';
import RadioButtonsTwo  from './radio_buttons_two.jsx';
import AutoMsgToStudents from './auto_msg_to_students.jsx';
import NotificationsToInstructor from './notifications_to_instructor.jsx';
import ResetToDefault   from './reset_to_default.jsx';
import {Accordion, AccordionSection} from 'common/react-accordionlly/accordion.js';
import AccordionHeader  from 'common/react-accordionlly/accordionHeader.jsx';
import ModalWrapper    from './modalWrapper.jsx';
import MasteryThresholdModal from './mastery_threshold_modal.jsx';




export default class CustomMessagesOpen extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      sections: ['test'],
      course: {},
      modalState: false,
      masteryVis: 'hidden',
      resetVis: false,
    }
    this.storeDidChange = this.storeDidChange.bind(this);
    this.noticeDismissed = this.noticeDismissed.bind(this);
    this.showElements = this.showElements.bind(this);
  }

  componentWillMount() {
    CourseStore.listen(this.storeDidChange);
    CourseActions.load({params: this.props.params});
  }

  render() {
    let style = Style.styles();
    let Sections = this.state.sections;
    console.log('CourseStore:', this.state);
    console.log('Accordion props:', this.props);
    return (
      <div className={Style.css(style.customMessageWindow)}>

      <Accordion showAll={false} hTag={'h2'} dividers={false}>
        {Sections.map((section, index) => {
          return (
            <AccordionSection key={index} title={'Customize messages and notifications'} style={{margin: '20px', color: '#FF9159'}} textStyle={{fontWeight: '400', marginLeft: '20px', fontFamily: 'proxima-nova', textTransform: 'none', fontSize: '18px', letterSpacing: '0em'}} showElements={this.showElements}>
              {/*<a
                onClick={this.props.closeNotice}
                className={Style.css(style.xOut)}>
                <CloseSvg width='32' height='32' color='#FF9159 '/>
              </a>*/}
              <div className={Style.css(style.flexSettings)}>
                <p className={Style.css(style.customMessageTitles)}>Course Dates:</p>
                  <a style={{marginTop: '20px'}}>
                    <Tooltip
                      message='Indicate your course start and end dates below.  Waymaker creates recommendations and sends messages for the course between these dates.'>
                      <img src='assets/teacher_tools/question-icon-green.png'></img>
                    </Tooltip>
                  </a>
              </div>
              <CommonInput defaultValue={'foo'} label='Start :' margin='20px 10px 0 30px' width='124px' className={Style.css(style.labelStyle)} />
              <CommonInput defaultValue={'foo'} label='End :' margin='20px 10px 0 30px' width='124px' className={Style.css(style.labelStyle)} />
              <div className={Style.css(style.flexSettings)}>
                <CommonInput defaultValue={'foo'} label='Mastery Threshold :' margin='20px 10px 0 20px' width='57px' className={Style.css(style.labelStyle)} />
                <a style={{marginTop: '52px', position: 'absolute', left: '100px'}}>
                  <Tooltip
                    message='**A modal window (z-index popup?) goes here becasue the info is too much for Tooltip.**'>
                    <img src='assets/teacher_tools/question-icon-green.png'></img>
                  </Tooltip>
                </a>
                <a onClick={()=>this.setState({masteryVis: 'visible'})} className={Style.css(style.masteryThresholdPtag, style.viewSampleMessage)}>*80% reccommended</a>
              </div>
              <div className={Style.css(style.flexSettings)}>
                <RadioButtonsTwo
                  checked={this.state.course.first_name}
                  name='message_personality'
                  onChange={this.onRadioChange}
                  message='Default Message Personality :'
                  label1='Coach'
                  label2='Advisor'
                  value1='coach'
                  value2='advisor'
                  />
                <div className={Style.css(style.flexColumn, style.personalityLinksDiv)}>
                  <ModalWrapper linkText="View Sample Message" >
                      <div className="row">
                          <div className="small-12 columns">
                              <h2>Coach Personality</h2>

                              <p>These messages illustrate the "Coach" personality.</p>
                          </div>
                      </div>
                      <hr aria-hidden={true} />
                      <div className="row">
                          <div className="small-12 columns">
                              <div className="row">
                                  <div className="small-1 columns">
                                      <label className="right" htmlFor="message">Subject:</label>
                                  </div>
                                  <div className="small-11 columns">
                                      <div className="small-12 columns" style={styles.getStyles(['border'], {marginBottom: ".5rem", fontSize: "13px", lineHeight:"1.5em", paddingTop: "0.5em", paddingBottom:"0.5em"})}>
                                          Practice Makes Perfect!
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="small-12 columns">
                              <div className="row">
                                  <div className="small-1 columns">
                                      <label className="right" htmlFor="message">Message:</label>
                                  </div>
                                  <div className="small-11 columns">
                                      <div className="small-12 columns" style={styles.getStyles(['border'], {fontSize: "13px", lineHeight:"1.5em", paddingTop: "0.5em", paddingBottom:"0.5em"})}>
                                          Hi Jose! I see that you just attempted the History of Ancient Greece Quiz but didn't do very well. I know that can be really frustrating! Sorry. It also looks like you're not using many of the Self Checks in the readings. Have you seen these? The Self Checks are the small practice quizzes at the end of each section. These DO NOT count toward your grade - they're just there to give you a chance to practice and see if you're "getting it" while you're studying.<br /><br />As you go back through the readings to study for your second attempt on the quiz, make sure to take the Self Checks. They'll help you know when you're ready to take the quiz again. All your hard work and preparation will pay off with an upgraded quiz grade next time!<br /><br />As always, let me know if there's anything I can do to help as you prepare for the quiz!<br /><br/>
                                          <div></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <hr aria-hidden={true} />
                       <div className="row">
                          <div className="small-12 columns">
                              <div className="row">
                                  <div className="small-1 columns">
                                      <label className="right" htmlFor="message">Subject:</label>
                                  </div>
                                  <div className="small-11 columns">
                                      <div className="small-12 columns" style={styles.getStyles(['border'], {marginBottom: ".5rem", fontSize: "13px", lineHeight:"1.5em", paddingTop: "0.5em", paddingBottom:"0.5em"})}>
                                          Fantastic!
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="small-12 columns">
                              <div className="row">
                                  <div className="small-1 columns">
                                      <label className="right" htmlFor="message">Message:</label>
                                  </div>
                                  <div className="small-11 columns">
                                      <div className="small-12 columns" style={styles.getStyles(['border'], {fontSize: "13px", lineHeight:"1.5em", paddingTop: "0.5em", paddingBottom:"0.5em"})}>
                                          Jamal, that was fantastic work on the History of Ancient Greece Quiz! Keep up the good work!<br /><br/>
                                          <div></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </ModalWrapper>
                  <ModalWrapper linkText="View Sample Message">
                      <div className="row">
                          <div className="small-12 columns">
                              <h2>Advisor Personality</h2>

                              <p>These messages illustrate the "Advisor" personality.</p>
                          </div>
                      </div>
                      <hr aria-hidden={true}/>
                      <div className="row">
                          <div className="small-12 columns">
                              <div className="row">
                                  <div className="small-1 columns">
                                      <label className="right" htmlFor="message">Subject:</label>
                                  </div>
                                  <div className="small-11 columns">
                                      <div className="small-12 columns" style={styles.getStyles(['border'], {marginBottom: ".5rem", fontSize: "13px", lineHeight:"1.5em", paddingTop: "0.5em", paddingBottom:"0.5em"})}>
                                          Preparing for your second attempt on the Ancient Greece Quiz
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="small-12 columns">
                              <div className="row">
                                  <div className="small-1 columns">
                                      <label className="right" htmlFor="message">Message:</label>
                                  </div>
                                  <div className="small-11 columns">
                                      <div className="small-12 columns" style={styles.getStyles(['border'], {fontSize: "13px", lineHeight:"1.5em", paddingTop: "0.5em", paddingBottom:"0.5em"})}>
                                          Spencer,<br />As you prepare for your second attempt on the History of Ancient Greece Quiz, allow me to remind you about the Self Checks embedded throughout the course readings. The Self Checks are the small practice quizzes at the end of each section. These do not count toward your grade. They're provided to give you a chance to practice what you're learning and see if you're "getting it" before you take the quiz.<br /><br />Please make use of the Self Checks as you study for the History of Ancient Greece Quiz and all the other quizzes in the course. They'll help you know when you're ready to move on and take the quiz. The Self Checks will make your study last a little longer, but this investment of additional effort will pay off when you take the quiz again.<br /><br />Please don't hesitate to contact me if I can be helpful as you prepare for the quiz.<br /><br/>
                                          <div></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <hr aria-hidden={true}/>
                       <div className="row">
                          <div className="small-12 columns">
                              <div className="row">
                                  <div className="small-1 columns">
                                      <label className="right" htmlFor="message">Subject:</label>
                                  </div>
                                  <div className="small-11 columns">
                                      <div className="small-12 columns" style={styles.getStyles(['border'], {marginBottom: ".5rem", fontSize: "13px", lineHeight:"1.5em", paddingTop: "0.5em", paddingBottom:"0.5em"})}>
                                          Well done
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="small-12 columns">
                              <div className="row">
                                  <div className="small-1 columns">
                                      <label className="right" htmlFor="message">Message:</label>
                                  </div>
                                  <div className="small-11 columns">
                                      <div className="small-12 columns" style={styles.getStyles(['border'], {fontSize: "13px", lineHeight:"1.5em", paddingTop: "0.5em", paddingBottom:"0.5em"})}>
                                          Tanya, well done on the History of Ancient Greece Quiz. Keep up the good work.<br /><br/>
                                          <div></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </ModalWrapper>
                </div>
                <div className={Style.css(style.flexColumn, style.personalityExamplesDiv)}>
                  <p onClick={this.viewSampleMessage} className={Style.css(style.msgPersonalityPtag)}>"Learning!  You can do it!"</p>
                  <p onClick={this.viewSampleMessage} className={Style.css(style.msgPersonalityPtag)}>Just the facts.</p>
                </div>
              </div>
              <AutoMsgToStudents />
              <NotificationsToInstructor />
              <MasteryThresholdModal style={this.state.masteryVis} closeNotice={this.noticeDismissed}/>
              <ResetToDefault style={{visibility: this.state.resetVis ? 'visible' : 'hidden'}}/>
            </AccordionSection>
            )
          })}
        </Accordion>
      </div>
    );//return

  }//render

  componentWillUnmount() {
    CourseStore.unlisten(this.storeDidChange);
  }

  storeDidChange(courseStore) {
    this.setState({
      course: courseStore.course
    });
  }

  toggleModal(e) {
    this.setState({
      modalState: !this.state.modalState
    });
  }

  noticeDismissed(e) {
    this.setState({
      masteryVis: 'hidden'
    })
  }

  showElements(e) {
    this.setState({
      resetVis: !this.state.resetVis
    });
  }

  // showElementsPsudo(e) {
  //
  //   let to_return = null;
  //   if(<Accordion showAll={false} />) {
  //     this.setState({
  //       resetVis: false
  //     });
  //   } else if(<Accordion showAll={true} />) {
  //     this.setState({
  //       resetVis: true
  //     });
  //   }
  // }

  onInfoChange(e) {
    CourseActions.updateCoursePersonalityByKey({
      key: e.target.name,
      value: e.target.value
    })
  }

  onRadioChange(e) {
    CourseActions.updateCourseNotificationsByKey({
      key: e.target.name,
      value: e.target.value
    })
  }

}//MessagingTeacherOpen class
