// IF YOU DON'T KNOW HOW TO USE THE ENGINE, GO TO https://elderberryjs.readthedocs.io

//DON'T TOUCH. Only touch if you want to add more modules.

import * as conform_unit from './internals/conform.js';               //DEDICATED TO THE CANVAS AND GENERATION OF THINGS
import * as draw_unit from './internals/graphics.js';                 //DRAWING CIRCLES, LINES, IMAGES/TILES, etc...
import * as input_unit from './internals/input.js';                   //GET KEYBOARD/MOUSE HOLDS, GET THE MOUSE's POSITION, etc...
import * as objects_unit from './internals/objectsystem.js';          //GENERATE OBJECTS, DESTROY THEM, DETECT COLLISIONS, etc...
import * as sound_unit from './internals/sound.js';                   //PLAY MUSIC/SFX

//PREPARING THINGS

conform_unit.conform("disp_res", 1024, 768);                          //CANVAS SIZE
conform_unit.conform("disp_Iscale", 4);                               //ONE PIXEL IS FOUR PIXELS IN THE CANVAS
conform_unit.conform("disp_bg", "#ba1c49");                           //CANVAS BACKGROUND IN HEXADECIMAL
conform_unit.conform("disp_canvas", 1);                               //GENERATING THE CANVAS
conform_unit.conform("app_title", "ElderberryJS App");                //NAME OF THE WINDOW/TAB

objects_unit.setcolwireframe(false);                                  //SEE THE COLLISION BOXES OF THE OBJECTS

//CAMERA (ONLY ONE)

export var E_camera = new draw_unit.camera();                         // CAMERA OBJECT

//CREATE OBJECTS HERE

/*DELETE THESE OBJECTS, THEY ARE NOT NEEDED FOR YOUR OWN PROJECTS*/
var LOGO = new objects_unit.E_Object("", conform_unit.disp_Iwidth/2 - 16, conform_unit.disp_Iheight/2 - 36, 0, 0, 32, 40, 0, 0, 0, 0, false, false, 1);
var MOUSEFOLLOWBALL = new objects_unit.E_Object("", 0, 0, 32, 0, 8, 8, 0, 0, 0, 0, false, false, 1);

//YOUR VARS

var VARIABLE = "THIS IS A TEST VARIABLE!! YOU CAN DELETE IT!!";

//EXECUTED AT THE BEGINNING

export function Start(){

    

}

//EXECUTED EVERY FRAME BEFORE THE OBJECTS HAVE BEEN RENDERED

export function Update(){

    /*DELETE THIS CODE, IT'S NOT NEEDED FOR YOUR OWN PROJECTS*/
    
    MOUSEFOLLOWBALL.x = input_unit.Input_ImouseX - 4;
    MOUSEFOLLOWBALL.y = input_unit.Input_ImouseY - 4;

    draw_unit.drawText(draw_unit.Font_Arcade, "Welcome to ElderBerryJS!!", "#ffffff", conform_unit.disp_Iwidth/2 - 96, conform_unit.disp_Iheight/2 + 24);
    draw_unit.drawRect(2, LOGO.x - 8, LOGO.y - 8, LOGO.tileoffwidth + 16, LOGO.tileoffheight + 16, "#8a1738", "#ffffff");

}

//EXECUTED EVERY FRAME AFTER THE OBJECTS HAVE BEEN RENDERED

export function AfterObjectsUpdate(){

    

}

//mouse button DOWN/UP

export function Mouse(mode, situation){

    if(mode == "Down"){

        if(situation == "Left"){

            //Left mouse button pressed
    
        }
    
        if(situation == "Middle"){
    
            //Middle mouse button pressed
    
        }
    
        if(situation == "Right"){
    
            //Middle mouse button pressed
    
        }

    }

    if(mode == "Up"){

        if(situation == "Left"){

            //Left mouse button lifted
    
        }
    
        if(situation == "Middle"){
    
            //Middle mouse button lifted
    
        }
    
        if(situation == "Right"){
    
            //Middle mouse button lifted
    
        }

    }

}

//key DOWN/UP

export function Keyboard(mode, situation){

    if(mode == "Down"){
        
        //Key is pressed down

    }

    if(mode == "Up"){
        
        //Key is lifted up

        

    }

}