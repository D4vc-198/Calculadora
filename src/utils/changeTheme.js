export const ChangeDarkMode = (app, isDark) => {
  document.body.style.backgroundColor = `${isDark ? "#26272A" : "#ECF3FD"}`

  app.style.setProperty("--BoxShadow-color", `${isDark ? "rgba(149, 157, 165, 0)" : "rgba(149, 157, 165, 0.2)"}`)
  //Pantalla y contenedor calculadora 
  app.style.setProperty("--Bg-calculator-container", `${isDark ? "#17181A" : "#FFF"}`)
  app.style.setProperty("--Bg-calculator-screen-container", `${isDark ? "#17181A" : "#FFF"}`)
  app.style.setProperty("--Txt-Color-calculator-screen-result", `${isDark ? "#FFF" : "#000"}`)

  //Buttons numbers
  app.style.setProperty("--Bg-btn-number", `${isDark ? "#222427" : "#E9F0F4"}`)
  app.style.setProperty("--Txt-Color-btn-number", `${isDark ? "#FFF": "#000"}`)
  app.style.setProperty("--Bg-btn-number-hover", `${isDark ? "#333539": "#dde4e7"}`)

  //Buttons operations basic
  app.style.setProperty("--Txt-Color-btn-operation-basic", `${isDark ? "#FFF" : "#000"}`)

  //Buttons operation advanced
  app.style.setProperty("--Bg-btn-operation-advanced", `${isDark ? "#222427" : "#E9F0F4"}`)
  app.style.setProperty("--Txt-Color-btn-operation-advanced", `${isDark ? "#FFF" : "#000"}`)

    //Buttons operation del
    app.style.setProperty("--Bg-btn-action-del", `${isDark ? "#2D191E" : "#F8ECED"}`)
    app.style.setProperty("--Bg-btn-action-del-hover", `${isDark ? "#49272f" : "#f7dde0"}`)

    app.style.setProperty("--Color-Txt-lbl-switch", `${isDark ? "#FFF" : "#000"}`)

  
};
