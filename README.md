# Introduction

blah blah.. wip

*Wind director and duct attachment fan mount*
![Wind director preview](https://i.ibb.co/LP5p31H/3dprint.png "Wind director preview")

# Repository structure
```
├───3d-files
├───arduino
│   └───fan-control
└───client
    ├───lib
    ├───preload
    └───ui
```

* ```3d-files``` is where the raw, Fusion 360 files are kept. You'll need these if you want to 3d print the wind director and duct attachment mount.
* ```arduino``` is where the code for your Arduino UNO REV3 live. See section ```Arduino upload``` below.
* ```client``` is where the desktop app code lives. If you are not a developer you can ignore this folder. *Binaries can be downloaded from the releases tab in GitHub*.
  
# Shopping list
* 12V 3A power supply - [AC to DC 12V 3A Power Supply Adapter](https://www.amazon.co.uk/gp/product/B07S7PH77C/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&psc=1)
* 5.5mm x 2.1mm output adapter - [2PCS 12V 5.5mm x 2.1mm DC Power Connector Adapter](https://www.amazon.co.uk/Connector-Adapter-JEEUE-Female-Security-DC-Blue-2PCS/dp/B08LXKXZX8/ref=sr_1_5?keywords=5.5mm+x+2.1mm+socket&qid=1641374584&s=electronics&sprefix=5.5mm+x+2.1mm%2Celectronics%2C60&sr=1-5)
* **PWM** 120x120mm cooling fan - [MiliPow 12V/12.7A, 6000RPM Cooling Fan](https://www.amazon.co.uk/gp/product/B08X2W9JH3/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)
* Arduino UNO REV3 - [Arduino UNO REV3](https://www.amazon.co.uk/Arduino-A000066-ARDUINO-UNO-REV3/dp/B008GRTSV6/ref=sr_1_6?crid=3D1XCUSR42DUD&keywords=arduino&qid=1641375372&s=computers&sprefix=arduino+%2Ccomputers%2C60&sr=1-6)

Estimated total cost: £45

# Required non-development tools
## 3d printing
* [Autodesk Fusion 360](https://www.autodesk.co.uk/products/fusion-360/overview).
* Online print service. I would personally recommend [Make it Quick](makeitquick.co.uk).

## Arduino upload
* [Arduino IDE](https://www.arduino.cc/en/software). *do not use the online version*

# Instructions

## 3d print instructions
*These steps assume you do not own a 3D printer*
1. Open the 3d file found in ``` 3d-files ``` in Audodesk Fusion 360
2. In Fusion 360, go to ``` File -> Export ``` and export as a ```.sto``` file
3. Upload the ```.sto``` file into an [online print service](makeitquick.co.uk)

## Arduino instructions
1. [Arduino IDE](https://www.arduino.cc/en/software). *do not use the online version*
2. Copy the code from ``` arduino -> fan-control ``` into a new Arduino sketch
3. Attach your Arduino
4. Upload
5. Profit!

# Client development
## Tools
* Node & NPM
* Windows C++ developer and build tools. [Helpful tool](https://www.npmjs.com/package/windows-build-tools)