export const getCityColor = (selected) => {
    if (selected === undefined) {
      return "#A33A00";
    }
    let activeColors = selected.map((item) => item.color);
    if (!activeColors.includes("#A33A00")) {
      return "#A33A00";
    } else if (!activeColors.includes("#0041A3")) {
      return "#0041A3";
    } else if (!activeColors.includes("#017428")) {
      return "#017428";
    }
  };
 export const getSecondCityColor = (arr, selected) => {
    let activeColors = selected.map((item) => item.color);
    activeColors.push(arr[0].color);
    if (!activeColors.includes("#A33A00")) {
      return "#A33A00";
    } else if (!activeColors.includes("#0041A3")) {
      return "#0041A3";
    } else if (!activeColors.includes("#017428")) {
      return "#017428";
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