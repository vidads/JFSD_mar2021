//Doing a Product web app, in product page to display the name, description, imageUrl, style, price
const createHTMLList = (index, name, description, imageURL) => `      
            <div class="col-lg-4">
              <div class="card" style="width: 18rem">
                <img src=${imageURL} class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${description}</p>
                  <a
                    id="${index}"
                    href="#"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#cardModal"
                    >More</a
                  >
                </div>
              </div>
            </div>
            `;

// function displayProductDetails(item) {
//   document.querySelector("#modalName").innerText = item.oName;
//   document.querySelector("#modalImg").src = item.oImageUrl;
//   document.querySelector("#modalStyle").innerText = item.oStyle;
//   document.querySelector("#modalPrice").innerText = item.oPrice;
// }
class CardController {
  constructor() {
    this._items = [];
  }
  //method to add the items into the array
  addItem(name, description, imageUrl) {
    const itemObj = {
      oName: name,
      oDescription: description,
      oImageUrl: imageUrl,
    };
    this._items.push(itemObj);
  }
  displayItem() {
    var cardHTMLList = [];
    for (var i = 0; i < this._items.length; i++) {
      const item = this._items[i];
      const cardHTML = createHTMLList(
        i,
        item.oName,
        item.oDescription,
        item.oImageUrl
      );
      cardHTMLList.push(cardHTML);
    }
    //Join all the elements in my productHTMLList into one string, and separate by a break
    const pHTML = cardHTMLList.join(`\n`);
    document.querySelector("#row").innerHTML = pHTML;

    //addEventListener - click
    // for (var i = 0; i < this._items.length; i++) {
    //   const item = this._items[i];
    //   document.getElementById(i).addEventListener("click", function () {
    //     displayProductDetails(item);
    //   });
    // }
  }
} //End of CardController class
