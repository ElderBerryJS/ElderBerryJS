import * as usercode from '../yourcode.js';
import * as conforMmouse_unit from './conform.js';
import * as draw_unit from './graphics.js';
import * as misc_unit from './misc.js';

/*--------------------------------------------------------------------- MOUSE INPUTS ---------------------------------------------------------------------------------*/

//MOUSE CLICK

export var Lmouse_Press = false;
export var Mmouse_Press = false;
export var Rmouse_Press = false;
/* 
var Lmouse_Down = false;
var Mmouse_Down = false;
var Rmouse_Down = false;

var Lmouse_Up = false;
var Mmouse_Up = false;
var Rmouse_Up = false;*/

document.body.onmousedown = function(event) { 
    
    switch(event.which){
        
        case 1:
            Lmouse_Press = true;
            if(typeof usercode.Mouse === "function"){
                usercode.Mouse("Down", "Left");
            }
            break;
        case 2:
            Mmouse_Press = true;
            if(typeof usercode.Mouse === "function"){
                usercode.Mouse("Down", "Middle");
            }
            break;
        case 3:
            Rmouse_Press = true;
            if(typeof usercode.Mouse === "function"){
                usercode.Mouse("Down", "Right");
            }
            break;

    }
}

document.body.onmouseup = function(event) {
    switch(event.which){

        case 1:
            Lmouse_Press = false;
            if(typeof usercode.Mouse === "function"){
                usercode.Mouse("Up", "Left");
            }
            break;
        case 2:
            Mmouse_Press = false;
            if(typeof usercode.Mouse === "function"){
                usercode.Mouse("Up", "Middle");
            }
            break;
        case 3:
            Rmouse_Press = false;
            if(typeof usercode.Mouse === "function"){
                usercode.Mouse("Up", "Right");
            }
            break;

    }
}

//MOUSE WHEEL

export var Mmouse_Dir;

var mousewheelstoptimeout;

window.addEventListener('wheel', function(event)
{

    clearTimeout(mousewheelstoptimeout);

    if (event.deltaY < 0)
    {

        Mmouse_Dir = "Up";

    }
    else if (event.deltaY > 0)
    {

        Mmouse_Dir = "Down";

    }

    mousewheelstoptimeout = setTimeout(function(){ Mmouse_Dir = "Stop"; }, 40);

});

//MOUSE POSITION

export var Input_ImouseX = 0;
export var Input_ImouseY = 0;

export var imosx = 0;
export var imosy = 0;

export function stimos(x, y){

    Input_ImouseX = x;
    Input_ImouseY = y;

}

conforMmouse_unit.display_canvas.addEventListener("mousemove", function(event){

    var cRect = conforMmouse_unit.display_canvas.getBoundingClientRect();
    imosx = (Math.round((event.clientX - conforMmouse_unit.disp_Iscale/2 - cRect.left) / conforMmouse_unit.disp_Iscale))/* + draw_unit.camerax+1*/;
    imosy = (Math.round((event.clientY - conforMmouse_unit.disp_Iscale/2 - cRect.top) / conforMmouse_unit.disp_Iscale))/* + draw_unit.cameray+1*/;

});

/*--------------------------------------------------------------------- KEYBOARD INPUTS ---------------------------------------------------------------------------------*/

export function KeyCode(key) {
    let KeyCodeList = {

        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrlleft: 17,
        ctrlrigght: 17,
        altleft: 18,
        altright: 18,
        pause: 19,
        capslock: 20,
        escape: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        arrowleft: 37,
        arrowup: 38,
        arrowright: 39,
        arrowdown: 40,
        insert: 45,
        delete: 46,
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57,
        a: 65,
        b: 66,
        c: 67,
        d: 68,
        e: 69,
        f: 70,
        g: 71,
        h: 72,
        i: 73,
        j: 74,
        k: 75,
        l: 76,
        m: 77,
        n: 78,
        o: 79,
        p: 80,
        q: 81,
        r: 82,
        s: 83,
        t: 84,
        u: 85,
        v: 86,
        w: 87,
        x: 88,
        y: 89,
        z: 90,
        metaleft: 91,
        metaright: 92,
        select: 93,
        numpad0: 96,
        numpad1: 97,
        numpad2: 98,
        numpad3: 99,
        numpad4: 100,
        numpad5: 101,
        numpad6: 102,
        numpad7: 103,
        numpad8: 104,
        numpad9: 105,
        numpadmultiply: 106,
        numpadadd: 107,
        numpadsubtract: 109,
        numpaddecimal: 110,
        numpaddivide: 111,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123,
        numlock: 144,
        scrolllock: 145,
        semicolon: 186,
        equalsign: 187,
        comma: 188,
        minus: 189,
        period: 190,
        slash: 191,
        backquote: 192,
        bracketleft: 219,
        backslash: 220,
        braketright: 221,
        quote: 222
    
    };
    return KeyCodeList[key];
}
/*
export var keystate = [];
var lengthkeystate = 0;
for (var elemento in KeyCodeListOutside){

    var theonetooverride = 'key_' + KeyCodeListOutside[elemento];
    keystate[theonetooverride] = false;
    lengthkeystate ++;

}
*/

export var up_pressed = false;
export var down_pressed = false;
export var left_pressed = false;
export var right_pressed = false;

export var z_pressed = false;
export var x_pressed = false;
export var c_pressed = false;
export var a_pressed = false;
export var s_pressed = false;
export var d_pressed = false;
export var q_pressed = false;
export var w_pressed = false;
export var e_pressed = false;

export var space_pressed = false;
export var shift_pressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var repeat_allowed = true;

function keyDownHandler(event) {
    
    var onetocall;
    
    if(event.keyCode == KeyCode("arrowleft")){

        left_pressed = true;
        onetocall = "left";

    }

    else if(event.keyCode == KeyCode("arrowright")){

        right_pressed = true;
        onetocall = "right";

    }

    else if(event.keyCode == KeyCode("arrowdown")){

        down_pressed = true;
        onetocall = "down";

    }

    else if(event.keyCode == KeyCode("arrowup")){

        up_pressed = true;
        onetocall = "up";

    }

    else if(event.keyCode == KeyCode("z")){

        z_pressed = true;
        onetocall = "z";

    }

    else if(event.keyCode == KeyCode("x")){

        x_pressed = true;
        onetocall = "x";

    }

    else if(event.keyCode == KeyCode("c")){

        c_pressed = true;
        onetocall = "c";

    }

    else if(event.keyCode == KeyCode("a")){

        a_pressed = true;
        onetocall = "a";

    }

    else if(event.keyCode == KeyCode("s")){

        s_pressed = true;
        onetocall = "s";

    }

    else if(event.keyCode == KeyCode("d")){

        d_pressed = true;
        onetocall = "d";

    }

    else if(event.keyCode == KeyCode("q")){

        q_pressed = true;
        onetocall = "q";

    }

    else if(event.keyCode == KeyCode("w")){

        w_pressed = true;
        onetocall = "w";

    }

    else if(event.keyCode == KeyCode("e")){

        e_pressed = true;
        onetocall = "e";

    }

    else if(event.keyCode == KeyCode("space")){

        space_pressed = true;
        onetocall = "space";

    }

    else if(event.keyCode == KeyCode("shift")){

        shift_pressed = true;
        onetocall = "shift";

    }



    if(typeof usercode.Keyboard === "function"){

        usercode.Keyboard("Down", onetocall);

    }

}

function keyUpHandler(event) {
    
    var onetocall;
    
    if(event.keyCode == KeyCode("arrowleft")){

        left_pressed = false;
        onetocall = "left";

    }

    else if(event.keyCode == KeyCode("arrowright")){

        right_pressed = false;
        onetocall = "right";

    }

    else if(event.keyCode == KeyCode("arrowdown")){

        down_pressed = false;
        onetocall = "down";

    }

    else if(event.keyCode == KeyCode("arrowup")){

        up_pressed = false;
        onetocall = "Up";

    }

    else if(event.keyCode == KeyCode("z")){

        z_pressed = false;
        onetocall = "z";

    }

    else if(event.keyCode == KeyCode("x")){

        x_pressed = false;
        onetocall = "x";

    }

    else if(event.keyCode == KeyCode("c")){

        c_pressed = false;
        onetocall = "c";

    }

    else if(event.keyCode == KeyCode("a")){

        a_pressed = false;
        onetocall = "a";

    }

    else if(event.keyCode == KeyCode("s")){

        s_pressed = false;
        onetocall = "s";

    }

    else if(event.keyCode == KeyCode("d")){

        d_pressed = false;
        onetocall = "d";

    }

    else if(event.keyCode == KeyCode("q")){

        q_pressed = false;
        onetocall = "q";

    }

    else if(event.keyCode == KeyCode("w")){

        w_pressed = false;
        onetocall = "w";

    }

    else if(event.keyCode == KeyCode("e")){

        e_pressed = false;
        onetocall = "e";

    }

    else if(event.keyCode == KeyCode("space")){

        space_pressed = false;
        onetocall = "space";

    }

    else if(event.keyCode == KeyCode("shift")){

        shift_pressed = false;
        onetocall = "shift";

    }

    if(typeof usercode.Keyboard === "function"){

        usercode.Keyboard("Up", onetocall);

    }

}