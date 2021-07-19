// IN THIS CODE, WE'LL CREATE A DISPLAY CANVAS, IT'S SCREEN RES (600x600 DEFAULT), AND IT'S INTERNAL RESOLUTION (80x80 DEFAULT) FOR THE GAME.
// YOU WILL NEED TO CALL THE "conform("display_canvas");" for generating the display canvas.

console.log("%c✨ WELCOME TO THE %cElder%cBerry%c JS %cEngine 0.1.1 ✨", "font-size: 50px", "color: #3f4a81; font-size: 50px", "color:#c64e69; font-size: 50px", "color: #ffc800; font-size: 50px;", "font-size: 50px;");

var root = document.documentElement;

export var display_canvas;
export var display_context;

export var disp_width = 1024;
export var disp_height = 768;

export var disp_type;

export var disp_Iscale = 4;

export var disp_Iwidth;
export var disp_Iheight;

export var disp_bg = "#000000";

export var app_title = "ElderberryJS App";

export function conform(element, prop1, prop2){

    if(element == "disp_res"){
        
        if(prop1 != null && prop2 != null){

            disp_width = prop1;
            disp_height = prop2;
            disp_Iwidth = disp_width / disp_Iscale;
            disp_Iheight = disp_height / disp_Iscale;
            root.style.setProperty('--aspect_ratio', (disp_height/disp_width)*100 + "%");
            root.style.setProperty('--aspect_ratio2', (disp_width/disp_height)*100 + "%");

        }

        else{

            console.warn("You need THREE arguments to set the DISPLAY RESOLUTION!!!");

        }

    }

    else if(element == "disp_Iscale"){
        
        if(prop1 != null && prop2 == null){

            disp_Iscale = prop1;
            disp_Iwidth = disp_width / disp_Iscale;
            disp_Iheight = disp_height / disp_Iscale;

        }

        else{

            console.warn("You need TWO arguments to set the INTERNAL SCALE!!!");

        }

    }

    else if(element == "disp_canvas"){
        
        if((prop1 != null && prop2 == null)){

            display_canvas = document.createElement('canvas');
            document.body.appendChild(display_canvas); // adds the canvas to the body element
            display_context = display_canvas.getContext("2d");
            
            if(prop1 == 1){

                display_canvas.id = "cnvtype1";
                disp_type = 1;

            }

            else if(prop1 == 2){

                display_canvas.id = "cnvtype2";
                disp_type = 1;

            }
            
            display_context.canvas.width = disp_width;
            display_context.canvas.height = disp_height;
            disp_Iwidth = disp_width / disp_Iscale;
            disp_Iheight = disp_height / disp_Iscale;
            display_context.imageSmoothingEnabled = false;
        }

        else{

            console.warn("You need only TWO arguments to prepare the DISPLAY CANVAS!!!");

        }

    }

    else if(element == "disp_bg"){
        
        if((prop1 != null && prop2 == null)){

            disp_bg = prop1;

        }

        else{

            console.warn("You need only TWO arguments to prepare the DISPLAY BACKGROUND!!!");

        }

    }

    else if(element == "app_title"){
        
        if((prop1 != null && prop2 == null)){

            app_title = prop1;

        }

        else{

            console.warn("You need only TWO arguments to prepare the APP TITLE!!!");

        }

    }

    else if(element == null){

        console.warn("'conform();' needs arguments inside the (). Try these ones: disp_res, disp_Iscale, disp_canvas");

    }
    
    else{

        console.warn("This conform doesn't exist!! Conforms: disp_res, disp_Iscale, disp_canvas, disp_bg, app_title");

    }

}