/** @format */


const establishName = (index) => {
    console.log(coctails[index].name)
    $(".care").eq(index).html(`
        <h2>${coctails[index].name}</h2>
        <p></p> 
        ${coctails[index].ingridients}`);
};

  const showInformation = () => {
    setUpBoxes();
    jQuery.each($(".box"), establishName);
  
    $(".box").on("click", function () {
      let indexOfCoctail = $(".box").index(this);
  
      // Find the paragraph of class p and set the text
      $(this).find("p.care").text(coctails[indexOfCoctail].calories + " calories");
    });
  
    // Add an event handler for when the element
    // of class box gets a mouseover event
    $(".box").on("mouseover", function () {
      let indexOfCoctail = $(".box").index(this);
  
      $(this)
        .find("p.care")
        .text(
          coctails[indexOfCoctail].recipe + " bucks" //added their names just through calling the index "indexOFAnimal" from array of animals
        );
    });
  
    // Add an event handler for when the
    // element of class box gets a mouseout event
    $(".box").on("mouseout", function () {
      let indexOfCoctail = $(".box").index(this);
  
      $(this).find("p.care").html(`
        <h2>${coctails[indexOfCoctail].name}</h2>
        <p></p> 
        ${coctails[indexOfCoctail].ingridients}`);
    });
  };


const setUpBoxes = ()=> {
    let wrapperRef = $('.wrapper');
    coctails.forEach((coctail)=>{
        let boxMarkup= ` <div class="box">
        <img class="coctail_pic" src="./images/${coctail.name.toLowerCase()}.png" />
        <p class="care"></p>
      </div>`;
      wrapperRef.append(boxMarkup);
    }
    );
}


  $(document).ready(showInformation);
  