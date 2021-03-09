import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonInput,
  IonText,
  IonApp,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

import React, { useState } from "react";
import "./styles.css";

// import { Link } from "@reach/router";

// const PasswordReset = () => {
//   const [email, setEmail] = useState("");
//   const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
//   const [error, setError] = useState(null);
//   const onChangeHandler = event => {
//     const { name, value } = event.currentTarget;
//     if (name === "userEmail") {
//       setEmail(value);
//     }
//   };
//   const sendResetEmail = event => {
//     event.preventDefault();
//   };


const Forgot: React.FC = () => {
  const [text] = useState<string>();
  return (
    <IonApp>
      <IonPage>
        <IonHeader translucent class="page-homef">
          <IonToolbar>
            <IonTitle class="ion-text-center page-headerf">
              Score Cricket
            </IonTitle>
            <IonButtons slot="start">
          <IonBackButton defaultHref="starter" />
        </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" fullscreen>
          <IonCard class="page-cardf">
            <IonCardHeader>
              <IonCardTitle class="ion-text-center">
                Forgot Password
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonText class="text-center paragraph">
                Enter your email to receive an email to reset your password.
              </IonText>
              <br />
              <br />
              <IonItem class="roundedInputf">
                <IonInput
                  type="text"
                  value={text}
                  placeholder="Correct email"
                ></IonInput>
              </IonItem>
              <br />
              <IonButton expand="block" shape="round" color="primary">
                SEND
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Forgot;
