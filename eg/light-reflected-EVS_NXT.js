const { Board, Light } = require("../lib/johnny-five");
const board = new Board();

board.on("ready", () => {
  const reflect = new Light({
    controller: "EVS_NXT",
    pin: "BBS1",
    mode: "reflected"
  });

  reflect.on("change", (data) => {
    console.log("Light Reflection Level: ", data.level);
  });
});
