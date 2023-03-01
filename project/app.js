
const menu = [
    {
      id: 1,
      title: "Playstation 5",
      category: "consoles",
      price: 499.99,
      img: "./images/consoles/image-1.jpg",
      desc: `Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback1, adaptive triggers1 and 3D Audio*, and an all-new generation of incredible PlayStation games. This is Playstation 5. `,
    },
    {
      id: 2,
      title: "Xbox Series S",
      category: "consoles",
      price: 249.99,
      img: "./images/consoles/image-2.jpg",
      desc: `Go all digital with the Xbox Series S and build a library of digital games. Your games, saves, and backups are safe in the cloud. Plus, enjoy the ability to pre-order and pre-install upcoming games so you're ready to play the moment they launch. This is Xbox Series S.`,
    },
    {
      id: 3,
      title: "Xbox Series X",
      category: "consoles",
      price: 499.99,
      img: "./images/consoles/image-3.jpg",
      desc: `The Xbox Series X delivers sensationally smooth frame rates of up to 120FPS with the visual pop of HDR. Immerse yourself with sharper characters, brighter worlds and impossible details with true-to-life 4K.`,
    },
    {
      id: 4,
      title: "Nintendo Switch",
      category: "consoles",
      price: 299.99,
      img: "./images/consoles/image-4.jpg",
      desc: `The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers.`,
    },
    {
      id: 5,
      title: "Game Boy",
      category: "consoles",
      price: 49.99,
      img: "./images/consoles/image-6.jpg",
      desc: `It is a handheld video game console that combined aspects of Nintendos successful Nintendo Entertainment System (NES) television video game console with their earlier handheld electronic games`,
    },
    {
      id: 6,
      title: "Logitech RGB Mechanical Keyboard",
      category: "keyboard",
      price: 59.99,
      img: "./images/keyboard/image-1.jpg",
      desc: `A Logitech mechanical keyboard with over 100 interchangeable keys and customizable RGB lights.`,
    },
    {
      id: 7,
      title: "Dell Supreme Mechanical Keyboard",
      category: "keyboard",
      price: 39.99,
      img: "./images/keyboard/image-2.jpg",
      desc: `A retro theme styled mechanical keyboard with interchangeable keys and supreme keys and supreme noise. `,
    },
    {
      id: 8,
      title: "Razer Mechanical Gaming Keyboard",
      category: "keyboard",
      price: 69.99,
      img: "./images/keyboard/image-3.jpg",
      desc: `A supreme mechanical keyboard from Razer with 12 modes for gaming, office work and coding. `,
    },
    {
      id: 9,
      title: "QWERTY Extreme Gaming Keyboard",
      category: "keyboard",
      price: 24.99,
      img: "./images/keyboard/image-4.jpg",
      desc: `A Delicasy of a keyboard from QWERTY featuring an LED display for all your gaming needs.`,
    },
    {
      id: 10,
      title: "Dell 4K 24 inch Monitor.",
      category: "monitor",
      price: 109.99,
      img: "./images/monitor/image-1.jpg",
      desc: `An extraordinary Dell Monitor featuring curved edges and bezel-less pixels with a 4K display.`,
    },
    {
      id: 11,
      title: "HP Gaming Monitor With Stand",
      category: "monitor",
      price: 149.99,
      img: "./images/monitor/image-2.jpg",
      desc: `A gaming monitor with upto 75 Hz of frame rate and also upto 1440p display and has 3 interchangeable modes.`,
    },
    {
      id: 12,
      title: "Samsung LED 4.5K Bezel Free Monitor.",
      category: "monitor",
      price: 150.99,
      img: "./images/monitor/image-3.jpg",
      desc: `A 4.5K Display with bezel free pixels and comes with built in 200 GB of storage for all your storage needs.`,
    },
    {
        id: 13,
        title: "Acer Gaming Monitor.",
        category: "monitor",
        price: 79.99,
        img: "./images/monitor/image-4.jpg",
        desc: `An Acer Gaming Monitor with 60 Hz of frame rate and 1440p display.`,
    },
    {
      id: 14,
      title: "Razer RGB Gaming Mouse.",
      category: "mouse",
      price: 79.99,
      img: "./images/mouse/image-1.jpg",
      desc: `It's a Razer Mouse with RGB lights and 9 buttons. What more do you need? `,
    },
    {
      id: 15,
      title: "Logitech G103 Gaming Mouse.",
      category: "mouse",
      price: 20.00,
      img: "./images/mouse/image-2.jpg",
      desc: `A supreme black RGB gaming mouse with upto 24.3 million customisable RGB lights and 7 buttons.`,
    },
    {
      id: 16,
      title: "Thrustmaster T15 Gaming Mouse",
      category: "mouse",
      price: 9.99,
      img: "./images/mouse/image-3.jpg",
      desc: `It's just a simple, inexpensive RGB gaming mouse from Thrustmaster.`,
    },
    {
      id: 17,
      title: "Cyberpunk Edition 2022 Gaming RGB Mouse",
      category: "mouse",
      price: 109.99,
      img: "./images/mouse/image-4.jpg",
        desc: `A really cool RGB Gaming mouse brought to you by Razer inspired by the game Cyberpunk 2077.`,
    },
    {
      id: 18,
      title: "Logitech G103 Gaming Mouse.",
      category: "mouse",
      price: 21.99,
      img: "./images/mouse/image-5.jpg",
      desc: `A supreme white RGB gaming mouse with upto 24.3 million customisable RGB lights and 7 buttons..`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
