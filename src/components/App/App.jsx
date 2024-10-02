import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm';
import GuestList from '../GuestList/GuestList';
import PartyLeader from '../PartyLeader/PartyLeader';



function App() {
  let [guestList, setGuestList] = useState([]);
 

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/api/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  


  

  //console.log(newGuestMeal)
  return (
    <div className="App">
      <Header/>
     
      
      <GuestList guestList = {guestList}
                 getGuests = {getGuests}    />
      <PartyLeader guestList = {guestList} />
          
      <GuestForm getGuests={getGuests}  />
      
      <DinnerSupplies guestList = {guestList.length}/>
     <Footer/>
    </div>
  );
}

export default App;

