if (!document.querySelector(".inner-page")) {
	var mapLink = document.querySelector(".map");
  	var mapPopup = document.querySelector(".modal-map");
  	var mapClose = mapPopup.querySelector(".button-close-map");

  	mapLink.addEventListener("click", function (evt) {
    	evt.preventDefault();
   	mapPopup.classList.add("modal-show");
  });

  	mapClose.addEventListener("click", function (evt) {
    	evt.preventDefault();
    	mapPopup.classList.remove("modal-show");
  });

  	window.addEventListener("keydown", function (evt) {
    	if (evt.keyCode === 27) {
      	if (mapPopup.classList.contains("modal-show")) {
        		evt.preventDefault();
        	mapPopup.classList.remove("modal-show");
      }
    }
  });
};

  var fbLink = document.querySelector(".contact-letter");
  var fbPopup = document.querySelector(".write-letter");
  var fbClose = fbPopup.querySelector(".button-close-letter");
  var fbForm = fbPopup.querySelector("form");
  var fbName = fbForm.querySelector("[name=name]");
  var fbEmail = fbForm.querySelector("[name=email]");
  var fbTextarea = fbForm.querySelector("[name=comment]");
  var storageName = "";
  var storageEmail = "";

  try {
    storageName = localStorage.getItem("Name");
  } catch (err) {
    isStorageSupport = false;
  }
  try {
    storageEmail = localStorage.getItem("Email");
  } catch (err) {
    isStorageSupport = false;
  }

  fbLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    fbPopup.classList.add("modal-show");

    if (storageName) {
      fbName.value = storageName;
      if (storageEmail) {
        fbEmail.value = storageEmail;
        fbTextarea.focus();
      } else {
        fbEmail.focus();
      }
    } else {
      fbName.focus();
    }

  });

  fbClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    fbPopup.classList.remove("modal-show");
    fbPopup.classList.remove("modal-error");
  });

  fbForm.addEventListener("submit", function (evt) {
    if (!fbName.value || !fbEmail.value) {
      evt.preventDefault();
      fbPopup.classList.remove("modal-error");
      fbPopup.offsetWidth = fbPopup.offsetWidth;
      fbPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("Name", fbName.value);
        localStorage.setItem("Email", fbEmail.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (fbPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        fbPopup.classList.remove("modal-show");
        fbPopup.classList.remove("modal-error");
      }
    }
  });

var buttonBuy = document.querySelector(".button-catalog-buy");
var buyCartPopup = document.querySelector(".modal-buy-cart");
var buyCartClose = buyCartPopup.querySelector(".button-close-buy");
var linkCart = document.querySelector(".header-cart");
var cartCount = document.querySelector(".header-cart span");

var defaultCount = 0;

if (!document.querySelector(".inner-page")) {
  localStorage.setItem("cartCount", 0);
} else {
  localStorage.setItem("cartCount", 10);
}

try {
  storage = Number(localStorage.getItem("cartCount"));
} catch (err) {
  isStorageSupport = false;
}


if (storage) {
  linkCart.classList.add("full");
  cartCount.innerHTML = storage;
  cartCount.dataset.count = storage;
}

for (var i = 0; i < buttonBuy.length; i++) {
  buttonBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyCartPopup.classList.add("modal-show");

    defaultCount += 1;

    if (isStorageSupport) {
      localStorage.setItem("cartCount", storage + defaultCount);
    }

    linkCart.classList.add("full");
    cartCount.innerHTML = storage + defaultCount;
    cartCount.dataset.count = storage + defaultCount;

  });
}

buyCartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyCartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (buyCartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      buyCartPopup.classList.remove("modal-show");
    }
  }
});

