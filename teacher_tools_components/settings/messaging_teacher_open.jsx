import React            from 'react';
import styles           from '../../scripts/inlineStyles';
import Style            from '_style';
import _                from 'lodash';
import UserStore        from 'stores/alt.user-store.jsx';
import UserActions      from 'actions/alt.user-actions.jsx';
import Tooltip          from 'common/tooltip/tooltip.jsx';
import CloseSvg         from 'svg/close.svg.jsx';
import {Accordion, AccordionSection} from 'common/react-accordionlly/accordion.js';
import CommonInput      from './common_input.jsx';
import RadioButtonsThree from './radio_buttons_three.jsx';
import ResetToDefault   from './reset_to_default.jsx';


export default class MessagingTeacherOpen extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      sections: ['test'],
      "course": {},
      "user": {
        'id': '',
        'email': '',
        'email_signature': '',
        'first_name': '',
        'last_name': '',
        'enrollment': {
          'notification_frequency': null
        }
      },
      resetVis: false,
    }
    this.storeDidChange = this.storeDidChange.bind(this);
    this.showElements = this.showElements.bind(this);
  }

  componentWillMount() {
    UserStore.listen(this.storeDidChange);
    UserActions.load({params: this.props.params});
  }

  render() {
    let style = Style.styles();
    let Sections = this.state.sections;
    console.log('UserStore:',this.state);
    return (
      <div className={Style.css(style.settingsWindow)}>
        <Accordion showAll={false} hTag={'h2'} dividers={false}>
          {Sections.map((section, index) => {
            return (
              <AccordionSection key={index} title={'Messaging teacher'} style={{margin: '20px', color: '#FF9159'}} textStyle={{fontWeight: '400', marginLeft: '20px', fontFamily: 'proxima-nova', textTransform: 'none', fontSize: '18px', letterSpacing: '0em'}} showElements={this.showElements}>
                {/*<a
                  onClick={this.props.closeNotice}
                  className={Style.css(style.xOut)}>
                  <CloseSvg width='32' height='32' color='#FF9159'/>
                </a>*/}
                <div style={{height: '85px'}} className={Style.css(style.flexSettings)}>
                  <CommonInput onChange={this.onInfoChange} value={this.state.user.first_name} name='first_name' label='Messaging Teacher :' width='292px' placeholder={this.state.user.id}/>
                  <a style={{marginTop: '52px'}}>
                    <Tooltip
                      message='All automated messages from this section will come from the selected faculty member.'>
                      <img src='assets/teacher_tools/question-icon-green.png'></img>
                    </Tooltip>
                  </a>
                </div>
                <CommonInput onChange={this.onInfoChange} value={this.state.user.email_signature} name='last_name' label='Full Name :' />
                <CommonInput onChange={this.onInfoChange} value={this.state.user.email} name='email' label='Email :' />
                <div style={{marginTop: '-15px'}} className={Style.css(style.flexSettings)}>
                  <CommonInput onChange={this.onInfoChange} value={this.state.user.email_signature} name='signature_block' label='Signature Block :' width='292px' height='100px' />
                  <a style={{marginTop: '85px'}}>
                    <Tooltip
                      message='This text will automatically appear at the bottom of all your email to provide additional links or contact information.'>
                      <img src='assets/teacher_tools/question-icon-green.png'></img>
                    </Tooltip>
                  </a>
                </div>
                <RadioButtonsThree
                  checked={this.state.user.enrollment.notification_frequency}
                  name='notification_frequency'
                  onChange={this.onRadioChange}
                  message='When to receive email of Faculty Tool recommendations :'
                  label1='Each time a notification is sent'
                  label2='Once a day'
                  label3='Do not send me notifications'
                  value1='each-notification***'
                  value2='daily'
                  value3='do-not-send***'
                  />
                <ResetToDefault style={{visibility: this.state.resetVis ? 'visible' : 'hidden'}}/>
              </AccordionSection>
            )
          })}
        </Accordion>
      </div>

    );//return

  }//render

  componentWillUnmount() {
    UserStore.unlisten(this.storeDidChange);
  }

  storeDidChange(userStore) {
    this.setState({
      user: userStore.user
    })
  }

  showElements(e) {
    this.setState({
      resetVis: !this.state.resetVis
    });
  }

  onInfoChange(e) {
    UserActions.updateUserShallowByKey({
      key: e.target.name,
      value: e.target.value
    })
  }

  onRadioChange(e) {
    UserActions.updateUserEnrollmentByKey({
      key: e.target.name,
      value: e.target.value
    })
  }

}//MessagingTeacherOpen class
