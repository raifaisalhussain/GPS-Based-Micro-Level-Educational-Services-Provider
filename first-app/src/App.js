import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import LogIn from './LogIn';
import Register from './Register';
import AccountType from './AccountType'
import Expertise from "./Expertise";
import GetVerified from "./GetVerified";
import Expertiselevel from "./Expertiselevel";
import StudentProfile from "./StudentProfile";
import StudentInbox from "./StudentInbox";
import Category from "./Category";
import Employment from './Employment';
import Education from './Education';
import Language from './Language';
import Accountprivacy from "./Accountprivacy";
import Hourly_Rate from "./Hourly_rate";
import Titleoverview from "./Titleoverview";
import Profilephoto from './Profilephoto';
import Studentedulevel from "./Studentedulevel";
import Stdreview from "./stdreview";
import StdLocation from './StdLocation';
import StdProfile from './StdProfile'
import course from './course';
import Viewprofile from "./Viewprofile";
import Mycoursecreateabout from './Mycoursecreateabout';
import Tutorinbox from "./Tutorinbox";
import TutionSpecific from "./TutionSpecific";
import Tutionpostotherdetails from "./Tutionpostotherdetails";
import Tutionpostlocation from "./Tutionpostlocation";
import Tutionposting from "./Tutionposting";
import Tutionnotpostyet from "./Tutionnotpostyet";
import Tpsubjectgrade from "./Tpsubjectgrade";
import Tpfav from "./Tpfav";
import LocationPhone from './LocationPhone';
import Tpbrowser from "./Tpbrowser";
import Tpapplications from "./Tpapplications";
import Mycourselocation from "./Mycourselocation";
import Mycoursegoal from './Mycoursegoal';
import MycourseDuration from "./MycourseDuration";
import Mycoursecreate from "./Mycoursecreate";
import Courseview from "./Coursesview";
import ForgetPassword from "./ForgetPassword";
import TEditProfileContact from "./TEditProfileContact";
import TEditProfileEducation from "./TEditProfileEducation";
import TEditProfileLocation from "./TEditProfileLocation";
import TEditProfileExperties from "./TEditProfileExperties";
import Courseenrollmentbrowsecourses from "./Courseenrollmentbrowsecourses";
import Courseenrollmentnotpostedyet from "./Courseenrollmentnotpostedyet";
import Courseenrollmentview from "./Courseenrollmentview";
import TEditProfileAbout from "./TEditProfileAbout";


function App() {
  return (
      <div>
        <Router>

          <Switch>

            <Route exact path="/" component={Register} />
            <Route path="/LocationPhone" component={props => <LocationPhone {...props} />} />
            <Route path="/ForgetPassword" component={props => <ForgetPassword {...props} />} />
            <Route path="/accountprivacy" component={props => <Accountprivacy {...props} />} />
            <Route path="/TEditProfileAbout" component={props => <TEditProfileAbout {...props} />} />
            <Route path="/course" component={props => <course {...props} />} />
            <Route path="/AccountType" component={props => <AccountType {...props} />} />
            <Route path="/Courseenrollmentbrowsecourses" component={props => <Courseenrollmentbrowsecourses {...props} />} />
            <Route path="/Courseenrollmentnotpostedyet" component={props => <Courseenrollmentnotpostedyet {...props} />} />
            <Route path="/TEditProfileContact" component={props => <TEditProfileContact {...props} />} />
            <Route path="/TEditProfileEducation" component={props => <TEditProfileEducation {...props} />} />
            <Route path="/TEditProfileLocation" component={props => <TEditProfileLocation {...props} />} />
            <Route path="/TEditProfileExperties" component={props => <TEditProfileExperties {...props} />} />
            <Route path="/TEditProfileLocation" component={props => <TEditProfileLocation {...props} />} />
            <Route path="/GetVerified" component={props => <GetVerified {...props} />} />
            <Route path="/tutorinbox" component={props => <Tutorinbox {...props} />} />
            <Route path="/StudentInbox" component={props => <StudentInbox {...props} />} />
            <Route path="/TutionSpecific" component={props => <TutionSpecific {...props} />} />
            <Route path="/tutionpostotherdetails" component={props => <Tutionpostotherdetails {...props} />} />
            <Route path="/tutionpostlocation" component={props => <Tutionpostlocation {...props} />} />
            <Route path="/tutionposting" component={props => <Tutionposting {...props} />} />
            <Route path="/tutionposting" component={props => <Tutionposting {...props} />} />
            <Route path="/tutionnotpostyet" component={props => <Tutionnotpostyet {...props} />} />
            <Route path="/tpsubjectgrade" component={props => <Tpsubjectgrade {...props} />} />
            <Route path="/tpfav" component={props => <Tpfav {...props} />} />
            <Route path="/stdreview" component={props => <Stdreview {...props} />} />
            <Route path="/tpbrowser" component={props => <Tpbrowser {...props} />} />
            <Route path="/tpapplications" component={props => <Tpapplications {...props} />} />
            <Route path="/Mycoursecreateabout" component={props => <Mycoursecreateabout {...props} />} />
            <Route path="/mycourselocation" component={props => <Mycourselocation {...props} />} />
            <Route path="/mycoursegoal" component={props => <Mycoursegoal {...props} />} />
            <Route path="/mycourseDuration" component={props => <MycourseDuration {...props} />} />
            <Route path="/mycoursecreate" component={props => <Mycoursecreate {...props} />} />
            <Route path="/Courseview" component={props => <Courseview {...props} />} />
            <Route path="/mycoursecreate" component={props => <Mycoursecreate {...props} />} />
            <Route path="/StudentProfile" component={props => <StudentProfile {...props} />} />
            <Route path="/Courseenrollmentview" component={props => <Courseenrollmentview {...props} />} />
            <Route exact path="/LogIn" component={LogIn} />
            <Route path="/studentedulevel" component={props => <Studentedulevel {...props} />} />
            <Route path="/StdLocation" component={props => <StdLocation {...props} />} />
            <Route path="/StdProfile" component={props => <StdProfile {...props} />} />
            <Route path="/Viewprofile" component={props => <Viewprofile {...props} />} />
            <Route path="/expertise" component={props => <Expertise {...props} />} />
            <Route path="/expertiselevel" component={props => <Expertiselevel {...props} />} />
            <Route path="/category" component={props => <Category {...props} />} />
            <Route path="/education" component={props => <Education {...props} />} />
            <Route path="/employment" component={props => <Employment {...props} />} />
            <Route path="/hourly_rate" component={props => <Hourly_Rate {...props} />} />
            <Route path="/titleoverview" component={props => <Titleoverview {...props} />} />
            <Route path="/profilephoto" component={props => <Profilephoto {...props} />} />
            <Route path="/language" component={props => <Language {...props} />} />
            
          </Switch>

        </Router>
      </div>
  );
}

export default App;
