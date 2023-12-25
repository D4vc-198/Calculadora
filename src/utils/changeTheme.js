export const ChangeDarkMode = (app, isDark) => {
  console.log("app", app)
  console.log("isDark", isDark)
  //Pantalla y contenedor calculadora 
  app.style.setProperty("--Bg-calculator-container", `${isDark ? "#17181A" : "#FFF"}`)
  app.style.setProperty("--Bg-calculator-screen-container", `${isDark ? "#17181A" : "#FFF"}`)

  //Buttons numbers
  app.style.setProperty("--Bg-btn-number", `${isDark ? "#222427" : "#E9F0F4"}`)
  app.style.setProperty("--Txt-Color-btn-number", `${isDark ? "#FFF": "#000"}`)

  //Buttons operations basic
  app.style.setProperty("--Txt-Color-btn-operation-basic", `${isDark ? "#FFF" : "#000"}`)

  //Buttons operation advanced
  app.style.setProperty("--Bg-btn-operation-advanced", `${isDark ? "#222427" : "#E9F0F4"}`)
  app.style.setProperty("--Txt-Color-btn-operation-advanced", `${isDark ? "#FFF" : "#FFF"}`)

    //Buttons operation del
    app.style.setProperty("--Bg-btn-action-del", `${isDark ? "#2D191E" : "#F8ECED"}`)

  
};
