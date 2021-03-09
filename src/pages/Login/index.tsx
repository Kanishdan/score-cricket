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
  IonBackButton,
  IonButtons
} from "@ionic/react";

import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { loginUser } from "../../firebaseConfig";
import { toast } from "../../toast";
//import Tabs from './Tabs';
// import AuthContext from "../my-context";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  // const { loginUser } = React.useContext(AuthContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(this: any) {
    const res = await loginUser(username, password);
    if (res) {
      toast("You have logged in!");
      history.replace("/Menu");
    }
  }
  return (
    <IonPage>
      <IonHeader translucent class="page-home1">
        <IonToolbar>
          <IonTitle class="ion-text-center page-header1">
            Score Cricket
          </IonTitle>
          <IonButtons slot="start">
          <IonBackButton defaultHref="starter" />
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonCard class="page-card1">
          <IonCardHeader>
            <IonCardTitle class="ion-text-center">SIGN IN</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonText class="text-center heading">
              Hello there, Welcome back
            </IonText>
            <br />
            <br />
            <IonItem class="roundedInput1">
              {/* <IonLabel  position="floating">Username:</IonLabel> */}
              <IonInput
                type="text"
                placeholder="Enter username"
                onIonChange={(e: any) => setUsername(e.target.value)}
              ></IonInput>
            </IonItem>
            <br />
            <IonItem class="roundedInput1">
              {/* <IonLabel  position="floating">Password:</IonLabel> */}
              <IonInput
                type="password"
                placeholder="Enter password"
                onIonChange={(e: any) => setPassword(e.target.value)}
              ></IonInput>
            </IonItem>

            <IonButton
              onClick={login}
              expand="block"
              shape="round"
              color="primary"
            >
              SIGN IN
            </IonButton>
            <Link to="/forgot">Forgot password?</Link>

            <br />
            <IonItem>
              <IonText class="ion-text-center text2">
                I don't have an account? <Link to="/register">Sign up</Link>
              </IonText>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
