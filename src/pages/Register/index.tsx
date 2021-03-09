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
  IonButtons,
  IonBackButton,
} from "@ionic/react";
//import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

import React, { useState } from "react";
//import ExploreContainer from '../components/ExploreContainer';
import "./styles.css";
import { Link } from "react-router-dom";
import { toast } from "../../toast";
import { registerUser } from "../../firebaseConfig";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  async function register() {
    //validation
    if (password !== confirmpassword) {
      return toast("password don not match");
    }
    if (username.trim() === "" || password.trim() === "") {
      return toast("username and password are required");
    }

    const res = await registerUser(username, password);
    if (res) {
      toast("you have registred successfully!");
    }
  }
  //const [number, setNumber] = useState<number>();
  return (
    <IonPage>
      <IonHeader class="page-home">
        <IonToolbar>
          <IonTitle class="ion-text-center page-header">Score Cricket</IonTitle>
          <IonButtons slot="start">
          <IonBackButton defaultHref="starter" />
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard class="page-card">
          <IonCardHeader>
            <IonCardTitle class="ion-text-center">SIGN UP</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem class="roundedInput">
              <IonInput
                type="text"
                placeholder="Enter username"
                onIonChange={(e: any) => setUsername(e.target.value)}
              ></IonInput>
            </IonItem>
            <br />
            <IonItem class="roundedInput">
              <IonInput
                type="email"
                placeholder="Enter email"
                onIonChange={(e: any) => setEmail(e.target.value)}
              ></IonInput>
            </IonItem>
            <br />
            <IonItem class="roundedInput">
              <IonInput
                type="password"
                placeholder="Enter password"
                onIonChange={(e: any) => setPassword(e.target.value)}
              ></IonInput>
            </IonItem>
            <br />
            <IonItem class="roundedInput">
              <IonInput
                type="password"
                placeholder="Confirm password"
                onIonChange={(e: any) => setConfirmPassword(e.target.value)}
              ></IonInput>
            </IonItem>            
            <IonButton onClick={register} expand="block" shape="round" color="primary">
              SIGN UP
            </IonButton>
              <IonText class="text-center text">
                Already a member!<Link to="/login">Sign In</Link>
              </IonText>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
