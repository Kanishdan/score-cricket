import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonMenuButton,
    IonButtons,
  } from "@ionic/react";
  
  import React from "react";
  import "./styles.css";
  
  const InningsSummary: React.FC = () => {
    //const [text] = useState<string>();
    return (
      <IonPage>
        <IonHeader translucent class="page-homef">
          <IonToolbar>
            <IonTitle class="ion-text-center page-headerf">Score Cricket</IonTitle>
            <IonButtons slot = "start">
            <IonMenuButton menu = "main-menu">
              </IonMenuButton>
          </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent ion-padding fullscreen>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle class="ion-text-center page-headerf">Team A vs TeamB</IonTitle>
          </IonToolbar>
        </IonHeader>
        </IonContent>
      </IonPage>
    );
  };
  
  export default InningsSummary;
  