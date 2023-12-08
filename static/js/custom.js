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
var divName = "";
var alredyrun = {};

//////////Start Reply button function to reload editor animation///////////////////////////

function reply(divid) {
  const elementToRefresh = document.getElementById(divid);
  const newElement = elementToRefresh.cloneNode(true);

  elementToRefresh.parentNode.replaceChild(newElement, elementToRefresh);
}
//////////End Reply button function to reload editor animation///////////////////////////

//////////Start Chat in tutorial and rewrite///////////////////////////

async function chatDoc(divid) {
  buttons = Array.from(document.querySelectorAll(".rewrite"));

  buttons.forEach(function (button) {
    button.style.display = "none";
  });

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

    var childElements = editor1.querySelectorAll(".cbox");
    childElements_ = childElements;

    if(divid !="displayTab3box2" && divid !="displayTab3box1"){
      childElements_.forEach((childElement) => {
        childElement.style.display = "none";
      });
    }
    divName = divid;
    if(divid =="displayTab3box1"){
      editor2childElements_ =[];
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
    
    if(divName =="displayTab3box2"){
      if (k < editor2childElements_.length) {
        const childElement = editor2childElements_[k];
        childElement.style.display = "block";
        k++;
      }
    }else{
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
        if(divName =="displayTab3box2"){
          if (k < editor2childElements_.length) {
            const childElement = editor2childElements_[k];
  
            childElement.style.display = "block";
  
            k++;
          }
  
        }else{
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

    if (running == false && scrollPosition >= 1200 && scrollPosition < 1300) {
      handleScroll(1300, "chat1");
    }
    if (running == false && scrollPosition >= 3000 && scrollPosition < 3200) {
      handleScroll(3000, "chat2");
    }
    if (running == false && scrollPosition >= 4200 && scrollPosition < 4400) {
      handleScroll(4200, "chat3");
    }
    if (running == false && scrollPosition >= 5400 && scrollPosition < 5600) {
      handleScroll(5400, "chat4");
    }
    if (running == false && scrollPosition >= 6500 && scrollPosition < 6700) {
      handleScroll(6500, "chat5");
    }
    if (running == false && scrollPosition >= 7600 && scrollPosition < 7800) {
      handleScroll(7600, "chat6");
    }
  }
});

////////// End To handle animation on scroll in pages///////////////////////////
