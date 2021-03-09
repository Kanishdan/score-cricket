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
  
  import React,{useState} from "react";
  import "./styles.css";
  import firebase from '../../firebaseConfig';



  const TeamB: React.FC = () => {
    //const [text] = useState<string>();
    const [playerB_0,setPlayerB0] = useState('');
    const [playerB_1,setPlayerB1] = useState('');
    const [playerB_2,setPlayerB2] = useState('');
    const [playerB_3,setPlayerB3] = useState('');
    const [playerB_4,setPlayerB4] = useState('');
    const [playerB_5,setPlayerB5] = useState('');
    const [playerB_6,setPlayerB6] = useState('');
    const [playerB_7,setPlayerB7] = useState('');
    const [playerB_8,setPlayerB8] = useState('');
    const [playerB_9,setPlayerB9] = useState('');
    const [playerB_10,setPlayerB10] = useState('');
    const [subplayerB_0,setSubPlayerB0] = useState('');
    const [subplayerB_1,setSubPlayerB1] = useState('');
    const [subplayerB_2,setSubPlayerB2] = useState('');
    const [subplayerB_3,setSubPlayerB3] = useState('');
  
    const playerB0OnChange = (e: any) =>{
      setPlayerB0(e.target.value);
    };
    const playerB1OnChange = (e: any) =>{
      setPlayerB1(e.target.value);
    };
    const playerB2OnChange = (e: any) =>{
      setPlayerB2(e.target.value);
    };
    const playerB3OnChange = (e: any) =>{
      setPlayerB3(e.target.value);
    };
    const playerB4OnChange = (e: any) =>{
      setPlayerB4(e.target.value);
    };
    const playerB5OnChange = (e: any) =>{
      setPlayerB5(e.target.value);
    };
    const playerB6OnChange = (e: any) =>{
      setPlayerB6(e.target.value);
    };
    const playerB7OnChange = (e: any) =>{
      setPlayerB7(e.target.value);
    };
    const playerB8OnChange = (e: any) =>{
      setPlayerB8(e.target.value);
    };
    const playerB9OnChange = (e: any) =>{
      setPlayerB9(e.target.value);
    };
    const playerB10OnChange = (e: any) =>{
      setPlayerB10(e.target.value);
    };
    const subPlayerB0OnChange = (e: any) =>{
      setSubPlayerB0(e.target.value);
    };
    const subPlayerB1OnChange = (e: any) =>{
      setSubPlayerB1(e.target.value);
    };
    const subPlayerB2OnChange = (e: any) =>{
      setSubPlayerB2(e.target.value);
    };
    const subPlayerB3OnChange = (e: any) =>{
      setSubPlayerB3(e.target.value);
    };
  
    const updateteamBdata = () =>{
      const teamBRef = firebase.database().ref('TeamB');
            const teamB = {
              playerB_0,
              playerB_1,
              playerB_2,
              playerB_3,
              playerB_4,
              playerB_5,
              playerB_6,
              playerB_7,
              playerB_8,
              playerB_9,
              playerB_10,
              subplayerB_0,
              subplayerB_1,
              subplayerB_2,
              subplayerB_3,
            };
            teamBRef.push(teamB);
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
            <IonTitle class="ion-text-center page-subheadert">TeamB Details</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="1"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:0"></IonInput>    
            <IonSelect class = "ion-text-left" onIonChange = {playerB0OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:1"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {playerB1OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:2"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {playerB2OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:3"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {playerB3OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:4"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {playerB4OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:5"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {playerB5OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:6"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {playerB6OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:7"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {playerB7OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:8"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {playerB8OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:9"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {playerB9OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="Player-B:10"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {playerB10OnChange} interfaceOptions={Option}>
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
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="SubPlayer-B:0"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {subPlayerB0OnChange} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="13"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="SubPlayer-B:1"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {subPlayerB1OnChange} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="14"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="SubPlayer-B:2"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {subPlayerB2OnChange} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
            </IonSelect>
        </IonItem>

        <IonItem>
        <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="15"></IonInput>
          <IonInput disabled class="roundedInputt ion-text-letf" type="text" value="SubPlayer-B:3"></IonInput>    
          <IonSelect class = "ion-text-left" onIonChange = {subPlayerB3OnChange} interfaceOptions={Option}>
          <IonSelectOption selected-text value="Batsman">Batsman</IonSelectOption>
              <IonSelectOption value="Bowler">Bowler</IonSelectOption>
              <IonSelectOption value="AllRounder">AllRounder</IonSelectOption>
              <IonSelectOption value="WK/Batsman">WK/Batsman</IonSelectOption>
            </IonSelect>
        </IonItem>


        <IonButton onClick = {updateteamBdata} expand="block"
                shape="round"
                color="primary" routerLink = "/menu">UPDATE DATA</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default TeamB;
  