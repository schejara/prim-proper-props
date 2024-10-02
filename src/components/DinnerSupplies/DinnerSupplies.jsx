function DinnerSupplies({guestList}){
return(
<>
<h2>Dinner Supplies</h2>

      <div>
        Spoons: {guestList * 2}
      </div>
      <div>
        Forks: {guestList * 2}
      </div>
      <div>
        Knives: {guestList * 2}
      </div>
</>
)

}
export default DinnerSupplies;

//Const SPOON_COUNT = 2
