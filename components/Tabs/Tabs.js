class TabLink {
  constructor(element){
    // assign this.tabElement to the tabElement DOM reference
    this.element = element;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.element.dataset.tab;
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card') ;
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`)
    }

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    // Add a click event that invokes this.selectTab
   this.element.addEventListener('click', () => this.selectTab());
                                                        
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tabs => tabs.classList.remove('active-tab'))
    this.element.classList.add('active-tab')


  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.style.display = "none")
  this.cards.forEach(card => card.selectCard());
   
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
    

  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
  //  console.log(this.cardElement)
   this.cardElement.style.display= "flex"
   
  }
 
}
//
/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab')
  // console.log(tabs)
tabs.forEach(tab => new TabLink(tab));