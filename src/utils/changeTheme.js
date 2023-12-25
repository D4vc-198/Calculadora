export const ChangeDarkMode = (app) => {
  console.log("app", app)
  // app?.style?.setProperty("--Bg-calculator-container", "#000")
};

export const ChangeLightMode = (app) => {
  app?.style?.setProperty("--test-var", "#000");

};
