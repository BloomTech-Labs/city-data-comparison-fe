
//old colors: ##A33A00(orange), #0041A3(blue), #017428(green)
//            21, 100, 64       216, 100, 64    140, 99, 45
//checking dark-light: #330000(dark orange/brown) , #3366cc-blue- websafe, #339966(very light green)
                       //hsb: 0, 100, 20            hsb: 220, 75, 80        hsb: 180, 50, 40
                        //high/low                    high/high                 medium/medium
                       //hue, saturation, brightness 
                       
//                    //#663300 brightness: 40          //#33cc00-brightness 80/#cc6633
//Brightness differentiation:  yellow: 100 (#ffcc33), red: 
//variables below are the color and then the brightness
const yellow100 = "#ffcc33a5";
const orange80 = "#cc6633a5";
const green80 = "#33cc00";
const red60 = "#990000";
const green60 = "#009900a5";
const purple60 = "#990066";

export const actionColor = "#2ca4fc";
export const footerGrey = "#a9a9a9";
export const navGrey = "#696969";


export const getCityColor = (selected) => {
  
    if (selected === undefined) {
      return yellow100;
    }
    let activeColors = selected.map((item) => item.color);
    if (!activeColors.includes(yellow100)) {
      return yellow100;
    } else if (!activeColors.includes(orange80)) {
      return orange80;
    } else if (!activeColors.includes(green60)) {
      return green60;
    }
  };
 export const getSecondCityColor = (arr, selected) => {
    let activeColors = selected.map((item) => item.color);
    activeColors.push(arr[0].color);
    if (!activeColors.includes(yellow100)) {
      return yellow100;
    } else if (!activeColors.includes(orange80)) {
      return orange80;
    } else if (!activeColors.includes(green60)) {
      return green60;
    }
  };
  export const lightenOrDarken = (color, percent) => {
    var num = parseInt(color.replace("#", ""), 16);
    let amt = Math.round(2.55 * percent);
    let R = (num >> 16) + amt;
    let B = (num >> 8 & 0x00FF) + amt;
    let G = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
  }