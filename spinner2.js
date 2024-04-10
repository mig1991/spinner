const spinForMe = function (line) {
  let timer = 100;
  let linePositions = ["|", "/", "-", "\\", "|"];

  for (let i = 0; i < 2; i++) {
    for (let linePosition of linePositions) {
      setTimeout(() => {
        process.stdout.write(`\r${linePosition}    `);
      }, timer);
      timer += 200;
    }
  }
};

spinForMe();
