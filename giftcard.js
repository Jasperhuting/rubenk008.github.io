"use strict";

// MANAGE STATE OF INPUT FIELDS
var state = {
  cardNumber: {
    value: "",
    internalValid: false,

    get valid() {
      return this.internalValid;
    },

    set valid(val) {
      this.internalValid = val;
      this.validListner(val);
    },

    validListner: function validListner(val) {},
    registerNewListener: function registerNewListener(externalListenerFunction) {
      this.validListner = externalListenerFunction;
    }
  },
  pin: {
    value: "",
    internalValid: false,

    get valid() {
      return this.internalValid;
    },

    set valid(val) {
      this.internalValid = val;
      this.validListner(val);
    },

    validListner: function validListner(val) {},
    registerNewListener: function registerNewListener(externalListenerFunction) {
      this.validListner = externalListenerFunction;
    }
  }
}; // VALIDATE INPUT FIELDS

var validate = {
  cardNumber: function cardNumber(value) {
    if (value.length === 19) {
      state.cardNumber.valid = true;
      state.cardNumber.value = value;
    }

    if (value.length < 19 || value.length > 19) {
      if (state.cardNumber.valid === true) {
        state.cardNumber.valid = false;
      }

      state.cardNumber.value = "";
    }
  },
  pin: function pin(value) {
    if (value.length === 6) {
      state.pin.valid = true;
      state.pin.value = value;
    }

    if (value.length < 6 || value.length > 6) {
      if (state.pin.valid === true) {
        state.pin.valid = false;
      }

      state.pin.value = "";
    }
  }
}; // GET BALANCE REQUEST

var getBalance = function getBalance() {
  return new Promise(function (resolve, reject) {
    var Url = "https://jb-giftcard.herokuapp.com/giftcard/get-balance";
    var Data = {
      cardID: state.cardNumber.value,
      pin: state.pin.value
    };
    var param = {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(Data),
      method: "POST"
    };
    fetch(Url, param).then(function (data) {
      return data.json();
    }).then(function (res) {
      return resolve(res);
    }).catch(function (error) {
      console.log(error);
      reject(error);
    });
  });
}; // RENDER ERROR MESSAGE 


var renderErrorMessage = function renderErrorMessage(response) {
  var errorMessage = "<div class=\"messageCurrentBalance\">\n                            <div class=\"label\">Er gaat iets niet goed</div>\n                            <div class=\"value\">".concat(response.resulstDesc, "</div>\n                        </div>");
  return errorMessage;
}; // RENDER BALANCE MESSAGE


var renderBalance = function renderBalance(response) {
  var balanceMessage = "";
  var balanceValue = response.card.Balance / response.card.BalanceFactor; // WHEN BALANCE KEY IS AVAILABLE RENDER COLUMNS

  if (response.card.hasOwnProperty('Balance')) {
    var balanceValueColumn = "<div class=\"messageColumn\">\n                                        <div class=\"label\">Saldo</div>\n                                        <div class=\"value\">\u20AC ".concat(balanceValue, "</div>\n                                    </div>");
    var giftcardValidColumn = "<div class=\"messageColumn\">\n                                        <div class=\"label\">Geldig t/m</div>\n                                        <div class=\"value\">".concat(response.card.hasOwnProperty('ExpiryDate') ? response.card.ExpiryDate : "Geen einddatum", "</div>\n                                    </div>");
    balanceMessage += balanceValueColumn + giftcardValidColumn;
  } // WHEN STATUS IS INACTIVE OR EXPERID RENDER COLUMN


  if (response.card.Status[0] === 'Inactive' || response.card.Status[0] === 'Expired' || response.card.Status[0] === 'Blocked') {
    var status = response.card.Status[0];
    var statusColumn = "<div class=\"messageColumn\">\n                                        <div class=\"label\">Kaartstatus</div>\n                                        <div class=\"value\">".concat(status === 'Inactive' ? 'Inactief' : 'Niet te gebruiken', "</div>\n                                    </div>");
    balanceMessage += statusColumn;
  }

  return balanceMessage;
}; // RENDER MESSAGE FUNCTION


var renderMessage = function renderMessage(response) {
  var messageCard;
  var balanceCheckerMessage = document.querySelector(".message"); // CHECK IF CARD HAS ERROR

  if (response.hasOwnProperty('card')) {
    messageCard = renderBalance(response);
  } else {
    messageCard = renderErrorMessage(response);
  } // RENDER CARD


  balanceCheckerMessage.classList.remove("hidden");
  balanceCheckerMessage.innerHTML = messageCard;
}; // ONSUBMIT FORM 


async function onSubmit(token) {
  // WHEN INPUT FIELDS ARE VALID GET BALANCE
  if (state.cardNumber.valid === true && state.pin.valid === true) {
    var response = await getBalance();
    renderMessage(response);
  }

  return false;
} // CHANGE SUBMIT BUTTON STATE BASED ON VALID INPUTFIELDS


var changeSubmitBtnState = function changeSubmitBtnState() {
  var formSubmitBtn = document.getElementById("form-submit-btn"); // WHEN BOTH INPUT FIELDS ARE VALID ENABLE SUBMIT BUTTON

  if (state.cardNumber.valid === true && state.pin.valid === true) {
    formSubmitBtn.classList.remove("disabled");
  } // WHEN ONE OF THE INPUT FIELDS IS NOT VALID DISABLE SUBMIT BUTTON


  if (state.cardNumber.valid === false || state.pin.valid === false) {
    formSubmitBtn.classList.add("disabled");
  }
};

var init = function init() {
  // SET STATE OBJECT CHANGE LISTENERS
  state.cardNumber.registerNewListener(function (val) {
    changeSubmitBtnState();
  });
  state.pin.registerNewListener(function (val) {
    changeSubmitBtnState();
  });
};

init();
