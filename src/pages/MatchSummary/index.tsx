import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";

import React from "react";
import "./styles.css";

const MatchSummary: React.FC = () => {
  //const [text] = useState<string>();
  return (
    <IonPage>
      <IonHeader translucent class="page-homems">
        <IonToolbar>
          <IonTitle class="ion-text-center page-headerms">
            Score Cricket
          </IonTitle>
          <IonButtons slot="start">
            <IonMenuButton menu="main-menu"></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent ion-padding fullscreen>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle class="ion-text-center page-header2ms">
              Team A vs TeamB
            </IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle class="ion-text-center page-header3ms">
              MatchSummary
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonGrid>
            {/* row1 -Automatically update*/}
            <IonRow>
              <IonCol className ="rounded-inputms">TeamA</IonCol>
            </IonRow>
            {/* row2 */}
            <IonRow>
              <IonCol className ="rounded-inputms">BATTING</IonCol>
              <IonCol className ="rounded-inputms">BOWLING</IonCol>
            </IonRow>
            {/* row3 */}
            <IonRow>
              <IonCol className ="rounded-inputms"></IonCol>
              <IonCol className ="rounded-inputms"></IonCol>
            </IonRow>
            {/* row6 */}
            <IonRow>
              <IonCol className ="rounded-inputms"></IonCol>
            </IonRow>
            {/* row7 */}
            <IonRow>
              <IonCol className ="rounded-inputms">TeamB</IonCol>
            </IonRow>
            {/* row8 */}
            <IonRow>
              <IonCol className ="rounded-inputms">BATTING</IonCol>
              <IonCol className ="rounded-inputms">BOWLING</IonCol>
            </IonRow>
            {/* row11 */}
            <IonRow>
              <IonCol className ="rounded-inputms"></IonCol>
              <IonCol className ="rounded-inputms"></IonCol>
            </IonRow>
            {/* row12 */}
            <IonRow>
              <IonCol className ="rounded-inputms"></IonCol>
            </IonRow>
            {/* row13 */}
            <IonRow>
              <IonCol className ="rounded-inputms">To Be Announced</IonCol>
            </IonRow>
          </IonGrid>
          <IonButton expand="block" shape="round" color = "success">Share Match</IonButton>
        </IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default MatchSummary;
