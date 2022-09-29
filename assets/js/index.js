const hoverEffect = () => {
  document.querySelector(".list__item__header").addEventListener("mouseenter", () => {
    document.querySelector(".list__item__header").style.color = "blue";
  });

  document.querySelector(".list__item__header").addEventListener("mouseleave", () => {
    document.querySelector(".list__item__header").style.color = "";
  });

  /*
  document.querySelectorAll(".list__item__header").addEventListener("mouseenter", () => {
    document.querySelectorAll(".list__item__header").style.color = "blue";
  });
  */

  document.querySelectorAll(".list__item__header").forEach((listItem) => {
    listItem.addEventListener("mouseenter", () => {
      listItem.style.color = "blue";
    });

    listItem.addEventListener("mouseleave", () => {
      listItem.style.color = "";
    });
  });
};

hoverEffect();

const clickOnHeader = () => {
  // 1. Loop through all .list__item__header
  document.querySelectorAll(".list__item__header").forEach((header) => {
    // 2. Add a click eventListener on each .list__item__header
    header.addEventListener("click", () => {
      // 3. Get the right .list__item__body
      const body = header.nextElementSibling;
      // const b = header.parentElement.querySelector('.list__item__body');
      // 4. Toggle the .list__item__body
      // 4a. If .list__item__body is hidden, show it
      // 4b. If .list__item__body is shown, hide it
      if (body.classList.contains("show")) {
        body.classList.remove("show");
      } else {
        // 5. Loop through all .list__item__body
        document.querySelectorAll(".list__item__body").forEach((body) => {
          // 6. Hide each .list__item__body
          body.classList.remove("show");
        });
        body.classList.add("show");
      }
    });
  });
};

clickOnHeader();

const replaceArtistText = () => {
  // 1. Loop through all .list__item__artist
  document.querySelectorAll(".list__item__artist").forEach((artist) => {
    // 2. Get the text inside of the element
    const text = artist.textContent;
    // 3. Get the date of birth from the text
    // 3a. Get only the numbers out of the string
    const dateOfBirthA = text.replace(/\D/g, "");
    // 3b. Get the 4 to the last characters of the string
    const dateOfBirthB = text.slice(-5, -1);
    // 4. Change the text to the new one
    artist.innerHTML = dateOfBirthA;
  });
};

replaceArtistText();
