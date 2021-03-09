import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import React from "react";
import "./styles.css";

const Starter: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="page-homes">
        <IonToolbar>
          <IonTitle className="ion-text-center page-headers">
            Score Cricket
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen class="page-bodys ioncontent">
        <IonGrid>
          <IonRow className="row">
            <IonCol size = "6">
            <IonButton routerLink="/Register"
                expand="block"
                shape="round"
                color="success">SIGNUP</IonButton>
            </IonCol>
            <IonCol size = "6">
            <IonButton routerLink="/Login"
                expand="block"
                shape="round"
                color="success">SIGNIN</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Starter;
