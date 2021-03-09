import React from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonMenu, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//pages import
import Starter from './pages/Starter'
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Tabs from './pages/Tabs'
import TeamA from './pages/TeamA'
import TeamB from './pages/TeamB'
import ScoreRecord from './pages/ScoreRecord'
import InningsSummary from './pages/InningsSummary'
import MatchSummary from './pages/MatchSummary'
import MatchDetails from './pages/MatchDetails';
import AddNewMatch from './pages/AddNewMatch';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



const App: React.FC = () => (
  <IonApp>
    
    <IonReactRouter>
    <IonMenu menuId = "main-menu" contentId = "main">
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle className = "menu-header-bg">
              Menu
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className = "menu">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Pre Match
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem><Link className="list" to="/matchDetails">Match Details</Link></IonItem>
          <IonItem><Link className="list" to="/teamA">Team A Details</Link></IonItem>
          <IonItem><Link className="list" to="/teamB">Team B Details</Link></IonItem>
        </IonList>

        <IonHeader >
          <IonToolbar >
            <IonTitle>
              During Match
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem><Link className="list" to="/scoreRecord">Record Score</Link></IonItem>
          <IonItem>Cancel Match</IonItem>
        </IonList>

        <IonHeader >
          <IonToolbar >
            <IonTitle>
              Post Innings
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem><Link className="list" to="/inningsSummary">Innings Summary</Link></IonItem>
          <IonItem><Link className="list" to="/matchSummary">Match Summary</Link></IonItem>
          <IonItem><Link className="list" to="/Menu">Main Menu</Link></IonItem>
          <IonItem>Share Match</IonItem>
          <IonItem>Generate Pdf</IonItem>
          <IonItem>Remove Adds</IonItem>
        </IonList>
        </IonContent>
      </IonContent>
    </IonMenu>
    
      <IonRouterOutlet id = "main">
        <Route exact path="/starter" component={Starter} />
        <Route exact path="/" render={() => <Redirect to="/starter" />} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgot" component={Forgot}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/matchDetails" component={MatchDetails}/>
        <Route exact path="/tabs" component={Tabs}/>
        <Route exact path="/teamA" component={TeamA}/>
        <Route exact path="/teamB" component={TeamB}/>
        <Route exact path="/scoreRecord" component={ScoreRecord}/>
        <Route exact path="/inningsSummary" component={InningsSummary}/>
        <Route exact path="/matchSummary" component={MatchSummary}/>
        <Route exact path="/addNewMatch" component={AddNewMatch}/>
      </IonRouterOutlet>      
    </IonReactRouter>
  </IonApp>
);

export default App;
