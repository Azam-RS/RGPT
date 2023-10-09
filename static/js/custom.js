var txt = "";

var i = 0;

var speed = 4;

var editor1;

var spans_;

var LineNo = 0;

var spanids = [];

var Arrspan = [];

var buttons;

window.addEventListener("load", async function () {
  try {
    // await reply("editor1");
    // await reply("editor1");
  } catch (error) {
    // console.error("Error:", error);
  }
});

////////////////////////////////////////////////////////////////////////////////

async function reply(divid) {
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

  try {
    editor1 = document.getElementById(divid);

    var spans = editor1.getElementsByTagName("span");

    spans_ = spans;

    for (var j = 0; j < spans.length; j++) {
      if (
        spans[j].className == "token important" ||
        spans[j].className == "token operator" ||
        spans[j].className == "token number" ||
        spans[j].className == "token comment" ||
        spans[j].className == "token keyword" ||
        spans[j].className == "token plain" ||
        spans[j].className == "token punctuation"
      ) {
        spanids[j] = spans[j].innerHTML;

        spans[j].innerHTML = "";

        Arrspan.push(j);
      }
    }

    LineNo = 0;

    txt = spanids[Arrspan[LineNo]];

    await typeWriter();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function typeWriter() {
  if (LineNo === 1) {
    setTimeout(async () => {
      LineNo++;

      txt = spanids[Arrspan[LineNo]];

      i = 0;

      await typeWriter();
    }, 2000); // 2 seconds delay
  } else if (i <= txt.length) {
    spans_[Arrspan[LineNo]].innerHTML = txt.slice(0, i + 1);

    i++;

    setTimeout(async () => {
      await typeWriter();

      if (LineNo == Arrspan.length - 1) {
        buttons.forEach(function (button) {
          button.style.display = "block";
        });
      }
    }, speed);
  } else {
    LineNo++;

    if (LineNo < Arrspan.length) {
      txt = spanids[Arrspan[LineNo]];

      i = 0;

      setTimeout(async () => {
        await typeWriter();
      }, speed);
    }
  }
}

//////////////////////////////////////////////////////////////////////////////// end  ///////////////////
