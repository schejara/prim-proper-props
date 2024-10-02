function PartyLeader(props){
return(
<>
<h2>Party Leader</h2>
      {props.guestList[0] && <h3>{props.guestList[0].name}</h3>}
</>
)

}
export default PartyLeader;