const ColoredLog = (msg, color) => {
  return console.log(`%c${msg}`, `color:${color};font-weight:bold;`);
};

export default ColoredLog;
