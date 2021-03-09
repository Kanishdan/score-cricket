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
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonModal,
  IonText,
  IonCardTitle,
} from "@ionic/react";

import React, { useState } from "react";
import "./styles.css";
// import { Chart } from "chart.js";
//import firebase from '../../firebaseConfig'
const ScoreRecord: React.FC = () => {
  //const [text] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const [NB] = useState();
  const [WB] = useState();
  const [B] = useState();
  const [LB] = useState();
  const [num1] = useState();
  const [num2] = useState();
  const [num3] = useState();
  const [num4] = useState();
  const [num5] = useState();
  const [num6] = useState();
  const [num0] = useState();
  const [Overthrow] = useState();
  const [Out] = useState();
  const [Del] = useState();
  const [G] = useState();
  const [Correct] = useState();
  
  return (
    <IonPage>
      <IonHeader class="page-homesr">
        <IonToolbar>
          <IonTitle class="ion-text-center page-headerdr">
            Score Cricket
          </IonTitle>
          <IonButtons slot="start">
            <IonMenuButton menu="main-menu"></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent ion-padding fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle class="ion-text-center page-header2sr">
              Team A vs TeamB
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Automatically update innings team header */}
        <IonHeader>
          <IonToolbar>
            <IonTitle class="ion-text-center page-header3sr">
              TeamA Innings
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="contentsr">
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                {/* runs/wickets */}
                <IonRow>
                  <IonCol>
                    <IonCard className="runs-cardsr">56/1</IonCard>
                  </IonCol>
                </IonRow>
                {/* Overs */}
                <IonRow>
                  <IonCol>
                    <IonCard className="runs-cardsr">3.5 overs</IonCard>
                  </IonCol>
                </IonRow>
              </IonCol>
              {/* runs chart*/}
              <IonCol>

                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Score chart Over wise</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    {/* <canvas #barCanvas></canvas> */}
                  </IonCardContent>
                </IonCard>
                
              </IonCol>
            </IonRow>
            {/* BatsMen*/}
            <IonRow>
              <IonCol size="4">BatsMen</IonCol>
              <IonCol>R</IonCol>
              <IonCol>B</IonCol>
              <IonCol>4s</IonCol>
              <IonCol>6s</IonCol>
              <IonCol>SR</IonCol>
            </IonRow>
            {/* Player one records */}
            <IonRow>
              {/* Automatically add Player - 1 */}
              <IonCol size="4">
                <IonInput
                  disabled
                  class="roundedInpusr ion-text-letf"
                  type="text"
                  value="Player-A:1"
                ></IonInput>
              </IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
            </IonRow>

            {/* Player two records */}
            <IonRow>
              {/* Automatically add Player - 2 */}
              <IonCol size="4">
                <IonInput
                  disabled
                  class="roundedInpusr ion-text-letf"
                  type="text"
                  value="Player-A:2"
                ></IonInput>
              </IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="4">Bowler</IonCol>
              {/* Extra run identifier */}
              <IonCol size=""></IonCol>
            </IonRow>

            <IonRow>
              {/* Automatically add Bowlers */}
              <IonCol size="4">
                <IonInput
                  disabled
                  class="roundedInpusr ion-text-letf"
                  type="text"
                  value="Player-B:1"
                ></IonInput>
              </IonCol>
              {/* Automatically add scores */}
              <IonCol size=""></IonCol>
            </IonRow>

            <IonRow></IonRow>

            {/* score selecting Card */}
            <IonRow>
              <IonCard className="cardsr">
                <IonCardHeader>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="6">
                        <IonCard className="cardTitle">Update Scores </IonCard>
                      </IonCol>
                      <IonCol>
                        <IonCard
                          className="cardTitle"
                          onClick={() => setShowModal(true)}
                        >
                          Special Cases
                        </IonCard>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardHeader>

                <IonCardContent ion-padding>
                  <IonGrid>
                    <IonRow>
                      <IonCol className="score-selector" size="1.5">
                        <IonInput disabled className = "col-centered" value = {NB}>NB</IonInput>
                      </IonCol>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {WB}>WB</IonInput>
                      </IonCol>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {B}>B</IonInput>
                      </IonCol>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {LB}>LB</IonInput>
                      </IonCol>
                      <IonCol className="score-selector">
                      <IonInput disabled className = "col-centered" value = {Overthrow}>Overthrow</IonInput>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {num1}>1</IonInput>
                      </IonCol>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {num2}>2</IonInput>
                      </IonCol>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {num3}>3</IonInput>
                      </IonCol>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {num4}>4</IonInput>
                      </IonCol>
                      <IonCol className="score-selector">
                      <IonInput disabled className = "col-centered" value = {Out}>Out!</IonInput>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {Del}>Del</IonInput>
                      </IonCol>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {num0}>0</IonInput>
                      </IonCol>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {num5}>5</IonInput>
                      </IonCol>
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {num6}>6</IonInput>
                      </IonCol>
                      {/* Ground */}
                      <IonCol className="score-selector" size="1.5">
                      <IonInput disabled className = "col-centered" value = {G}>G</IonInput>
                      </IonCol>
                      {/* Score correct(updated mark) */}
                      <IonCol className="score-selector" size="">
                       <IonInput disabled className = "col-centered" value = {Correct}> ✔</IonInput>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonRow>
          </IonGrid>
        </IonContent>

        {/*special case model*/}
        <IonModal isOpen={showModal} cssClass="modal">
          <IonHeader className="modal-headersr">
            <IonToolbar>
              <IonTitle className="modal-titlesr">Special Cases</IonTitle>
              <IonButtons slot="end">
                <IonText
                  className="modal-close"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </IonText>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="modal-contentsr">
            <IonGrid>
              <IonRow>
                <IonCol size="8" className="modal-contenttextsr">
                  WK Bowling/Change
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="8" className="modal-contenttextsr">
                  Bowler Hurt
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="8" className="modal-contenttextsr">
                  Innings over
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol className="modal-contenttextsr">
                  Change Overs/Score
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="modal-contenttextsr">
                  End Match Abrupty
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="modal-contenttextsr">Switch Striker</IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>

          {/* <IonButton shape="round" size="small" expand="block" onClick={() => setShowModal(false)}>Close Modal</IonButton> */}
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default ScoreRecord;
