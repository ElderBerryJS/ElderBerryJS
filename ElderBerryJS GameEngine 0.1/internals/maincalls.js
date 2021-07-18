import * as usercode from '../yourcode.js';
import * as conform_unit from './conform.js';
import * as objects_unit from './objectsystem.js';
import * as input_unit from './input.js';
import * as draw_unit from './graphics.js';

export var screenwidth;
export var screenheight;

//DO AT THE BEGINNING

usercode.Start();

//EVERY ANIMATION FRAME

function disp_forever(){

    conform_unit.display_context.clearRect(0, 0, conform_unit.display_canvas.width, conform_unit.display_canvas.height);
    conform_unit.display_context.fillStyle = conform_unit.disp_bg;
    conform_unit.display_context.fillRect(0, 0, conform_unit.disp_width, conform_unit.disp_height);
    usercode.Update();
    usercode.E_camera.update();
    if(document.title != conform_unit.app_title){

        document.title = conform_unit.app_title;

    }
    if(typeof objects_unit.E_Object.drawcontent === "function"){

        objects_unit.E_Object.drawcontent();

    }
    usercode.AfterObjectsUpdate();
    input_unit.stimos(input_unit.imosx + draw_unit.camerax+1, input_unit.imosy + draw_unit.cameray+1);
    //draw_unit.drawTile(0, 8, 8, 8, input_unit.Input_ImouseX, input_unit.Input_ImouseY, false, false);

    requestAnimationFrame(disp_forever);

}

requestAnimationFrame(disp_forever);