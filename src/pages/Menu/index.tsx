import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonButton,
} from "@ionic/react";

import React from "react";
import "./styles.css";

const Menu: React.FC = () => {
  //const [text] = useState<string>();
  return (
    <IonPage>
      <IonHeader translucent class="page-homef">
        <IonToolbar>
          <IonTitle class="ion-text-center page-headerf">
            Score Cricket
          </IonTitle>
          <IonButtons slot = "start">
            <IonMenuButton  menu = "main-menu">

            </IonMenuButton>
        </IonButtons>
        </IonToolbar>
        
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonButton routerLink = "./AddNewMatch" color = "primary" className = "button">
          Add New Match
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
