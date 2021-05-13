//to create an instance of ProductsController Class
const cardControl = new CardController();

function loadData() {
  //add Items to the ProductionController Class - items currently are hard coded into the class
  cardControl.addItem(
    "FaVor.It",
    "E-commerce",
    "images/FaVor_It2.jpg",
    "images/FaVor_It3.jpg",
    "carou1"
  );
  cardControl.addItem(
    "Keyboard Warriors",
    "E-commerce",
    "images/Keyboard_Warriors.jpg",
    "images/FaVor_It3.jpg",
    "carou2"
  );
  cardControl.addItem(
    "Night Coders",
    "E-commerce",
    "images/Night_Coders.jpg",
    "images/FaVor_It3.jpg",
    "carou3"
  );
  cardControl.addItem(
    "The Minimalists",
    "E-commerce",
    "images/The_Minimalists.jpg",
    "images/FaVor_It3.jpg",
    "carou4"
  );
  cardControl.addItem(
    "4stack",
    "E-commerce",
    "images/4stack.jpg",
    "images/4stackTeam.jpeg",
    "carou5"
  );
  cardControl.addItem(
    "Team Legion",
    "Social Network",
    "images/Team_Legion.jpg",
    "images/teamLegion.jpg",
    "carou6"
  );
  cardControl.addItem(
    "L3C",
    "E-commerce",
    "images/L3C.jpg",
    "images/FaVor_It3.jpg",
    "carou7"
  );
  cardControl.addItem(
    "Team JAD",
    "E-commerce",
    "images/TeaM_JAD.jpg",
    "images/teamJAD.jpg",
    "carou8"
  );
  cardControl.displayItem();
}
loadData();
