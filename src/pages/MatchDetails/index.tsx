import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonMenuButton,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
// import *as firebase from 'firebase'
// import {config} from '../../firebaseConfig'
import React from "react";
import "./styles.css";
const MatchDetails: React.FC = () => {
  //const [text] = useState<string>();
  return (
    <IonPage>
      <IonHeader translucent class="page-homem">
        <IonToolbar>
          <IonTitle class="ion-text-center page-headerm">Score Cricket</IonTitle>
          <IonButtons slot = "start">
          <IonMenuButton menu = "main-menu">
            </IonMenuButton>
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent ion-padding fullscreen>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle class="ion-text-center page-header2m">More Details</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonGrid>
        <IonRow>
          <IonCol className="label">
          Tournament:
          </IonCol>
          <IonCol className="">
          <IonInput class="roundedInputm ion-text-left" type="text" placeholder="Enter tournament"></IonInput>    
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="">
          Match Type:
          </IonCol>
          <IonCol className="">
          <IonSelect class = "ion-text-left" interfaceOptions={Option}>
                  <IonSelectOption selected-text value="brown">T-20</IonSelectOption>
                  <IonSelectOption value="blonde">ODI</IonSelectOption>
                  <IonSelectOption value="black">Custom</IonSelectOption>
                </IonSelect>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="">
          No of Overs:
          </IonCol>
          <IonCol className="">
          <IonInput class="roundedInputm ion-text-left" type="text" placeholder=""></IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="">
          Location:
          </IonCol>
          <IonCol className="">
          <IonInput class="roundedInputm ion-text-left" type="text" placeholder="Enter Location"></IonInput>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="">
          Date of Match:
          </IonCol>
          <IonCol className="">
          <IonDatetime displayFormat="D MMM YYYY H:mm" class = "ion-text-left" value="" display-timezone="utc"></IonDatetime>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="">
          Team A Name:
          </IonCol>
          <IonCol className="">
          <IonInput class="roundedInputm ion-text-left" type="text" placeholder="Enter 1st Team Name"></IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="">
          Team B Name:
          </IonCol>
          <IonCol className="">
          <IonInput className="roundedInputm ion-text-left" type="text" placeholder="Enter 1st Team Name"></IonInput>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonButton expand="block"
              shape="round"
              color="primary" >UPDATE DATA</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default MatchDetails;
