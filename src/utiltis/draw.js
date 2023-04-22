function draw(period, ref, color) {
  let c = ref.current;
  let ctx = c.getContext("2d");

  // draw all the circle
  if (period === 0) {
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, 160, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.lineWidth = 9;
    // ctx.fillStyle = "transparent"
    // ctx.fill()
    console.log(color);
    ctx.strokeStyle = color;
    ctx.stroke();
  } else {
    let s = -Math.PI / 2;

    const Interval = setInterval(() => {
      // if (s <= -2.5 * Math.PI) {
      //   clearInterval(Interval);
      // }

      // console.log(s);

      ctx.beginPath();
      ctx.arc(
        c.width / 2,
        c.height / 2,
        160,
        s,
        s - (2 * Math.PI) / (period * 60),
        true
      );
      ctx.closePath();
      s -= (2 * Math.PI) / (period * 60);
      ctx.lineWidth = 12;
      ctx.strokeStyle = "#10132c";
      ctx.fillStyle = "#10132c";
      ctx.stroke();
      ctx.fill();
    }, 1000);
    return Interval;
  }
}

export default draw;
