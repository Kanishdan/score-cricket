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
  
  import React, {useState} from "react";
  import firebase from "../../firebaseConfig";

  import "./styles.css";
 export const AddNewMatch: React.FC = () => {
      const [tournament,setTournament] = useState('');
      const [matchType,setMatchType] = useState('');
      const [noOfOvers,setNoOfOvers] = useState('');
      const [location,setLocation] = useState('');
      const [dateOfMatch,setDateOfMatch] = useState('');
      const [teamAName,setTeamAName] = useState('');
      const [teamBName,setTeamBName] = useState('');

      const tournamentOnChange = (e: any) => {
        setTournament(e.target.value);
      };
      const matchTypeOnChange = (e: any) => {
        setMatchType(e.target.value);
      };
      const noOfOversOnChange = (e: any) => {
            setNoOfOvers(e.target.value);     
      };

      const locationOnChange = (e: any) => {
        setLocation(e.target.value);
      };

      const dateOfMatchOnChange = (e: any) => {
        setDateOfMatch(e.target.value);
      };

      const teamANameOnChange = (e: any) => {
        setTeamAName(e.target.value);
      };

      const teamBNameOnChange = (e: any) => {
        setTeamBName(e.target.value);
      };

      const updateNewMatch = () =>{
            const matchDetailsRef = firebase.database().ref('MatchDetails');
            const matchDetails = {
                tournament,
                matchType,
                noOfOvers,
                location,
                dateOfMatch,
                teamAName,
                teamBName,
            };
            matchDetailsRef.push(matchDetails);
      };

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
            <IonInput class="roundedInputm ion-text-left" type="text" placeholder="Enter tournament" onIonChange={tournamentOnChange} value={tournament}></IonInput>    
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="">
            Match Type:
            </IonCol>
            <IonCol className="">
            <IonSelect class = "ion-text-left" interfaceOptions={Option} onIonChange={matchTypeOnChange} value ={matchType}>
                    <IonSelectOption selected-text value="T-20">T-20</IonSelectOption>
                    <IonSelectOption value="ODI">ODI</IonSelectOption>
                    <IonSelectOption value="Custom">Custom</IonSelectOption>
                  </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="">
            No of Overs:
            </IonCol>
            <IonCol className="">
            <IonInput class="roundedInputm ion-text-left" type="text" placeholder="" onIonChange={noOfOversOnChange} value ={noOfOvers}></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="">
            Location:
            </IonCol>
            <IonCol className="">
            <IonInput class="roundedInputm ion-text-left" type="text" placeholder="Enter Location" onIonChange={locationOnChange} value ={location}></IonInput>
            </IonCol>
          </IonRow>
  
          <IonRow>
            <IonCol className="">
            Date of Match:
            </IonCol>
            <IonCol className="">
            <IonDatetime displayFormat="D MMM YYYY H:mm" class = "ion-text-left" onIonChange={dateOfMatchOnChange} value={dateOfMatch} display-timezone="utc"></IonDatetime>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="">
            Team A Name:
            </IonCol>
            <IonCol className="">
            <IonInput class="roundedInputm ion-text-left" type="text" placeholder="Enter 1st Team Name" onIonChange={teamANameOnChange} value ={teamAName}></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="">
            Team B Name:
            </IonCol>
            <IonCol className="">
            <IonInput className="roundedInputm ion-text-left" type="text" placeholder="Enter 1st Team Name" onIonChange={teamBNameOnChange} value ={teamBName}></IonInput>
            </IonCol>
          </IonRow>
        </IonGrid>
  
        <IonButton routerLink = "/teamA" expand="block"
                shape="round"
                color="primary" onClick = {updateNewMatch}>UPDATE DATA</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default AddNewMatch;
  