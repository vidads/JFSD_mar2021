//to create an instance of ProductsController Class
const cardControl = new CardController();

function loadData() {
  //add Items to the ProductionController Class - items currently are hard coded into the class
  cardControl.addItem("FaVor.It", "E-commerce", "images/FaVor_It2.jpg");
  cardControl.addItem(
    "Keyboard Warriors",
    "E-commerce",
    "images/Keyboard_Warriors.jpg"
  );
  cardControl.addItem("Night Coders", "E-commerce", "images/Night_Coders.jpg");
  cardControl.addItem(
    "The Minimalists",
    "E-commerce",
    "images/The_Minimalists.jpg"
  );
  cardControl.addItem("4stack", "E-commerce", "images/4stack.jpg");
  cardControl.addItem(
    "Team Legion",
    "Social Network",
    "images/Team_Legion.jpg"
  );
  cardControl.addItem("L3C", "E-commerce", "images/L3C.jpg");
  cardControl.addItem("Team JAD", "E-commerce", "images/TeaM_JAD.jpg");
  cardControl.displayItem();
}
loadData();
