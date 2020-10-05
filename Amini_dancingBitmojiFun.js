 
var drawBitmoji = function (bitmojiX,bitmojiY,bitHeight) {
var drawShirt = function() {
//body
fill(30, 0, 255);
rect(bitmojiX+bitHeight/100*82,bitmojiY+bitHeight/100*261,bitHeight/100*96,bitHeight/100*200,bitHeight/100*175);
rect(bitmojiX+bitHeight/100*201,bitmojiY+bitHeight/100*261,bitHeight/100*96,bitHeight/100*200,bitHeight/100*175);
rect(bitmojiX+bitHeight/100*105,bitmojiY+bitHeight/100*237,bitHeight/100*166,bitHeight/100*245,bitHeight/100*100);
//shirt design
fill(255, 0, 0);
arc(bitmojiX+bitHeight/100*190,bitmojiY+bitHeight/100*361,bitHeight/100*150,bitHeight/100*155,180,360);
fill(179, 165, 16);
rect(bitmojiX+bitHeight/100*157,bitmojiY+bitHeight/100*284,bitHeight/100*66,bitHeight/100*12,bitHeight/100*33);
fill(41, 148, 19);
rect(bitmojiX+bitHeight/100*133,bitmojiY+bitHeight/100*305,bitHeight/100*114,bitHeight/100*12,bitHeight/100*100);
fill(179, 165, 16);
rect(bitmojiX+bitHeight/100*121,bitmojiY+bitHeight/100*324,bitHeight/100*138,bitHeight/100*12,bitHeight/100*33);
fill(41, 148, 19);
rect(bitmojiX+bitHeight/100*115,bitmojiY+bitHeight/100*345,bitHeight/100*151,bitHeight/100*12,bitHeight/100*100);
fill(191, 17, 17);
stroke(23, 22, 22);
textSize(bitHeight/100*12);
text("3.6 ROENTGEN",bitmojiX+bitHeight/100*144,bitmojiY+bitHeight/100*364,bitHeight/100*300,bitHeight/100*400);
text("NOT GREAT NOT TERRIBLE",bitmojiX+bitHeight/100*108,bitmojiY+bitHeight/100*380,bitHeight/100*300,bitHeight/100*400);
fill(15, 14, 14);
rect(bitmojiX+bitHeight/100*144,bitmojiY+bitHeight/100*333,bitHeight/100*97,bitHeight/100*15);
rect(bitmojiX+bitHeight/100*156,bitmojiY+bitHeight/100*311,bitHeight/100*22,bitHeight/100*22);
rect(bitmojiX+bitHeight/100*160,bitmojiY+bitHeight/100*294,bitHeight/100*15,bitHeight/100*22);
rect(bitmojiX+bitHeight/100*206,bitmojiY+bitHeight/100*311,bitHeight/100*27,bitHeight/100*22);
rect(bitmojiX+bitHeight/100*211,bitmojiY+bitHeight/100*297,bitHeight/100*12,bitHeight/100*15);
}; 
drawShirt();

var drawHead = function () 
{
fill(3, 3, 3);
rect(bitmojiX+bitHeight/100*128,bitmojiY+bitHeight/100*131,bitHeight/100*45,bitHeight/100*69,130);
rect(bitmojiX+bitHeight/100*207,bitmojiY+bitHeight/100*131,bitHeight/100*45,bitHeight/100*69,130);
//neck
fill(250, 229, 187);
rect(bitmojiX+bitHeight/100*164,bitmojiY+bitHeight/100*211,bitHeight/100*50,bitHeight/100*54,50);
//face
fill(250, 229, 187);
ellipse(bitmojiX+bitHeight/100*191,bitmojiY+bitHeight/100*172,bitHeight/100*108,bitHeight/100*136);
}; 
drawHead ();

var drawHat = function ()
{
//hat
fill(5, 5, 5);
arc(bitmojiX+bitHeight/100*191,bitmojiY+bitHeight/100*138,bitHeight/100*96,bitHeight/100*67,180,360);
fill(222, 204, 4);
rect(bitmojiX+bitHeight/100*177,bitmojiY+bitHeight/100*118,bitHeight/100*28,bitHeight/100*15);
fill(15, 15, 15);
text("FTP",bitmojiX+bitHeight/100*179,bitmojiY+bitHeight/100*121,bitHeight/100*17,bitHeight/100*20);
};
drawHat();

//glass and eyes
var drawFace = function ()
{
fill(250, 237, 210);
stroke(10, 10, 10);
rect(bitmojiX+bitHeight/100*156,bitmojiY+bitHeight/100*159,bitHeight/100*27,bitHeight/100*17);
rect(bitmojiX+bitHeight/100*197,bitmojiY+bitHeight/100*159,bitHeight/100*27,bitHeight/100*17);
line(bitmojiX+bitHeight/100*139,bitmojiY+bitHeight/100*155,bitmojiX+bitHeight/100*156,bitmojiY+bitHeight/100*159);
line(bitmojiX+bitHeight/100*156,bitmojiY+bitHeight/100*159,bitmojiX+bitHeight/100*197,bitmojiY+bitHeight/100*159);
line(bitmojiX+bitHeight/100*224,bitmojiY+bitHeight/100*159,bitmojiX+bitHeight/100*242,bitmojiY+bitHeight/100*154);
fill(80, 99, 38);
ellipse(bitmojiX+bitHeight/100*170,bitmojiY+bitHeight/100*168,bitHeight/100*15,bitHeight/100*15);
ellipse(bitmojiX+bitHeight/100*211,bitmojiY+bitHeight/100*168,bitHeight/100*15,bitHeight/100*15);
fill(13, 13, 13);
ellipse(bitmojiX+bitHeight/100*211,bitmojiY+bitHeight/100*167,bitHeight/100*5,bitHeight/100*5);
ellipse(bitmojiX+bitHeight/100*170,bitmojiY+bitHeight/100*167,bitHeight/100*5,bitHeight/100*5);
};
drawFace();

//facial specifics
var drawFeatures = function ()
{
fill(250, 237, 210);
arc(bitmojiX+bitHeight/100*188,bitmojiY+bitHeight/100*200,bitHeight/100*21,bitHeight/100*50,198,247);
fill(250, 237, 210);
arc(bitmojiX+bitHeight/100*187,bitmojiY+bitHeight/100*192,bitHeight/100*34,bitHeight/100*37,-54,3);
fill(250, 237, 210);
arc(bitmojiX+bitHeight/100*191,bitmojiY+bitHeight/100*196,bitHeight/100*28,bitHeight/100*13,174,360);
fill(13, 13, 13);
ellipse(bitmojiX+bitHeight/100*183,bitmojiY+bitHeight/100*193,bitHeight/100*3,bitHeight/100*3);
ellipse(bitmojiX+bitHeight/100*199,bitmojiY+bitHeight/100*193,bitHeight/100*3,bitHeight/100*3);
fill(250, 237, 210);
arc(bitmojiX+bitHeight/100*191,bitmojiY+bitHeight/100*207,bitHeight/100*36,bitHeight/100*11,39,134);
//moles
fill(46, 39, 39);
ellipse(bitmojiX+bitHeight/100*227,bitmojiY+bitHeight/100*193,bitHeight/100*3,bitHeight/100*3);
ellipse(bitmojiX+bitHeight/100*166,bitmojiY+bitHeight/100*223,bitHeight/100*3,bitHeight/100*3);
fill(204, 0, 255);
textSize(bitHeight/100*36);
text("AA",bitmojiX+bitHeight/100*120,bitmojiY+bitHeight/100*258,bitHeight/100*150,bitHeight/100*147);
};
drawFeatures();
};
drawBitmoji(random(-200,200),random(-200,200),69);