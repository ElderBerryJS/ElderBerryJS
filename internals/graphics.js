//HERE IS WHERE THE GRAPHIC FUNCTIONS ARE MANAGED

import * as conform_unit from './conform.js';
export var camerax = 0;
export var cameray = 0;

// DRAW PIXELS

export function drawPixel(x, y, color){

    conform_unit.display_context.fillStyle = color;
    conform_unit.display_context.fillRect((x*conform_unit.disp_Iscale)-(camerax*conform_unit.disp_Iscale), (y*conform_unit.disp_Iscale)-(cameray*conform_unit.disp_Iscale), conform_unit.disp_Iscale, conform_unit.disp_Iscale);
    
}

// RECTANGLES/SQUARES

export function drawRect(filled, x, y, width, height, internalcolor, externalcolor){

    if(filled == 1){

        conform_unit.display_context.fillStyle = internalcolor;
        conform_unit.display_context.fillRect(x*conform_unit.disp_Iscale-camerax*conform_unit.disp_Iscale, y*conform_unit.disp_Iscale-cameray*conform_unit.disp_Iscale, conform_unit.disp_Iscale*width, conform_unit.disp_Iscale*height);


        /*for (var yindex = 0; yindex < height; yindex++) {
            
            for (var xindex = 0; xindex < width; xindex++) {
            
                drawPixel(xindex+x, yindex+y, internalcolor);
            
            }
            
        }*/

    }

    else if(filled == 0){

        /*conform_unit.display_context.beginPath();
        conform_unit.display_context.lineWidth = conform_unit.disp_Iscale + "";
        conform_unit.display_context.strokeStyle = externalcolor;
        conform_unit.display_context.rect(x*conform_unit.disp_Iscale-camerax*conform_unit.disp_Iscale, y*conform_unit.disp_Iscale-cameray*conform_unit.disp_Iscale, width*conform_unit.disp_Iscale, height*conform_unit.disp_Iscale);
        conform_unit.display_context.stroke();*/

        for (var yindex = 0; yindex < height; yindex++) {
            
            for (var xindex = 0; xindex < width; xindex++) {
            
                if(xindex == 0 || xindex == width-1 || yindex == 0 || yindex == height-1){

                    drawPixel(xindex+x, yindex+y, externalcolor);

                }
            
            }
            
        }

    }

    else if(filled == 2){

        conform_unit.display_context.fillStyle = internalcolor;
        conform_unit.display_context.fillRect(x*conform_unit.disp_Iscale-camerax*conform_unit.disp_Iscale, y*conform_unit.disp_Iscale-cameray*conform_unit.disp_Iscale, conform_unit.disp_Iscale*width, conform_unit.disp_Iscale*height);

        for (var yindex = 0; yindex < height; yindex++) {
            
            for (var xindex = 0; xindex < width; xindex++) {
            
                if(xindex == 0 || xindex == width-1 || yindex == 0 || yindex == height-1){

                    drawPixel(xindex+x, yindex+y, externalcolor);

                }
            
            }
            
        }

    }

}

// LINES

export function drawLine(x0, y0, x1, y1, color) {
    
    var destx = x1-1;
    var desty = y1-1;
    
    var dx = Math.abs(destx - x0);
    var dy = Math.abs(desty - y0);
    var sx = (x0 < destx) ? 1 : -1;
    var sy = (y0 < desty) ? 1 : -1;
    var err = dx - dy;
 
    while(true) {
        
        drawPixel(x0, y0, color); // Do what you need to for this
        if ((x0 === destx) && (y0 === desty)) break;
        var e2 = 2*err;
        if (e2 > -dy) { err -= dy; x0  += sx; }
        if (e2 < dx) { err += dx; y0  += sy; }
    }

}

// CIRCLES

export function drawCircle(filled, x0, y0, size, internalcolor, externalcolor){

    var radius = (size-1)/2;
    var radiusfilled = (size-1)/2;

    if(filled == 0){
    
        for(var y = -radius; y <= radius; y++){
            for(var x = -radius; x <= radius; x++){
                if(x*x+y*y > radius*radius - radius && x*x+y*y < radius*radius + radius){
                    drawPixel(x0+radius+x, y0+radius+y, externalcolor);
                }
            }
        }

    }
    
    else if(filled == 1){
    
        for(var y = -radius; y <= radius; y++){
            for(var x = -radius; x <= radius; x++){
                if(x*x+y*y <= radius*radius){
                    drawPixel((x0+radius+x), (y0+radius+y), internalcolor);
                }
            }
        }

        for(var y = -radius; y <= radius; y++){
            for(var x = -radius; x <= radius; x++){
                if(x*x+y*y > radius*radius - radius && x*x+y*y < radius*radius + radius){
                    drawPixel(x0+radius+x, y0+radius+y, internalcolor);
                }
            }
        }

    }

    else if(filled == 2){
    
        for(var y = -radius; y <= radius; y++){
            for(var x = -radius; x <= radius; x++){
                if(x*x+y*y <= radius*radius){
                    drawPixel((x0+radius+x), (y0+radius+y), internalcolor);
                }
            }
        }

        for(var y = -radius; y <= radius; y++){
            for(var x = -radius; x <= radius; x++){
                if(x*x+y*y > radius*radius - radius && x*x+y*y < radius*radius + radius){
                    drawPixel(x0+radius+x, y0+radius+y, externalcolor);
                }
            }
        }

    }

}

// IMAGES/TILES

var TFDU = document.createElement("img"); // TILES.FOR.DRAWING.UNIT
TFDU.src = "TFDU.png";

export function drawTile(tileoffx, tileoffy, tileoffwidth, tileoffheight, x, y, flipx, flipy, opacity){

    var tileflx = 0;
    var tilefly = 0;

    var translatex = 0;

    if(flipx){
        tileflx = -1;
        translatex = conform_unit.disp_Iscale;
    }
    else{
        tileflx = 1;
        translatex = 0;
    }
    if(flipy){
        tilefly = -1;
    }
    else{
        tilefly = 1;
    }

    conform_unit.display_context.save();
    conform_unit.display_context.translate((x+(flipx*tileoffwidth)-translatex+(conform_unit.disp_Iscale*flipx))*conform_unit.disp_Iscale-camerax*conform_unit.disp_Iscale, (y+(flipy*tileoffheight))*conform_unit.disp_Iscale-cameray*conform_unit.disp_Iscale);
    conform_unit.display_context.scale(tileflx, tilefly)
    conform_unit.display_context.globalAlpha = opacity;
    conform_unit.display_context.drawImage(TFDU, tileoffx, tileoffy, tileoffwidth, tileoffheight, 0, 0, tileoffwidth*conform_unit.disp_Iscale, tileoffheight*conform_unit.disp_Iscale);
    conform_unit.display_context.restore();

}

// TEXT

export var Font_Arcade;

export function drawText(font, text, color, x, y){

    Font_Arcade = conform_unit.disp_Iscale*16 + "px EBGEJS_Arcade"; //BY XBOST IN BITFONTMAKER2
    conform_unit.display_context.font = font;
    conform_unit.display_context.fillStyle = color;
    conform_unit.display_context.fillText(text, x*conform_unit.disp_Iscale-camerax*conform_unit.disp_Iscale, (y+8)*conform_unit.disp_Iscale-cameray*conform_unit.disp_Iscale);

}

// CAMERA

export function camera(){

    this.x = conform_unit.disp_Iwidth/2;
    this.y = conform_unit.disp_Iheight/2;

    this.update = function(){

        camerax = this.x - conform_unit.disp_Iwidth/2;
        cameray = this.y - conform_unit.disp_Iheight/2;

    }

}