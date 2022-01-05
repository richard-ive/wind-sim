# Introduction

*Wind director and duct attachment fan mount*
![Wind director preview](https://i.ibb.co/LP5p31H/3dprint.png "Wind director preview")

# Repository layout
```
├───3d-files
├───arduino
│   └───fan-control
└───client
    ├───lib
    ├───preload
    └───ui
```

* 3d-files is where the raw, Fusion 360 files are kept. You'll need these if you want to 3d print the wind director and duct attachment mount.
* Arduino where where the code for your Arduino ProMicro live. See section ```Arduino install``` below.
* Client is where the desktop app code lives. If you are not a developer you can ignore this folder. Binaries can be downloaded from the releases tab in GitHub.
  
# Required non-development tools
## 3d printing
* [Autodesk Fusion 360](https://www.autodesk.co.uk/products/fusion-360/overview).
* Online print service. I would personally recommend [Make it Quick](makeitquick.co.uk).

## Arduino upload
* [Arduino IDE](https://www.arduino.cc/en/software). *do not use the online version*

# Instructions

## 3d print instructions
*these steps assume you do not own a 3D printer*
1. Open the 3d file found in ``` 3d-files ``` in Audodesk Fusion 360
2. Go to ``` File -> Export ``` and export as a ```.sto``` file
3. Upload the ```.sto``` file into an online print service

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

