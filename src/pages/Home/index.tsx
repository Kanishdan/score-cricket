import {
  IonContent,
  IonPage
} from "@ionic/react";

import React from "react";
import "./styles.css";

const Home: React.FC = () => {
  //const [text] = useState<string>();
  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen></IonContent>
    </IonPage>
  );
};

export default Home;
