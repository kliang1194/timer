const args = process.argv.slice(2).filter(seconds => seconds > 0);

const alarm = function(args) {
  for (let i = 0; i < args.length; i++) {
    args[i] = (parseInt(args[i])) * 1000;
  }
  let time = 0;
  for (const seconds of args) {
    time = seconds;
    setTimeout(() => {
        process.stdout.write('\x07');
    }, time)
  } 
};

alarm(args);