
import Theme        from '_theme';

export default new class Style extends Theme {
  constructor() {
    super();

    this.style = this.create({
      linkBar: {
      },
      linkbarTitle:{
        color: this.colors().text.info
      },
      linkbarSubtitle:{
        color: this.colors().text.info,
        textDecoration: 'underline',
        fontWeight: '600'
      },
      flexHome: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      flexSettings: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative'
      },
      flexColumn: {
        display: 'flex',
        flexDirection: 'column'
      },
      flexButtons: {
        display: 'flex',
        justifyContent: 'space-around',
      },
      headerText: {
        color: '#007A7C',
        fontSize: '56px',
        margin: '5px 45px'
      },
      settingsButton: {
        background: '#FF9159',
        width: '122px',
        height: '40px',
        margin: '20px 45px',
        padding: '0',
        outlineColor: '#FF9159'
      },
      xOut: {
        position: 'absolute',
        top: '10px',
        right: '10px'
      },
      launchDiv: {
        position: 'relative',
        backgroundColor: '#FF9159',
        height: '88px',
        maxWidth: '100%',
        margin: '0 45px',
        padding: '10px 100px'
      },
      launchInputLabel: {
        color: '#fff',
        fontSize: '18px',
        marginLeft: '10px'
      },
      automatedMessages: {
        color: '#fff',
        fontSize: '18px',
        marginRight: '10px'
      },
      launchOnOff: {
        display: 'block'
      },
      strugglingStudentsWindow: {
        maxWidth: '100%',
        height: '140px',
        border: '3px solid #007A7C',
        margin: '20px 45px 10px 45px'
      },
      facToolsContainer: {
        alignItems: 'center',
      },
      inlineTeacherTools: {
        display: 'inline-block',
      },
      strugglingH2: {
        color: '#FF9159',
        margin: '0 0 -6px 20px',
        verticalAlign: '-6px'
      },
      studentP: {
        color: '#000',
        fontSize: '18px',
        marginLeft: '20px',
        marginBottom: '0'
      },
      takeActionLink: {
        color: '#FF9159',
        fontSize: '18px',
        textDecoration: 'underline',
        marginRight: '20px'
      },
      landingWindow: {
        position: 'relative',
        maxWidth: '100%',
        height: '70px',
        border: '1px solid #007A7C',
        margin: '0 45px 10px 45px',
      },
      endPage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '35px',
        backgroundColor: '#007A7C',
        marginTop: '25px'
      },
      footerLogo: {
        color: '#fff',
        height: '25px',
      },
      secondLaunchDiv: {
        maxHeight: '45px'
      },
      alertIcon: {
        verticalAlign: '-15px',
      },
      autoMsgState: {
        color: '#007A7C',
        fontWeight: 'bold',
        fontSize: '18px'
      },
      autoMsgSpan: {
        color: '#FF9159',
        fontSize: '18px',
        fontWeight: 'initial'
      },
      messageSettingsHeader: {
        color: '#007A7C',
        fontSize: '37px',
        margin: '5px 45px',
      },
      settingsDescription: {
        color: '#000',
        fontSize: '18px',
        margin: '20px 45px'
      },
      changesSaved: {
        color: '#FF9159',
        fontSize: '18px',
        margin: '0 0 10px 45px'
      },
      autoMsgSettings: {
        color: '#007A7C',
        fontWeight: 'bold',
        fontSize: '18px',
        margin: '0 45px 10px 0'
      },
      settingsSwitch: {
        marginLeft: '10px',
      },
      closedBox: {
        maxWidth: '100%',
        height: '70px',
        border: '1px solid #007A7C',
        margin: '10px 45px 10px 45px'
      },
      closedBoxCopy: {
        color: '#000',
        fontSize: '18px',
        margin: '23px 20px',
      },
      arrowRight: {
        alignSelf: 'center',
        margin: '22px 20px',
      },
      labelStyle: {
        color: 'black',
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '20px 10px 0 20px',
      },
      settingsWindow: {
        position: 'relative',
        maxWidth: '100%',
        maxHeight: '100%',
        border: '1px solid #007A7C',
        margin: '0 45px 10px 45px',
        minHeight: '70px'
      },
      customMessageWindow: {
        maxWidth: '100%',
        maxHeight: '100%',
        border: '1px solid #007A7C',
        margin: '20px 45px',
        position: 'relative',
        minHeight: '70px',
      },
      customMessageTitles: {
        fontSize: '18px',
        color: '#000',
        fontWeight: 'bold',
        margin: '20px 10px 10px 20px'
      },
      settingsMarginLeft: {
        marginLeft: '20px'
      },
      settingsMarginRight: {
        marginRight: '20px'
      },
      resetToDefault: {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
      },
      resetToDefaultAtag: {
        color: '#FF9159',
        textDecoration: 'underline',
        fontSize: '18px'
      },
      automatedMsgHeader: {
        color: '#007A7C',
        fontSize: '24px',
        margin: '50px 0 0 20px',
      },
      templatesWindow: {
        position: 'relative',
        maxWidth: '100%',
        height: '100px',
        border: '1px solid #007A7C',
        margin: '10px 20px 10px 20px',
      },
      templateButtons: {
        height: '47px',
        width: '93px',
        fontWeight: 'light',
        backgroundColor: '#fff',
        border:' 1px solid #007A7C',
        color: '#FF9159',
        padding: '0',
        margin: '0',
        letterSpacing: '0.3px',
        marginRight: '5px',
        outlineColor: '#FF9159'
      },
      masteryThresholdPtag: {
        fontSize: '18px',
        color: '#007A7C',
        height: '28px',
        margin: '55px 0 0 120px'
      },
      msgPersonalityPtag: {
        fontSize: '18px',
        color: '#007A7C',
        height: '28px',
        margin: '0 0 0 120px'
      },
      templatePtag: {
        fontSize: '24px',
        color: '#000',
        margin: '0',
        marginTop: '15px',
        height: '40px'
      },
      specialMargin: {
        marginRight: '118px'
      },
      viewSampleMessage: {
        color: '#FF9159',
        textDecoration: 'underline',
        fontSize: '18px',
        marginBottom: '3px'
      },
      notifactionsHeader: {
        color: '#007A7C',
        fontSize: '24px',
        margin: '40px 0 20px 20px',
      },
      notificationsSubHead: {
        color: 'black',
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '0 10px 10px 20px'
      },
      notificationsWindow: {
        maxWidth: '100%',
        maxHeight: '100%',
        border: '1px solid #007A7C',
        margin: '10px 20px 65px 20px',
        paddingTop: '10px',
      },
      personalityLinksDiv: {
        marginTop: '33px',
        position: 'absolute',
        left: '150px'
      },
      personalityExamplesDiv: {
        marginTop: '31px'
      },
      notificationButtons: {
        height: '47px',
        width: '220px',
        fontWeight: 'light',
        backgroundColor: '#fff',
        border:' 1px solid #007A7C',
        color: '#FF9159',
        padding: '0',
        margin: '0',
        letterSpacing: '0.3px',
        margin: '10px 0 20px 0',
        fontSize: '18px'
      },
      masteryThresholdModal: {
        position: 'relative',
        maxHeight: '100%',
        width: '606px',
        backgroundColor: '#007A7C',
        border: '2px solid #FF9159',
        position: 'absolute',
        zIndex: '100',
        top: '20%',
        right: '25%'
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '50',
        background: 'rgba(47,57,68,0.9)',
      },
      modalQuestion: {
        fontSize: '18px',
        color: '#fff',
        margin: '20px 0 5px 20px',
        fontWeight: 'bold',
      },
      modalAnswer: {
        fontSize: '18px',
        color: '#fff',
        margin: '5px 20px 20px 20px',
      },
      showElements: {
        display: 'block',
        position: 'absolute',
        top: '100px',
        left: '100px'
      },
      hideElements: {
        display: 'none'
      }
    });
  }

  styles() {
    return this.style;
  }
}
