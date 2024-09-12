var txt = "";
var i = 0;
var speed = 1;
var editor1;
var childElements_;
var editor2childElements_;
var spans_;
var LineNo = 0;
var spanids = [];
var Arrspan = [];
var buttons;
var k = 0;
var running = false;
var runningSnippet = false;
var divName = "";
var alredyrun = {};
var chat1 = false;
var c1 = false;
var c2 = false;
var c3 = false;
var uart1 = false;
var uart2 = false;
var uart3 = false;
var uart4 = false;
var uart5 = false;
var uart6 = false;
var chat2 = false;
var chat3 = false;
var chat4 = false;
var chat5 = false;
var chat6 = false;

//////////Start Reply button function to reload editor animation///////////////////////////

function reply(divid) {
  const elementToRefresh = document.getElementById(divid);

  if (elementToRefresh.parentElement.classList.contains('dontAnimateSnippet')) {
    return;
  }
  if (runningSnippet == true) {
    return;
  }
  runningSnippet = true;
  
  buttons = Array.from(document.querySelectorAll(".rewrite"));

  buttons.forEach(function (button) {
    button.style.display = "none";
  });

  const newElement = elementToRefresh.cloneNode(true);

  elementToRefresh.parentNode.replaceChild(newElement, elementToRefresh);
  docTypingAnimation(divid);
}
//////////End Reply button function to reload editor animation///////////////////////////

//////////Start Chat in tutorial and rewrite///////////////////////////

async function chatDoc(divid) {
  buttons = Array.from(document.querySelectorAll(".rewrite"));

 

  txt = "";
  i = 0;
  LineNo = 0;
  spanids = [];
  Arrspan = [];
  spans_ = [];
  k = 0;
  childElements_ = [];
  editor1 = "";
  running = true;
  divName = "";

  try {
    editor1 = document.getElementById(divid);
    buttons.forEach(function (button) {
      button.style.display = "none";
    });
    var childElements = editor1.querySelectorAll(".cbox");
    childElements_ = childElements;

    if (divid != "displayTab3box2" && divid != "displayTab3box1") {
      childElements_.forEach((childElement) => {
        childElement.style.display = "none";
      });
    }
    divName = divid;
    if (divid == "displayTab3box1") {
      editor2childElements_ = [];
      var editor2 = document.getElementById("displayTab3box2");
      var editor2childElements = editor2.querySelectorAll(".cbox");
      editor2childElements_ = editor2childElements;
    }

    var spans = editor1.getElementsByTagName("p");
    spans_ = spans;

    for (var j = 0; j < spans.length; j++) {
      if (spans[j].className == "animateText") {
        spanids[j] = spans[j].innerHTML;

        spans[j].innerHTML = "";

        Arrspan.push(j);
      }
    }

    LineNo = 0;

    txt = spanids[Arrspan[LineNo]];

    if (divName == "displayTab3box2") {
      if (k < editor2childElements_.length) {
        const childElement = editor2childElements_[k];
        childElement.style.display = "block";
        k++;
      }
    } else {
      if (k < childElements_.length) {
        const childElement = childElements_[k];
        childElement.style.display = "block";
        k++;
      }
    }
    await typeWriter();
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to show typping animation
async function typeWriter() {
  if (i <= txt.length) {
    spans_[Arrspan[LineNo]].innerHTML = txt.slice(0, i + 1);

    i++;

    setTimeout(async () => {
      await typeWriter();

      if (LineNo == Arrspan.length) {
        buttons.forEach(function (button) {
          button.style.display = "block";
        });

        running = false;
      }
    }, speed);
  } else {
    LineNo++;

    if (LineNo < Arrspan.length) {
      txt = spanids[Arrspan[LineNo]];

      i = 0;
      if (divName == "displayTab3box2") {
        if (k < editor2childElements_.length) {
          const childElement = editor2childElements_[k];

          childElement.style.display = "block";

          k++;
        }
      } else {
        if (k < childElements_.length) {
          const childElement = childElements_[k];

          childElement.style.display = "block";

          k++;
        }
      }

      setTimeout(async () => {
        await typeWriter();
      }, speed);
    }
  }
}
//////////End Chat in tutorial and rewrite///////////////////////////

//////////To handle animation on scroll in pages///////////////////////////

function handleScroll(position, Divid) {
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (!alredyrun[Divid]) {
    var elements = document.querySelectorAll("#" + Divid);

    for (var i = 0; i < elements.length; i++) {
      alredyrun[Divid] = true;
      chatDoc(Divid);

      break;
    }

    alredyrun[Divid] = false;
  } else if (scrollPosition < position && alredyrun[Divid]) {
    alredyrun[Divid] = false;
  }
}

window.addEventListener("scroll", function () {
  if (
    window.location.href.includes("functional-specifications-data-latching")
  ) {
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (running == false && scrollPosition >= 1200 && scrollPosition < 1300 && chat1 == false) {
      handleScroll(1300, "chat1");
      chat1 = true;
    }
    if (running == false && scrollPosition >= 3000 && scrollPosition < 3200 && chat2 == false) {
      handleScroll(3000, "chat2");
      chat2 = true;

    }
    if (running == false && scrollPosition >= 4200 && scrollPosition < 4400  && chat3 == false) {
      handleScroll(4200, "chat3");
      chat3 = true;
    }
    if (running == false && scrollPosition >= 5400 && scrollPosition < 5600 && chat4 == false) {
      handleScroll(5400, "chat4");
      chat4 = true;
    }
    if (running == false && scrollPosition >= 6500 && scrollPosition < 6700 && chat5 == false) {
      handleScroll(6500, "chat5");
      chat5 = true;
    }
    if (running == false && scrollPosition >= 7600 && scrollPosition < 7800 && chat6 == false) {
      handleScroll(7600, "chat6");
      chat6 = true;
    }
  }else if (
    window.location.href.includes("code-assistant")
  ){
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (runningSnippet === false && scrollPosition >= 480 && scrollPosition < 600 && c1 == false) {
      reply("c1");
      c1 = true;
    }
    if (runningSnippet === false && scrollPosition >= 680 && scrollPosition < 800 && c2 == false) {
      reply("c2");
      c2 = true;
      // document.getElementById("cc1").style.backgroundColor = "green";
    }
  }
  else if (
    window.location.href.includes("ip-catalog")
  ){
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (runningSnippet === false && scrollPosition >= 2000 && scrollPosition < 2200 && c3 == false) {
      reply("c3");
      c3 = true;
    }
  }
  else if (
    window.location.href.includes("uart-controller")
  ){
    var scrollPosition = window.scrollY || window.pageYOffset;
  // console.log(scrollPosition);
    if (runningSnippet === false && scrollPosition >= 3500 && scrollPosition < 4200 && uart1 == false) {
      reply("uart1");
      uart1 = true;
    }
    if (runningSnippet === false && scrollPosition >= 5000 && scrollPosition < 5200 && uart2 == false) {
      reply("uart2");
      uart2 = true;
    }
    if (runningSnippet === false && scrollPosition >= 6700 && scrollPosition < 6900 && uart3 == false) {
      reply("uart3");
      uart3 = true;
    }
    if (runningSnippet === false && scrollPosition >= 8200 && scrollPosition < 8400 && uart4 == false) {
      reply("uart4");
      uart4 = true;
    }
    if (runningSnippet === false && scrollPosition >= 9900 && scrollPosition < 10000 && uart5 == false) {
      reply("uart5");
      uart5 = true;
    }    
    if (runningSnippet === false && scrollPosition >= 11100 && scrollPosition < 11200 && uart6 == false) {
      reply("uart6");
      uart6 = true;
    }

  }
  else{
    var scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 65){
      const navElement = document.querySelector('.navbar');
      navElement.style.backgroundColor = '#161B22';
    }else if (scrollPosition < 65){
      const navElement = document.querySelector('.navbar');
      navElement.style.backgroundColor = 'transparent';
    } 

    chat1 = chat2 = chat3 = chat4 = chat5 = chat6 = c1 = c2 = false;
  }
});

////////// End To handle animation on scroll in pages///////////////////////////

function typeText(element, text, speed) {
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
    else{
      buttons = Array.from(document.querySelectorAll(".rewrite"));

      buttons.forEach(function (button) {
        button.style.display = "block";
      });
      runningSnippet = false;
    }
  }

  type();
}

function docTypingAnimation(divId) {
  const elementToRefresh = document.getElementById(divId);

  if (elementToRefresh) {
    const newTokenElement = elementToRefresh.querySelector(
      ".language-verilog:first-child code .token-line:first-child .token"
    );

    if (newTokenElement) {
      const textContent = newTokenElement.textContent;
      newTokenElement.textContent = "";
      var typingSpeed = 20;
      if (divId == "propmt1") {
        typingSpeed = 5;
      }
      //for ip-catalog
      if (divId == "c3") {
        typingSpeed = 2;
      }
      typeText(newTokenElement, textContent, typingSpeed);
    }
  }
}
