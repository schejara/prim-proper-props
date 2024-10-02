import React from 'react';
import axios from 'axios'

function GuestList(props) {

  const deleteItem = (guestId) => {
    axios.delete(`/api/guests/${guestId}`)
      .then(response => {
       props.getGuests();
      })
      .catch(error => {
        console.log('Error', error);
        alert('Something went wrong');
      });
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Kids Meal</th>
        </tr> 
      </thead>
      <tbody>
        {props.guestList.map((guest) => (
          <tr key={guest.id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
            <td>
              <button onClick={() => deleteItem(guest.id)}> Delete
            </button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GuestList;