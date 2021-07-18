import * as draw_unit from './graphics.js';
import * as conform_unit from './conform.js';
import * as input_unit from './input.js';
import * as usercode from '../yourcode.js';

export var colwireframe = false;
var E_Objects = [];

//OBJECT CLASS

export function E_Object(diff, x, y, tileoffx, tileoffy, tileoffwidth, tileoffheight, col_left, col_right, col_top, col_bottom, flipx, flipy, opacity){

    this.diff = diff;

    this.x = x;
    this.y = y;

    this.tileoffx = tileoffx;
    this.tileoffy = tileoffy;
    this.tileoffwidth = tileoffwidth;
    this.tileoffheight = tileoffheight;

    this.coltop = col_top;
    this.colleft = col_left;
    this.colright = col_right;
    this.colbottom = col_bottom;
    this.colleftside = this.colleft + this.x;
    this.coltopside = this.coltop + this.y;
    this.colrightside = (this.tileoffwidth - this.colright) + this.x;
    this.colbottomside = (this.tileoffheight - this.colbottom) + this.y;

    this.flipx = flipx;
    this.flipy = flipy;

    this.opacity = opacity;

    this.drawcontent = function(){

        this.colleftside = this.colleft + this.x;
        this.coltopside = this.coltop + this.y;
        this.colrightside = (this.tileoffwidth - this.colright) + this.x;
        this.colbottomside = (this.tileoffheight - this.colbottom) + this.y;

        draw_unit.drawTile(this.tileoffx, this.tileoffy, this.tileoffwidth, this.tileoffheight, this.x, this.y, this.flipx, this.flipy, this.opacity);

        if(colwireframe){

            draw_unit.drawRect(0, Math.round(this.colleftside), Math.round(this.coltopside), Math.round(this.colrightside - this.x - this.colleft), Math.round(this.colbottomside - this.y - this.coltop), "#ff00b7", "#ff00b7");
            draw_unit.drawRect(0, Math.round(usercode.E_camera.x - conform_unit.disp_Iwidth/2), Math.round(usercode.E_camera.y - conform_unit.disp_Iheight/2), Math.round(this.colrightside + (conform_unit.disp_Iwidth/2 - usercode.E_camera.x)), Math.round(this.colbottomside + (conform_unit.disp_Iheight/2 - usercode.E_camera.y)), "", "#00ffae50");
        }

    }

    E_Objects.push(this);

    E_Object.drawcontent = function(){

        E_Objects.forEach(function(obj){

            obj.drawcontent();

        });

    }

}

export function setcolwireframe(state){

    colwireframe = state;

}

export function destroy(obj_to_destroy){

    delete obj_to_destroy.x;
    delete obj_to_destroy.y;
    delete obj_to_destroy.diff;
    delete obj_to_destroy.tileoffx;
    delete obj_to_destroy.tileoffy;
    delete obj_to_destroy.tileoffwidth;
    delete obj_to_destroy.tileoffheight;
    delete obj_to_destroy.coltop;
    delete obj_to_destroy.colleft;
    delete obj_to_destroy.colright;
    delete obj_to_destroy.colbottom;
    delete obj_to_destroy.colbottomside;
    delete obj_to_destroy.coltopside;
    delete obj_to_destroy.colrightside;
    delete obj_to_destroy.colleftside;
    delete obj_to_destroy.flipx;
    delete obj_to_destroy.flipy;

}

export function colliding(obj1, obj2){

    if(obj1.colleftside < obj2.colrightside && obj1.coltopside < obj2.colbottomside && obj1.colrightside > obj2.colleftside && obj1.colbottomside > obj2.coltopside){

        return true;

    }

    else{

        return false;

    }

}

export function MouseColliding(obj){

    if(input_unit.Input_ImouseX > obj.colleftside && input_unit.Input_ImouseX < obj.colrightside && input_unit.Input_ImouseY > obj.coltopside && input_unit.Input_ImouseY < obj.colbottomside){

        return true;

    }

    else{

        return false;

    }

}