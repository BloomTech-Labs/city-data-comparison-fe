export const getCityColor = (selected) => {
    let activeColors = selected.map((item) => item.color);
    if (!activeColors.includes("#A33A00")) {
      return "#A33A00";
    } else if (!activeColors.includes("#0041A3")) {
      return "#0041A3";
    } else if (!activeColors.includes("#017428")) {
      return "#017428";
    }
  };


 export const getSecondCityColor = (arr) => {
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