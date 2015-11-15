var React = require('react');
var RD = require('react-dom');
var ThumbList = require('./thumb-list');

var opts = {
    thumbData: [
    {
        imgUrl: "https://missiongalacticfreedom.files.wordpress.com/2015/08/artificial-intel.jpg",
        wasai: "sdkfajs;dlfkja;dslfkja;sldkfja;sdl",
        thumbTitle: 'this is title.',
        description: 'description-description-description-description-description-description.',
        title: "wocoa",
        count: 39
    },{
        imgUrl: "http://www.kurzweilai.net/images/silver-robot-with-cosmos.jpg",
        wasai: "sdkfajs;dlfkja;dslfkja;sldkfja;sdl",
        thumbTitle: 'this is title.',
        description: 'description-description-description-description-description-description.',
        title: "wocoa",
        count: 39
    }
    ]
};

var thumbElem = React.createElement(ThumbList, opts);
// must render element
RD.render(thumbElem, document.querySelector('.container'));