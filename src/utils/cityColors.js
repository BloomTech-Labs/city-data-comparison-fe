//city comparison colors variables... the number next to the color in the variable is the B value in the HSB (hue, saturation, brightness)
export const darkBlue31 = "#293250d0";
export const newYellow100 = "#ffd55ad0";
export const green83 = "#6dd47ed0";

//color variables for the rest of the site:
//action color is the old main color for site
//the updated darker blue for the site
export const actionColor = "#0066CC";
//color for the words on the nav/footer
export const navGrey = "#696969";

export const getCityColor = (selected) => {
  if (selected === undefined) {
    return green83;
  }
  let activeColors = selected.map((item) => item.color);
  if (!activeColors.includes(green83)) {
    return green83;
  } else if (!activeColors.includes(newYellow100)) {
    return newYellow100;
  } else if (!activeColors.includes(darkBlue31)) {
    return darkBlue31;
  }
};
export const getSecondCityColor = (arr, selected) => {
  let activeColors = selected.map((item) => item.color);
  activeColors.push(arr[0].color);
  if (!activeColors.includes(green83)) {
    return green83;
  } else if (!activeColors.includes(newYellow100)) {
    return newYellow100;
  } else if (!activeColors.includes(darkBlue31)) {
    return darkBlue31;
  }
};
export const lightenOrDarken = (color, percent) => {
  var num = parseInt(color.replace("#", ""), 16);
  let amt = Math.round(2.55 * percent);
  let R = (num >> 16) + amt;
  let B = ((num >> 8) & 0x00ff) + amt;
  let G = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
};
