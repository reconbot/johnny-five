<!--remove-start-->

# Light - EVShield NXT (Ambient)

<!--remove-end-->








Run this example from the command line with:
```bash
node eg/light-ambient-EVS_NXT.js
```


```javascript
const { Board, Light } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const light = new Light({
    controller: "EVS_NXT",
    pin: "BAS2"
  });

  light.on("change", (data) => {
    console.log("Ambient Light Level: ", data.level);
  });
});

```








&nbsp;

<!--remove-start-->

## License
Copyright (c) 2012-2014 Rick Waldron <waldron.rick@gmail.com>
Licensed under the MIT license.
Copyright (c) 2015-2019 The Johnny-Five Contributors
Licensed under the MIT license.

<!--remove-end-->
