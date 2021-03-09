import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonButtons,
    IonMenuButton,
  } from "@ionic/react";
  
  import React, { useState } from "react";
  import "./styles.css";
  import firebase from '../../firebaseConfig'
  
  const TeamA: React.FC = () => {

    const [playerA_0,setPlayerA0] = useState('');
    const [playerA_1,setPlayerA1] = useState('');
    const [playerA_2,setPlayerA2] = useState('');
    const [playerA_3,setPlayerA3] = useState('');
    const [playerA_4,setPlayerA4] = useState('');
    const [playerA_5,setPlayerA5] = useState('');
    const [playerA_6,setPlayerA6] = useState('');
    const [playerA_7,setPlayerA7] = useState('');
    const [playerA_8,setPlayerA8] = useState('');
    const [playerA_9,setPlayerA9] = useState('');
    const [playerA_10,setPlayerA10] = useState('');
    const [subplayerA_0,setSubPlayerA0] = useState('');
    const [subplayerA_1,setSubPlayerA1] = useState('');
    const [subplayerA_2,setSubPlayerA2] = useState('');
    const [subplayerA_3,setSubPlayerA3] = useState('');

    const playerA0OnChange = (e: any) =>{
      setPlayerA0(e.target.value);
    };
    const playerA1OnChange = (e: any) =>{
      setPlayerA1(e.target.value);
    };
    const playerA2OnChange = (e: any) =>{
      setPlayerA2(e.target.value);
    };
    const playerA3OnChange = (e: any) =>{
      setPlayerA3(e.target.value);
    };
    const playerA4OnChange = (e: any) =>{
      setPlayerA4(e.target.value);
    };
    const playerA5OnChange = (e: any) =>{
      setPlayerA5(e.target.value);
    };
    const playerA6OnChange = (e: any) =>{
      setPlayerA6(e.target.value);
    };
    const playerA7OnChange = (e: any) =>{
      setPlayerA7(e.target.value);
    };
    const playerA8OnChange = (e: any) =>{
      setPlayerA8(e.target.value);
    };
    const playerA9OnChange = (e: any) =>{
      setPlayerA9(e.target.value);
    };
    const playerA10OnChange = (e: any) =>{
      setPlayerA10(e.target.value);
    };
    const subPlayerA0OnChange = (e: any) =>{
      setSubPlayerA0(e.target.value);
    };
    const subPlayerA1OnChange = (e: any) =>{
      setSubPlayerA1(e.target.value);
    };
    const subPlayerA2OnChange = (e: any) =>{
      setSubPlayerA2(e.target.value);
    };
    const subPlayerA3OnChange = (e: any) =>{
      setSubPlayerA3(e.target.value);
    };

    const updateteamAdata = () =>{
      const teamARef = firebase.database().ref('TeamA');
            const teamA = {
              playerA_0,
              playerA_1,
              playerA_2,
              playerA_3,
              playerA_4,
              playerA_5,
              playerA_6,
              playerA_7,
              playerA_8,
              playerA_9,
              playerA_10,
              subplayerA_0,
              subplayerA_1,
              subplayerA_2,
              subplayerA_3,
            };
            teamARef.push(teamA);
    };

    return (
      <IonPage>
        <IonHeader translucent class="page-homet">
          <IonToolbar>
            <IonTitle class="ion-text-center page-headert">Score Cricket</IonTitle>
            <IonButtons slot = "start">
            <IonMenuButton menu = "main-menu">

            </IonMenuButton>
        </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent ion-padding fullscreen>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle class="ion-text-center page-subheadert">TeamA Details</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonItem >
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="1"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:0"></IonInput>    
            <IonSelect class = "ion-text-letf" onIonChange={playerA0OnChange} value = {playerA_0} interfaceOptions={Option}>
              <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>
        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="2"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:1"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={playerA1OnChange} value = {playerA_1} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>
        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="3"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:2"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={playerA2OnChange} value = {playerA_2 } interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>
        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="4"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:3"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={playerA3OnChange} value = {playerA_3} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>
        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="5"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:4"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={playerA4OnChange} value = {playerA_4} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>
        
        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="6"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:5"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={playerA5OnChange} value = {playerA_5} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>
        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="7"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:6"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={playerA6OnChange} value = {playerA_6} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="8"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:7"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={playerA7OnChange} value = {playerA_7} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="9"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:8"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={playerA8OnChange} value = {playerA_8} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="10"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:9"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={playerA9OnChange} value = {playerA_9} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="11"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-A:10"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={playerA10OnChange} value = {playerA_10} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Batsman">CAP/Batsman</IonSelectOption>
              <IonSelectOption value="CAP/Bowler">CAP/Bowler</IonSelectOption>
              <IonSelectOption value="CAP/AllRounder">CAP/AllRounder</IonSelectOption>
              <IonSelectOption value="WK/CAP">WK/CAP</IonSelectOption>
              <IonSelectOption value="WiseCAP/Bowler">WiseCAP/Bowler</IonSelectOption>
              <IonSelectOption value="WK/WiseCAP">WK/WiseCAP</IonSelectOption>
              <IonSelectOption value="Batsman/WiseCAP">Batsman/WiseCAP</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="12"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="SubPlayer-A:0"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={subPlayerA0OnChange} value = {subplayerA_0} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
          <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="13"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="SubPlayer-A:1"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={subPlayerA1OnChange} value = {subplayerA_1} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
          <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="14"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="SubPlayer-A:2"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={subPlayerA2OnChange} value = {subplayerA_2} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
          <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="15"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="SubPlayer-A:3"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange={subPlayerA3OnChange} value = {subplayerA_3} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>        
            </IonSelect>
        </IonItem>


        <IonButton routerLink = "/teamB"expand="block"
                shape="round"
                color="primary" onClick = {updateteamAdata}>UPDATE DATA</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default TeamA;
  