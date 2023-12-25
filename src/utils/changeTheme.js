export const ChangeDarkMode = (app) => {
  //Pantalla y contenedor calculadora 
  app.style.setProperty("--Bg-calculator-container", "#17181A")
  app.style.setProperty("--Bg-calculator-screen-container", "#17181A")

  //Buttons numbers
  app.style.setProperty("--Bg-btn-number", "#222427")
  app.style.setProperty("--Txt-Color-btn-number", "#FFF")

  // app.style.setProperty("--Bg-calculator-container", "#000")
  // app.style.setProperty("--Bg-calculator-screen-container", "#000")

  // app.style.setProperty("--Bg-calculator-container", "#000")
  // app.style.setProperty("--Bg-calculator-screen-container", "#000")

  // app.style.setProperty("--Bg-calculator-container", "#000")
  // app.style.setProperty("--Bg-calculator-screen-container", "#000")

  // app.style.setProperty("--Bg-calculator-container", "#000")
  // app.style.setProperty("--Bg-calculator-screen-container", "#000")

  
};

export const ChangeLightMode = (app) => {
  app.style.setProperty("--Bg-calculator-container", "#FFF")
  app.style.setProperty("--Bg-calculator-screen-container", "#FFF")

};
