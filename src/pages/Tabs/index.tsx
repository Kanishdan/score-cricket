
import React from 'react';
import { IonTabs, IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel} from '@ionic/react';
//import { exit } from 'process';
import './styles.css';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Menu from '../Menu';
import Home from '../Home';
import MatchDetails from '../MatchDetails';
export const Tabs: React.FC = () => (
  <IonApp>
  <IonReactRouter>
  <IonHeader translucent class="page-homef">
      <IonToolbar>
        <IonTitle class="ion-text-center page-headerf">Score Cricket</IonTitle>
      </IonToolbar>
  </IonHeader>
    <IonContent>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Home" component={Home} exact />
          <Route path="/Menu" component={Menu} exact />
          <Route path="/MatchDetails" component={MatchDetails} exact />
          {/* <Route path="/History" component={History} exact /> */}
          <Redirect from="/Login" to="/Home" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Menu" href="/Menu">
            <IonLabel>Menu</IonLabel>
          </IonTabButton>
          <IonTabButton tab="" href="/MatchDetails">
            <IonLabel>History</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonContent>
  </IonReactRouter>
</IonApp>
);

export default Tabs;