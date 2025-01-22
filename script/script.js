// Author : Abinash sahu
// version : 1.0

"use strict";

// Modal
let mainBox = document.querySelector(".main");
let modal = document.querySelector(".modal");
let modalBox = document.querySelector(".modal-box");
modal.style.display = "none";

let pname = document.getElementById("pname");
let pnameValue = "";
let err = document.querySelectorAll(".err");
let errname = document.getElementById("errname");
let erricon = document.getElementById("erricon");

let iconBtn1 = document.getElementById("iconBtn1");
let iconBtn2 = document.getElementById("iconBtn2");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");

let p1iconClass = "";
let p2iconClass = "";

// modal open
let p1btn = document.getElementById("p1btn");
let p2btn = document.getElementById("p2btn");

let p = document.getElementById("p");

// game board
let tic = document.getElementById("tic");
let tac_rank_name1 = document.getElementById("tac-rank-name1");
let tac_rank_name2 = document.getElementById("tac-rank-name2");
let tac_rank_name_icon1 = document.getElementById("tac-rank-name-icon1");
let tac_rank_name_icon2 = document.getElementById("tac-rank-name-icon2");
let tac_rank_result1 = document.getElementById("tac-rank-result1");
let tac_rank_result2 = document.getElementById("tac-rank-result2");
let tac_rank_result3 = document.getElementById("tac-rank-result3");

// game boxes
let toe_box1 = document.getElementById("toe-box1");
let toe_box2 = document.getElementById("toe-box2");
let toe_box3 = document.getElementById("toe-box3");
let toe_box4 = document.getElementById("toe-box4");
let toe_box5 = document.getElementById("toe-box5");
let toe_box6 = document.getElementById("toe-box6");
let toe_box7 = document.getElementById("toe-box7");
let toe_box8 = document.getElementById("toe-box8");
let toe_box9 = document.getElementById("toe-box9");

// game box icon
let toe_box_icon1 = document.getElementById("toe-box-icon1");
let toe_box_icon2 = document.getElementById("toe-box-icon2");
let toe_box_icon3 = document.getElementById("toe-box-icon3");
let toe_box_icon4 = document.getElementById("toe-box-icon4");
let toe_box_icon5 = document.getElementById("toe-box-icon5");
let toe_box_icon6 = document.getElementById("toe-box-icon6");
let toe_box_icon7 = document.getElementById("toe-box-icon7");
let toe_box_icon8 = document.getElementById("toe-box-icon8");
let toe_box_icon9 = document.getElementById("toe-box-icon9");

let tieResult = 0;
let playagainBtn = document.getElementById("playagainBtn");

const matchBox = [
  ["123", "132", "213", "231", "312", "321"],
  ["456", "465", "546", "564", "645", "654"],
  ["789", "798", "879", "897", "978", "987"],
  ["147", "174", "417", "471", "714", "741"],
  ["258", "285", "528", "582", "825", "852"],
  ["369", "396", "639", "693", "936", "963"],
  ["159", "195", "519", "591", "915", "951"],
  ["357", "375", "537", "573", "735", "753"],
];

// Players details object
const playerOne = {
  click: false,
  name: "",
  icon: "",
  ready: false,
  positions: "",
  resultCounter: 0,
};

const playerTwo = {
  click: false,
  name: "",
  icon: "",
  ready: false,
  positions: "",
  resultCounter: 0,
};

let indexVal = "";

function isWinner(search) {
  let num = 1;
  let a;
  for (let i = 0; i < matchBox.length; i++) {
    for (let j = 0; j < matchBox.length - 2; j++) {
      a = matchBox[i][j];
      num = 1;
      if (search.includes(matchBox[i][j])) {
        indexVal = +matchBox[i][j];
        return true;
      } else {
        for (let m = 0; m < a.length; m++) {
          for (let n = 0; n < search.length; n++) {
            if (a.charAt(m) == search.charAt(n)) {
              if (num == 3) {
                indexVal = +matchBox[i][j];
                return true;
              }
              num++;
            }
          }
        }
      }
    }
  }
  return false;
}

let checkWinner = (p) => {
  let match = false;

  if (p == "p1") {
    match = isWinner(playerOne.positions);

    if (match == true) {
      playerOne.resultCounter++;
      tac_rank_result1.innerText = playerOne.resultCounter;

      toe_box1.disabled = true;
      toe_box2.disabled = true;
      toe_box3.disabled = true;
      toe_box4.disabled = true;
      toe_box5.disabled = true;
      toe_box6.disabled = true;
      toe_box7.disabled = true;
      toe_box8.disabled = true;
      toe_box9.disabled = true;

      let reminder = 0;

      toe_box_icon1.classList.add("lossbox");
      toe_box_icon2.classList.add("lossbox");
      toe_box_icon3.classList.add("lossbox");
      toe_box_icon4.classList.add("lossbox");
      toe_box_icon5.classList.add("lossbox");
      toe_box_icon6.classList.add("lossbox");
      toe_box_icon7.classList.add("lossbox");
      toe_box_icon8.classList.add("lossbox");
      toe_box_icon9.classList.add("lossbox");

      while (indexVal > 0) {
        reminder = indexVal % 10;

        switch (reminder) {
          case 1:
            toe_box_icon1.classList.remove("lossbox");
            toe_box_icon1.classList.add("winbox");
            break;

          case 2:
            toe_box_icon2.classList.remove("lossbox");
            toe_box_icon2.classList.add("winbox");
            break;

          case 3:
            toe_box_icon3.classList.remove("lossbox");
            toe_box_icon3.classList.add("winbox");
            break;

          case 4:
            toe_box_icon4.classList.remove("lossbox");
            toe_box_icon4.classList.add("winbox");
            break;

          case 5:
            toe_box_icon5.classList.remove("lossbox");
            toe_box_icon5.classList.add("winbox");
            break;

          case 6:
            toe_box_icon6.classList.remove("lossbox");
            toe_box_icon6.classList.add("winbox");
            break;

          case 7:
            toe_box_icon7.classList.remove("lossbox");
            toe_box_icon7.classList.add("winbox");
            break;

          case 8:
            toe_box_icon8.classList.remove("lossbox");
            toe_box_icon8.classList.add("winbox");
            break;

          case 9:
            toe_box_icon9.classList.remove("lossbox");
            toe_box_icon9.classList.add("winbox");
            break;
        }

        indexVal = parseInt(indexVal / 10);
      }
    } else {
      if (
        toe_box1.disabled == true &&
        toe_box2.disabled == true &&
        toe_box3.disabled == true &&
        toe_box4.disabled == true &&
        toe_box5.disabled == true &&
        toe_box6.disabled == true &&
        toe_box7.disabled == true &&
        toe_box8.disabled == true &&
        toe_box9.disabled == true &&
        match == false
      ) {
        toe_box_icon1.classList.add("lossbox");
        toe_box_icon2.classList.add("lossbox");
        toe_box_icon3.classList.add("lossbox");
        toe_box_icon4.classList.add("lossbox");
        toe_box_icon5.classList.add("lossbox");
        toe_box_icon6.classList.add("lossbox");
        toe_box_icon7.classList.add("lossbox");
        toe_box_icon8.classList.add("lossbox");
        toe_box_icon9.classList.add("lossbox");

        tieResult++;
        tac_rank_result3.innerText = tieResult;
      }
    }
  } else if (p == "p2") {
    match = isWinner(playerTwo.positions);

    if (match == true) {
      playerTwo.resultCounter++;
      tac_rank_result2.innerText = playerTwo.resultCounter;

      toe_box1.disabled = true;
      toe_box2.disabled = true;
      toe_box3.disabled = true;
      toe_box4.disabled = true;
      toe_box5.disabled = true;
      toe_box6.disabled = true;
      toe_box7.disabled = true;
      toe_box8.disabled = true;
      toe_box9.disabled = true;

      let reminder = 0;

      toe_box_icon1.classList.add("lossbox");
      toe_box_icon2.classList.add("lossbox");
      toe_box_icon3.classList.add("lossbox");
      toe_box_icon4.classList.add("lossbox");
      toe_box_icon5.classList.add("lossbox");
      toe_box_icon6.classList.add("lossbox");
      toe_box_icon7.classList.add("lossbox");
      toe_box_icon8.classList.add("lossbox");
      toe_box_icon9.classList.add("lossbox");

      while (indexVal > 0) {
        reminder = indexVal % 10;

        switch (reminder) {
          case 1:
            toe_box_icon1.classList.remove("lossbox");
            toe_box_icon1.classList.add("winbox");
            break;

          case 2:
            toe_box_icon2.classList.remove("lossbox");
            toe_box_icon2.classList.add("winbox");
            break;

          case 3:
            toe_box_icon3.classList.remove("lossbox");
            toe_box_icon3.classList.add("winbox");
            break;

          case 4:
            toe_box_icon4.classList.remove("lossbox");
            toe_box_icon4.classList.add("winbox");
            break;

          case 5:
            toe_box_icon5.classList.remove("lossbox");
            toe_box_icon5.classList.add("winbox");
            break;

          case 6:
            toe_box_icon6.classList.remove("lossbox");
            toe_box_icon6.classList.add("winbox");
            break;

          case 7:
            toe_box_icon7.classList.remove("lossbox");
            toe_box_icon7.classList.add("winbox");
            break;

          case 8:
            toe_box_icon8.classList.remove("lossbox");
            toe_box_icon8.classList.add("winbox");
            break;

          case 9:
            toe_box_icon9.classList.remove("lossbox");
            toe_box_icon9.classList.add("winbox");
            break;
        }

        indexVal = parseInt(indexVal / 10);
      }
    } else {
      if (
        toe_box1.disabled == true &&
        toe_box2.disabled == true &&
        toe_box3.disabled == true &&
        toe_box4.disabled == true &&
        toe_box5.disabled == true &&
        toe_box6.disabled == true &&
        toe_box7.disabled == true &&
        toe_box8.disabled == true &&
        toe_box9.disabled == true &&
        match == false
      ) {
        toe_box_icon1.classList.add("lossbox");
        toe_box_icon2.classList.add("lossbox");
        toe_box_icon3.classList.add("lossbox");
        toe_box_icon4.classList.add("lossbox");
        toe_box_icon5.classList.add("lossbox");
        toe_box_icon6.classList.add("lossbox");
        toe_box_icon7.classList.add("lossbox");
        toe_box_icon8.classList.add("lossbox");
        toe_box_icon9.classList.add("lossbox");

        tieResult++;
        tac_rank_result3.innerText = tieResult;
      }
    }
  }
};

p1btn.addEventListener("click", () => {
  playerOne.click = true;
  p.innerText = "Player 1";

  if (iconBtn1.disabled == true) {
    icon1.classList.add("icon-noselect");
  }

  if (iconBtn2.disabled == true) {
    icon2.classList.add("icon-noselect");
  }

  modal.style.display = "block";
});

p2btn.addEventListener("click", () => {
  playerTwo.click = true;
  p.innerText = "Player 2";

  if (iconBtn1.disabled == true) {
    icon1.classList.add("icon-noselect");
  }

  if (iconBtn2.disabled == true) {
    icon2.classList.add("icon-noselect");
  }

  modal.style.display = "block";
});

// modal close using the icon
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// modal close button function
let modalClose = () => {
  modal.style.display = "none";
  pname.value = "";

  err.forEach((element) => {
    element.style.display = "none";
  });

  if (
    icon1.classList.contains("icon-noselect") ||
    icon2.classList.contains("icon-noselect")
  ) {
    icon1.classList.remove("icon-noselect");
    icon2.classList.remove("icon-noselect");
  }

  if (
    icon1.classList.contains("icon-select") ||
    icon2.classList.contains("icon-select")
  ) {
    icon1.classList.remove("icon-select");
    icon2.classList.remove("icon-select");
  }

  if (!(p1iconClass == "") || !(p2iconClass == "")) {
    p1iconClass = "";
    p2iconClass = "";
  }

  if (playerOne.click == true) {
    playerOne.click = false;
  }

  if (playerTwo.click == true) {
    playerTwo.click = false;
  }
};

closeBtn.addEventListener("click", modalClose);

// modal form
icon1.addEventListener("click", () => {
  if (iconBtn1.disabled == true) {
    erricon.style.display = "block";
    erricon.innerText = "This icon was already selected";
    icon1.classList.add("icon-noselect");
  } else {
    erricon.style.display = "none";

    if (icon1.classList.contains("icon-noselect")) {
      icon1.classList.remove("icon-noselect");
      icon1.classList.add("icon-select");
    } else {
      icon1.classList.add("icon-select");
    }
    icon2.classList.add("icon-noselect");

    if (playerOne.click == true) {
      p1iconClass = icon1;
    } else {
      p1iconClass = "";
    }

    if (playerTwo.click == true) {
      p2iconClass = icon1;
    } else {
      p2iconClass = "";
    }
  }
});

icon2.addEventListener("click", () => {
  if (iconBtn2.disabled == true) {
    erricon.style.display = "block";
    erricon.innerText = "This icon was already selected";
    icon2.classList.add("icon-noselect");
  } else {
    erricon.style.display = "none";

    if (icon2.classList.contains("icon-noselect")) {
      icon2.classList.remove("icon-noselect");
      icon2.classList.add("icon-select");
    } else {
      icon2.classList.add("icon-select");
    }
    icon1.classList.add("icon-noselect");

    if (playerOne.click == true) {
      p1iconClass = icon2;
    } else {
      p1iconClass = "";
    }

    if (playerTwo.click == true) {
      p2iconClass = icon2;
    } else {
      p2iconClass = "";
    }
  }
});

// edit modal card
let p1ready = document.getElementById("p1ready");
let p2ready = document.getElementById("p2ready");

let player1name = document.getElementById("player1name");
let player2name = document.getElementById("player2name");

let gameWait = document.getElementById("gameWait");
let gameStartTime = document.getElementById("gameStartTime");

let changePlayerCard = (player, playername) => {
  if (player == "p1") {
    p1ready.innerText = "Ready";
    player1name.innerText = playername;
    p1btn.disabled = true;
    p1btn.classList.add("disabled");
  }

  if (player == "p2") {
    p2ready.innerText = "Ready";
    player2name.innerText = playername;
    p2btn.disabled = true;
    p2btn.classList.add("disabled");
  }
};

// player dash board

let p1iconClassList1 = "";
let p1iconClassList2 = "";
let p2iconClassList1 = "";
let p2iconClassList2 = "";

let counter = 0;

let gameBoard = (box) => {
  counter++;

  switch (box) {
    case 1:
      if (toe_box1.disabled == false) {
        toe_box1.disabled = true;
        if (!(counter % 2 == 0)) {
          toe_box_icon1.classList.add(p1iconClassList1);
          toe_box_icon1.classList.add(p1iconClassList2);
          playerOne.positions = playerOne.positions + 1;
          checkWinner("p1");
        } else {
          toe_box_icon1.classList.add(p2iconClassList1);
          toe_box_icon1.classList.add(p2iconClassList2);
          playerTwo.positions = playerTwo.positions + 1;
          checkWinner("p2");
        }
      }
      break;

    case 2:
      if (toe_box2.disabled == false) {
        toe_box2.disabled = true;
        if (!(counter % 2 == 0)) {
          toe_box_icon2.classList.add(p1iconClassList1);
          toe_box_icon2.classList.add(p1iconClassList2);
          playerOne.positions = playerOne.positions + 2;
          checkWinner("p1");
        } else {
          toe_box_icon2.classList.add(p2iconClassList1);
          toe_box_icon2.classList.add(p2iconClassList2);
          playerTwo.positions = playerTwo.positions + 2;
          checkWinner("p2");
        }
      }
      break;

    case 3:
      if (toe_box3.disabled == false) {
        toe_box3.disabled = true;
        if (!(counter % 2 == 0)) {
          toe_box_icon3.classList.add(p1iconClassList1);
          toe_box_icon3.classList.add(p1iconClassList2);
          playerOne.positions = playerOne.positions + 3;
          checkWinner("p1");
        } else {
          toe_box_icon3.classList.add(p2iconClassList1);
          toe_box_icon3.classList.add(p2iconClassList2);
          playerTwo.positions = playerTwo.positions + 3;
          checkWinner("p2");
        }
      }
      break;

    case 4:
      if (toe_box4.disabled == false) {
        toe_box4.disabled = true;
        if (!(counter % 2 == 0)) {
          toe_box_icon4.classList.add(p1iconClassList1);
          toe_box_icon4.classList.add(p1iconClassList2);
          playerOne.positions = playerOne.positions + 4;
          checkWinner("p1");
        } else {
          toe_box_icon4.classList.add(p2iconClassList1);
          toe_box_icon4.classList.add(p2iconClassList2);
          playerTwo.positions = playerTwo.positions + 4;
          checkWinner("p2");
        }
      }
      break;

    case 5:
      if (toe_box5.disabled == false) {
        toe_box5.disabled = true;
        if (!(counter % 2 == 0)) {
          toe_box_icon5.classList.add(p1iconClassList1);
          toe_box_icon5.classList.add(p1iconClassList2);
          playerOne.positions = playerOne.positions + 5;
          checkWinner("p1");
        } else {
          toe_box_icon5.classList.add(p2iconClassList1);
          toe_box_icon5.classList.add(p2iconClassList2);
          playerTwo.positions = playerTwo.positions + 5;
          checkWinner("p2");
        }
      }
      break;

    case 6:
      if (toe_box6.disabled == false) {
        toe_box6.disabled = true;
        if (!(counter % 2 == 0)) {
          toe_box_icon6.classList.add(p1iconClassList1);
          toe_box_icon6.classList.add(p1iconClassList2);
          playerOne.positions = playerOne.positions + 6;
          checkWinner("p1");
        } else {
          toe_box_icon6.classList.add(p2iconClassList1);
          toe_box_icon6.classList.add(p2iconClassList2);
          playerTwo.positions = playerTwo.positions + 6;
          checkWinner("p2");
        }
      }
      break;

    case 7:
      if (toe_box7.disabled == false) {
        toe_box7.disabled = true;
        if (!(counter % 2 == 0)) {
          toe_box_icon7.classList.add(p1iconClassList1);
          toe_box_icon7.classList.add(p1iconClassList2);
          playerOne.positions = playerOne.positions + 7;
          checkWinner("p1");
        } else {
          toe_box_icon7.classList.add(p2iconClassList1);
          toe_box_icon7.classList.add(p2iconClassList2);
          playerTwo.positions = playerTwo.positions + 7;
          checkWinner("p2");
        }
      }
      break;

    case 8:
      if (toe_box8.disabled == false) {
        toe_box8.disabled = true;
        if (!(counter % 2 == 0)) {
          toe_box_icon8.classList.add(p1iconClassList1);
          toe_box_icon8.classList.add(p1iconClassList2);
          playerOne.positions = playerOne.positions + 8;
          checkWinner("p1");
        } else {
          toe_box_icon8.classList.add(p2iconClassList1);
          toe_box_icon8.classList.add(p2iconClassList2);
          playerTwo.positions = playerTwo.positions + 8;
          checkWinner("p2");
        }
      }
      break;

    case 9:
      if (toe_box9.disabled == false) {
        toe_box9.disabled = true;
        if (!(counter % 2 == 0)) {
          toe_box_icon9.classList.add(p1iconClassList1);
          toe_box_icon9.classList.add(p1iconClassList2);
          playerOne.positions = playerOne.positions + 9;
          checkWinner("p1");
        } else {
          toe_box_icon9.classList.add(p2iconClassList1);
          toe_box_icon9.classList.add(p2iconClassList2);
          playerTwo.positions = playerTwo.positions + 9;
          checkWinner("p2");
        }
      }
      break;
  }
};

let dashBoard = () => {
  // put name
  tac_rank_name1.innerText = playerOne.name;
  tac_rank_name2.innerText = playerTwo.name;

  //put icon
  tac_rank_name_icon1.classList.add(playerOne.icon.classList[0]);
  tac_rank_name_icon1.classList.add(playerOne.icon.classList[1]);
  tac_rank_name_icon2.classList.add(playerTwo.icon.classList[0]);
  tac_rank_name_icon2.classList.add(playerTwo.icon.classList[1]);
};

// game box click
toe_box1.addEventListener("click", () => {
  gameBoard(1);
});
toe_box2.addEventListener("click", () => {
  gameBoard(2);
});
toe_box3.addEventListener("click", () => {
  gameBoard(3);
});
toe_box4.addEventListener("click", () => {
  gameBoard(4);
});
toe_box5.addEventListener("click", () => {
  gameBoard(5);
});
toe_box6.addEventListener("click", () => {
  gameBoard(6);
});
toe_box7.addEventListener("click", () => {
  gameBoard(7);
});
toe_box8.addEventListener("click", () => {
  gameBoard(8);
});
toe_box9.addEventListener("click", () => {
  gameBoard(9);
});

// modal start button
let time = 5;
let intervalID;

function printAndIncrement() {
  // Stop interval procedure when "var i" reach to 100.
  if (time <= 1) {
    clearInterval(intervalID);
    return;
  }

  time--;
  gameStartTime.innerText = `Game will start in ${time} sec`;
}

let gstart = document.querySelector(".gstart");
gstart.addEventListener("click", () => {
  pnameValue = pname.value;

  if (playerOne.click == true) {
    if (pnameValue == "") {
      errname.style.display = "block";
      errname.innerText = "Please enter your name before start";
      playerOne.name = "";
    } else {
      errname.style.display = "none";
      playerOne.name = pnameValue;
    }

    if (p1iconClass == "") {
      erricon.style.display = "block";
      erricon.innerText = "Please select a Icon";
      playerOne.icon = "";
    } else {
      erricon.style.display = "none";
      playerOne.icon = p1iconClass;

      p1iconClassList1 = playerOne.icon.classList[0];
      p1iconClassList2 = playerOne.icon.classList[1];
    }

    if (!(playerOne.name == "") && !(playerOne.icon == "")) {
      playerOne.ready = true;
      changePlayerCard("p1", playerOne.name);
    } else {
      playerOne.ready = false;
    }
  }

  if (playerTwo.click == true) {
    if (pnameValue == "") {
      errname.style.display = "block";
      errname.innerText = "Please enter your name before start";
      playerTwo.name = "";
    } else {
      errname.style.display = "none";
      playerTwo.name = pnameValue;
    }

    if (p2iconClass == "") {
      erricon.style.display = "block";
      erricon.innerText = "Please select one of them";
      playerTwo.icon = "";
    } else {
      erricon.style.display = "none";
      playerTwo.icon = p2iconClass;

      p2iconClassList1 = playerTwo.icon.classList[0];
      p2iconClassList2 = playerTwo.icon.classList[1];
    }

    if (!(playerTwo.name == "") && !(playerTwo.icon == "")) {
      playerTwo.ready = true;
      changePlayerCard("p2", playerTwo.name);
    } else {
      playerTwo.ready = false;
    }
  }

  gameWait.style.display = "block";

  if (errname.style.display == "none" && erricon.style.display == "none") {
    if (playerOne.ready == true && playerTwo.ready == true) {
      gameWait.style.display = "none";
      gameStartTime.style.display = "block";
      gameStartTime.innerText = `Game will start in ${time} sec`;

      intervalID = setInterval(printAndIncrement, 1000);

      setTimeout(() => {
        gameStartTime.innerText = `All The Best`;
      }, 5000);

      setTimeout(() => {
        mainBox.style.display = "none";
        tic.style.display = "flex";
        dashBoard();
      }, 6000);
    } else if (playerOne.ready == true && playerTwo.ready == false) {
      gameWait.style.display = "block";
      gameWait.innerText = "Waiting For Player 2....";
    } else if (playerOne.ready == false && playerTwo.ready == true) {
      gameWait.style.display = "block";
      gameWait.innerText = "Waiting For Player 1....";
    }

    // disabled the button after ready
    if (p1iconClass == icon1 || p2iconClass == icon1) {
      iconBtn1.disabled = true;
    } else {
      iconBtn1.disabled = false;
    }

    if (p1iconClass == icon2 || p2iconClass == icon2) {
      iconBtn2.disabled = true;
    } else {
      iconBtn2.disabled = false;
    }

    modalClose();
  }
});

// reset the game
let resetGame = () => {
  playerOne.positions = "";
  playerTwo.positions = "";

  for (let i = 1; i <= 3; i++) {
    toe_box_icon1.classList.remove(toe_box_icon1.classList[1]);
    toe_box_icon1.classList.remove(toe_box_icon1.classList[2]);
    toe_box_icon2.classList.remove(toe_box_icon2.classList[1]);
    toe_box_icon2.classList.remove(toe_box_icon2.classList[2]);
    toe_box_icon3.classList.remove(toe_box_icon3.classList[1]);
    toe_box_icon3.classList.remove(toe_box_icon3.classList[2]);
    toe_box_icon4.classList.remove(toe_box_icon4.classList[1]);
    toe_box_icon4.classList.remove(toe_box_icon4.classList[2]);
    toe_box_icon5.classList.remove(toe_box_icon5.classList[1]);
    toe_box_icon5.classList.remove(toe_box_icon5.classList[2]);
    toe_box_icon6.classList.remove(toe_box_icon6.classList[1]);
    toe_box_icon6.classList.remove(toe_box_icon6.classList[2]);
    toe_box_icon7.classList.remove(toe_box_icon7.classList[1]);
    toe_box_icon7.classList.remove(toe_box_icon7.classList[2]);
    toe_box_icon8.classList.remove(toe_box_icon8.classList[1]);
    toe_box_icon8.classList.remove(toe_box_icon8.classList[2]);
    toe_box_icon9.classList.remove(toe_box_icon9.classList[1]);
    toe_box_icon9.classList.remove(toe_box_icon9.classList[2]);
  }

  toe_box1.disabled = false;
  toe_box2.disabled = false;
  toe_box3.disabled = false;
  toe_box4.disabled = false;
  toe_box5.disabled = false;
  toe_box6.disabled = false;
  toe_box7.disabled = false;
  toe_box8.disabled = false;
  toe_box9.disabled = false;

  counter = 0;
};
playagainBtn.addEventListener("click", resetGame);
