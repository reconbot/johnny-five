var platformdata = {
  "license": "Copyright (c) 2015 Rick Waldron",
  "platforms": [
    {
      "name": "Arduino",
      "url": "http://www.arduino.cc/",
      "plugin": {
        "name": "",
        "url": "",
        "instructions": ""
      },
      "environment": {
        "name": "StandardFirmataPlus",
        "url": "https://github.com/firmata/arduino",
        "instructions": "https://github.com/rwaldron/johnny-five/wiki/Getting-Started#trouble-shooting",
        "relationship": "host-client"
      },
      "via": [
        "usb",
        "xbee",
        "bluetooth"
      ],
      "variants": [
        {
          "name": "Arduino Uno",
          "image": "arduino-uno.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata).",
            "Supports the `STEPPER_*` extensions when used with [`AdvancedFirmata`](https://github.com/soundanalogous/AdvancedFirmata) or [`ConfigurableFirmata`](https://github.com/firmata/ConfigurableFirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "SparkFun RedBoard",
          "image": "sparkfun-redboard.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata).",
            "Supports the `STEPPER_*` extensions when used with [`AdvancedFirmata`](https://github.com/soundanalogous/AdvancedFirmata) or [`ConfigurableFirmata`](https://github.com/firmata/ConfigurableFirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Arduino Leonardo",
          "image": "arduino-leo.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata).",
            "Supports the `STEPPER_*` extensions when used with [`AdvancedFirmata`](https://github.com/soundanalogous/AdvancedFirmata) or [`ConfigurableFirmata`](https://github.com/firmata/ConfigurableFirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Arduino Mega",
          "image": "arduino-mega.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata).",
            "Supports the `STEPPER_*` extensions when used with [`AdvancedFirmata`](https://github.com/soundanalogous/AdvancedFirmata) or [`ConfigurableFirmata`](https://github.com/firmata/ConfigurableFirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Arduino Fio",
          "image": "arduino-fio.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata).",
            "Supports the `STEPPER_*` extensions when used with [`AdvancedFirmata`](https://github.com/soundanalogous/AdvancedFirmata) or [`ConfigurableFirmata`](https://github.com/firmata/ConfigurableFirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Arduino Micro",
          "image": "arduino-micro.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Memory constraints"
              ],
              [
                "Memory constraints"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Arduino Mini",
          "image": "arduino-mini.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Memory constraints"
              ],
              [
                "Memory constraints"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Arduino Nano",
          "image": "arduino-nano.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Memory constraints"
              ],
              [
                "Memory constraints"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Arduino Pro Mini",
          "image": "arduino-pro-mini.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Memory constraints"
              ],
              [
                "Memory constraints"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "BotBoarduino",
          "image": "botboarduino.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata).",
            "Supports the `STEPPER_*` extensions when used with [`AdvancedFirmata`](https://github.com/soundanalogous/AdvancedFirmata) or [`ConfigurableFirmata`](https://github.com/firmata/ConfigurableFirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "chipKit Uno32",
          "image": "chipkit-uno32.png",
          "enabled": true,
          "information": [
            "[Check out chipkit.net!](http://chipkit.net/)",
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata).",
            "Supports the `STEPPER_*`, extensions when used with [`AdvancedFirmata`](https://github.com/soundanalogous/AdvancedFirmata) or [`ConfigurableFirmat`](https://github.com/firmata/ConfigurableFirmata).",
            "Digital pins 26-41 and Analog pins A6-A11 are presently not supported in StandardFirmataPlus, pending a pin definition update in `Boards.h`",
            "[This fork](https://github.com/wayneandlayne/firmata) has the relevant changes and should be uploaded to the board via the [chipKit-provided IDE](http://chipkit.net/started/install-chipkit-software/)"
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Spider Robot Controller",
          "image": "spider-robot-controller.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata).",
            "Supports the `STEPPER_*` extensions when used with [`AdvancedFirmata`](https://github.com/soundanalogous/AdvancedFirmata) or [`ConfigurableFirmata`](https://github.com/firmata/ConfigurableFirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "DFRobot Romeo",
          "image": "dfrobot-romeo.png",
          "enabled": true,
          "information": [
            "Supports the `PING_READ` extension, when used with [`PingFirmata`](/api/proximity/#pingfirmata).",
            "Supports the `STEPPER_*` extensions when used with [`AdvancedFirmata`](https://github.com/soundanalogous/AdvancedFirmata) or [`ConfigurableFirmata`](https://github.com/firmata/ConfigurableFirmata)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Teensy 3",
          "image": "teensy-3.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Requires special PingFirmata firmware"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "yes"
          }
        }
      ]
    },
    {
      "name": "BeagleBone",
      "url": "http://beagleboard.org/",
      "plugin": {
        "name": "BeagleBone-IO",
        "url": "https://github.com/julianduque/beaglebone-io",
        "instructions": "https://github.com/julianduque/beaglebone-io#beaglebone-io"
      },
      "environment": {
        "name": "Debian",
        "url": "http://beagleboard.org/latest-images",
        "instructions": "http://beagleboard.org/getting-started#update",
        "relationship": "embedded"
      },
      "via": [
        "gpio",
        "sysfs"
      ],
      "variants": [
        {
          "name": "BeagleBone Black",
          "image": "beaglebone-black.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        }
      ]
    },
    {
      "name": "Next Thing Co. C.H.I.P.",
      "url": "http://beagleboard.org/",
      "plugin": {
        "name": "Chip-IO",
        "url": "https://github.com/sandeepmistry/node-chip-io",
        "instructions": "https://github.com/sandeepmistry/node-chip-io#prerequisites"
      },
      "environment": {
        "name": "Debian",
        "url": "https://github.com/sandeepmistry/node-chip-io#prerequisites",
        "instructions": "https://github.com/nodesource/distributions#debinstall",
        "relationship": "embedded"
      },
      "via": [
        "gpio",
        "sysfs",
        "i2c"
      ],
      "variants": [
        {
          "name": "CHIP",
          "alternate": "Next Thing Co. C.H.I.P.",
          "image": "next-thing-chip.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "no",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        }
      ]
    },
    {
      "name": "RedBearLab",
      "url": "http://redbearlab.com/blendmicro",
      "plugin": {
        "name": "BlendMicro-IO",
        "url": "https://github.com/noopkat/blend-micro-io",
        "instructions": "https://github.com/noopkat/blend-micro-io#how-do-i-install-it"
      },
      "environment": {
        "name": "BLEFirmata",
        "url": "https://github.com/shokai/node-ble-firmata/blob/master/samples/sysex/BLEFirmataWithLedBlink/BLEFirmataWithLedBlink.ino",
        "instructions": "",
        "relationship": "host-client-bluetooth"
      },
      "via": [
        "bluetooth"
      ],
      "variants": [
        {
          "name": "Blend Micro v1.0",
          "image": "blend-micro-v1.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        }
      ]
    },
    {
      "name": "Electric Imp",
      "url": "https://electricimp.com/",
      "plugin": {
        "name": "Imp-IO",
        "url": "https://github.com/rwaldron/imp-io",
        "instructions": "https://github.com/rwaldron/imp-io#imp-io-setup"
      },
      "environment": {
        "name": "Tyrion",
        "url": "https://github.com/rwaldron/tyrion",
        "instructions": "https://github.com/rwaldron/imp-io#tyrion-setup",
        "relationship": "host-client-wifi"
      },
      "via": [
        "HTTP"
      ],
      "variants": [
        {
          "name": "Electric Imp April",
          "image": "electric-imp-april.png",
          "enabled": true,
          "information": [
            "Requires an internet connected WiFi connection and is subject to request rate limiting by the Electric Imp API server."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "no",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        }
      ]
    },
    {
      "name": "Intel Galileo",
      "url": "https://www-ssl.intel.com/content/www/us/en/do-it-yourself/galileo-maker-quark-board.html",
      "plugin": {
        "name": "Galileo-IO",
        "url": "https://github.com/rwaldron/galileo-io",
        "instructions": "https://github.com/rwaldron/johnny-five/wiki/Getting-started-with-Johnny-Five-and-the-Intel-Galileo-gen2"
      },
      "environment": {
        "name": "IoT DevKit",
        "url": "https://software.intel.com/en-us/getting-started-for-c-c-plus-plus-eclipse-galileo-and-edison",
        "instructions": "https://software.intel.com/en-us/getting-started-for-c-c-plus-plus-eclipse-galileo-and-edison",
        "relationship": "embedded"
      },
      "via": [
        "gpio",
        "sysfs",
        "mraa"
      ],
      "variants": [
        {
          "name": "Intel Galileo Gen 1",
          "image": "intel-galileo-gen1.png",
          "enabled": true,
          "information": [
            "Non IoTKit builds are no longer supported."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "Intel Galileo Gen 2",
          "image": "intel-galileo-gen2.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        }
      ]
    },
    {
      "name": "Intel Edison",
      "url": "https://www-ssl.intel.com/content/www/us/en/do-it-yourself/edison.html",
      "plugin": {
        "name": "Edison-IO",
        "url": "https://github.com/rwaldron/edison-io",
        "instructions": "https://github.com/rwaldron/galileo-io#getting-started"
      },
      "environment": {
        "name": "IoT DevKit",
        "url": "http://www.intel.com/support/maker/edison.htm",
        "instructions": "http://www.intel.com/support/maker/edison.htm#how",
        "relationship": "embedded"
      },
      "via": [
        "gpio",
        "sysfs",
        "mraa"
      ],
      "variants": [
        {
          "name": "Intel Edison Arduino",
          "image": "intel-edison-arduino.png",
          "enabled": true,
          "information": [
            "Hardware is capable of supporting only 4 PWM outputs. As a result, native bindings do not support PWM on pins 10 and 11.",
            "While Galileo-io/Edison-io/Joule-io does not yet support serial comms, you can bind to /dev/ttyFMD1 on the Edison Arduino board using [the serialport module](https://github.com/EmergingTechnologyAdvisors/node-serialport)."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [
                "Limited Hardware support"
              ],
              [
                "Limited Hardware support"
              ],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "Intel Edison Mini",
          "image": "intel-edison-mini.png",
          "enabled": true,
          "information": [
            "`analogRead` components can be supported via `Expander` instances. See [Expander](/api/expander/) API for examples."
          ],
          "notes": {
            "public": [
              [
                "Hardware support missing"
              ],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "no",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "SparkFun Edison GPIO Block",
          "image": "sparkfun-gpio-block.png",
          "enabled": true,
          "information": [
            "`analogRead` components can be supported via `Expander` instances. See [Expander](/api/expander/) API for examples."
          ],
          "notes": {
            "public": [
              [
                "Hardware support missing"
              ],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "no",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "SparkFun Arduino Block",
          "image": "sparkfun-arduino-block.png",
          "enabled": true,
          "information": [
            "This block does not use native mraa bindings. Please see [SparkFun Edison Arduino Block](https://github.com/rwaldron/galileo-io/#sparkfun-edison-arduino-block), in the [Galileo-IO](https://github.com/rwaldron/galileo-io) repository, for help getting started."
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "yes",
            "Stepper": "yes",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        }
      ]
    },
    {
      "name": "Intel Joule",
      "url": "https://software.intel.com/en-us/iot/hardware/joule",
      "plugin": {
        "name": "Joule-IO",
        "url": "https://github.com/rwaldron/joule-io",
        "instructions": "https://software.intel.com/en-us/intel-joule-getting-started"
      },
      "environment": {
        "name": "Reference Linux* OS for IoT",
        "url": "https://software.intel.com/en-us/node/672326",
        "instructions": "https://software.intel.com/en-us/node/672326",
        "relationship": "embedded"
      },
      "via": [
        "mraa"
      ],
      "variants": [
        {
          "name": "Intel Joule 570x (Carrier Board)",
          "image": "intel-joule-carrier.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [
                "Limited Hardware support"
              ],
              [
                "Limited Hardware support"
              ],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "no",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        }
      ]
    },
    {
      "name": "LightBlue",
      "url": "https://punchthrough.com/bean/",
      "plugin": {
        "name": "Bean-IO",
        "url": "https://github.com/monteslu/bean-io",
        "instructions": "https://github.com/monteslu/bean-io#getting-started"
      },
      "environment": {
        "name": "StandardFirmata",
        "url": "https://github.com/firmata/arduino",
        "instructions": "https://punchthrough.com/bean/getting-started-osx/",
        "relationship": "host-client-bluetooth"
      },
      "via": [
        "bluetooth"
      ],
      "variants": [
        {
          "name": "LightBlue Bean",
          "image": "light-blue-bean.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        }
      ]
    },
    {
      "name": "Linino",
      "url": "http://www.linino.org/",
      "plugin": {
        "name": "Nino-IO",
        "url": "https://github.com/rwaldron/nino-io",
        "instructions": "https://github.com/rwaldron/nino-io#getting-started"
      },
      "environment": {
        "name": "Linino",
        "url": "https://github.com/linino/linino_distro",
        "instructions": "http://wiki.linino.org/doku.php?id=wiki:upgradetolininoio",
        "relationship": "embedded"
      },
      "via": [
        "gpio",
        "sysfs"
      ],
      "variants": [
        {
          "name": "Linino One",
          "image": "linino-one.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "Linino Arduino Yun",
          "image": "arduino-yun-linino-os.png",
          "enabled": false
        }
      ]
    },
    {
      "name": "pcDuino3",
      "url": "http://www.pcduino.com/",
      "plugin": {
        "name": "pcDuino-IO",
        "url": "https://github.com/rwaldron/pcduino-io",
        "instructions": "https://github.com/rwaldron/pcduino-io#getting-started"
      },
      "environment": {
        "name": "pcDuino",
        "url": "http://www.pcduino.com/",
        "instructions": "http://www.pcduino.com/wiki/index.php?title=Book",
        "relationship": "embedded"
      },
      "via": [
        "gpio",
        "sysfs"
      ],
      "variants": [
        {
          "name": "pcDuino3 Dev Board",
          "image": "pcduino3.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [
                "Hardware support missing"
              ],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "no",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "Linino Arduino Yun",
          "image": "arduino-yun-linino-os.png",
          "enabled": false
        }
      ]
    },
    {
      "name": "Pinoccio",
      "url": "https://pinocc.io/",
      "plugin": {
        "name": "Pinoccio-IO",
        "url": "https://github.com/soldair/pinoccio-io/",
        "instructions": "https://github.com/rwaldron/spark-io#getting-started"
      },
      "environment": {
        "name": "pinocc.io",
        "url": "https://pinocc.io/",
        "instructions": "http://support.pinocc.io/hc/en-us/articles/201439160-Out-of-the-Box",
        "relationship": "host-client-wifi"
      },
      "via": [
        "WiFi",
        "TCP server"
      ],
      "variants": [
        {
          "name": "Pinoccio Scout",
          "image": "pinoccio.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Support is currently in development"
              ],
              [
                "Hardware support missing"
              ],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "no",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "no"
          }
        }
      ]
    },
    {
      "name": "Raspberry Pi",
      "url": "http://www.raspberrypi.org/",
      "plugin": {
        "name": "Raspi-IO",
        "url": "https://github.com/nebrius/raspi-io",
        "instructions": "https://github.com/nebrius/raspi-io/wiki"
      },
      "environment": {
        "name": "Raspbian",
        "url": "http://www.raspbian.org/",
        "instructions": "http://www.raspbian.org/RaspbianStartHere",
        "relationship": "embedded"
      },
      "via": [
        "gpio",
        "sysfs"
      ],
      "variants": [
        {
          "name": "Raspberry Pi 3 Model B",
          "image": "raspberry-pi-3-model-b.png",
          "enabled": true,
          "information": [
            "`analogRead` components can be supported via `Expander` instances. See [Expander](/api/expander/) API for examples."
          ],
          "notes": {
            "public": [
              [
                "Hardware support missing"
              ],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Software support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "no",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "Raspberry Pi 2 Model B",
          "image": "raspberry-pi-2-model-b.png",
          "enabled": true,
          "information": [
            "`analogRead` components can be supported via `Expander` instances. See [Expander](/api/expander/) API for examples."
          ],
          "notes": {
            "public": [
              [
                "Hardware support missing"
              ],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Software support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "no",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "Raspberry Pi Zero",
          "image": "raspberry-pi-zero.png",
          "enabled": true,
          "information": [
            "`analogRead` components can be supported via `Expander` instances. See [Expander](/api/expander/) API for examples."
          ],
          "notes": {
            "public": [
              [
                "Hardware support missing"
              ],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Software support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "no",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "Raspberry Pi Model A Plus",
          "image": "raspberry-pi-model-a-plus.png",
          "enabled": true,
          "information": [
            "`analogRead` components can be supported via `Expander` instances. See [Expander](/api/expander/) API for examples."
          ],
          "notes": {
            "public": [
              [
                "Hardware support missing"
              ],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Software support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "no",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "Raspberry Pi Model B Plus",
          "image": "raspberry-pi-model-b-plus.png",
          "enabled": true,
          "information": [
            "`analogRead` components can be supported via `Expander` instances. See [Expander](/api/expander/) API for examples."
          ],
          "notes": {
            "public": [
              [
                "Hardware support missing"
              ],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Software support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "no",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "Raspberry Pi Model B Rev 1",
          "image": "raspberry-pi-model-b-rev-1.png",
          "enabled": true,
          "information": [
            "`analogRead` components can be supported via `Expander` instances. See [Expander](/api/expander/) API for examples."
          ],
          "notes": {
            "public": [
              [
                "Hardware support missing"
              ],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Software support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "no",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "no"
          }
        },
        {
          "name": "Raspberry Pi Model B Rev 2",
          "image": "raspberry-pi-model-b-rev-2.png",
          "enabled": true,
          "information": [
            "`analogRead` components can be supported via `Expander` instances. See [Expander](/api/expander/) API for examples."
          ],
          "notes": {
            "public": [
              [
                "Hardware support missing"
              ],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [
                "Hardware support missing"
              ],
              [
                "Software support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "no",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "no",
            "Ping": "no"
          }
        }
      ]
    },
    {
      "name": "Particle (Spark)",
      "url": "https://www.particle.io/",
      "plugin": {
        "name": "Spark-IO",
        "url": "https://github.com/rwaldron/particle-io",
        "instructions": "https://github.com/rwaldron/particle-io#getting-started"
      },
      "environment": {
        "name": "VoodooSpark",
        "url": "https://github.com/voodootikigod/voodoospark",
        "instructions": "https://github.com/voodootikigod/voodoospark#loading-the-firmware",
        "relationship": "host-client-wifi"
      },
      "via": [
        "wifi",
        "tcp server"
      ],
      "variants": [
        {
          "name": "Particle Core (Spark Core)",
          "image": "spark-core-white.png",
          "enabled": true,
          "information": [
            "Timers are shared in groups: Timer 2: `A0`, `A1`, Timer 3: `A4`, `A5`, `A6`, `A7`, Timer 4: `D0`, `D1`"
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [
                "Timer 2: A0, A1",
                "Timer 3: A4, A5, A6, A7",
                "Timer 4: D0, D1"
              ],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Hardware support missing"
              ],
              []
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Particle Photon",
          "image": "photon-black.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [
                "Timer 2: A0, A1",
                "Timer 3: A4, A5",
                "Timer 4: D0, D1"
              ],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Hardware support missing"
              ],
              []
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "yes"
          }
        },
        {
          "name": "Sparkfun Photon RedBoard",
          "image": "photon-redboard.png",
          "enabled": true,
          "information": [],
          "notes": {
            "public": [
              [],
              [],
              [],
              [
                "Timer 2: A0, A1",
                "Timer 3: A4, A5",
                "Timer 4: D0, D1"
              ],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [
                "Hardware support missing"
              ],
              []
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "no",
            "DAC": "no",
            "Ping": "yes"
          }
        }
      ]
    },
    {
      "name": "Tessel",
      "url": "https://tessel.io/",
      "plugin": {
        "name": "Tessel-IO",
        "url": "https://github.com/rwaldron/tessel-io",
        "instructions": "https://github.com/rwaldron/tessel-io"
      },
      "environment": {
        "name": "Tessel 2 Firmware on OpenWRT",
        "url": "https://github.com/tessel/t2-firmware",
        "instructions": "https://github.com/tessel/t2-cli",
        "relationship": "embedded"
      },
      "via": [
        "coprocessor",
        "SPI Bridge"
      ],
      "variants": [
        {
          "name": "Tessel 2",
          "image": "tessel-2.png",
          "enabled": true,
          "information": [
            "Servo support is provided via I2C components (eg. [PCA9685](/api/servo/#servo-pca9685))",
            "DAC is limited to Port B, Pin 7"
          ],
          "notes": {
            "public": [
              [],
              [],
              [],
              [],
              [],
              [],
              [
                "Software support missing"
              ],
              [
                "Software support missing"
              ],
              [],
              [],
              [
                "Hardware support missing"
              ]
            ]
          },
          "capabilities": {
            "Analog Read": "yes",
            "Digital Read": "yes",
            "Digital Write": "yes",
            "PWM": "yes",
            "Servo": "yes",
            "I2C": "yes",
            "One Wire": "no",
            "Stepper": "no",
            "Serial/UART": "yes",
            "DAC": "yes",
            "Ping": "no"
          }
        }
      ]
    }
  ],
  "glossary": {
    "embedded": "The JavaScript program is executed directly on board, in a Linux environment running [Node.js](http://nodejs.org).",
    "host-client": "The JavaScript program is executed on a **host** machine that runs [Node.js](http://nodejs.org). The program transmits basic IO instructions to the board via **usb serial**, which acts as a **thin client**. Requires tethering.",
    "host-client-wifi": "The JavaScript program is executed on a **host** machine that runs [Node.js](http://nodejs.org). The program transmits basic IO instructions over **WiFi** to the board, which acts as a **thin client**.",
    "host-client-bluetooth": "The JavaScript program is executed on a **host** machine that runs [Node.js](http://nodejs.org). The program transmits basic IO instructions over **Bluetooth** to the board, which acts as a **thin client**."
  }
};
