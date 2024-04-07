export function Pointer(options) {
  let hasWrapperEl = options && options.element;
  let element = hasWrapperEl || document.body;

  let width = window.innerWidth;
  let height = window.innerHeight;
  let cursor = { x: width / 2, y: width / 2 };
  let dot = new Dot(width / 2, height / 2, 25, 10); // Set the dot size to 10
  let canvas, context, animationFrame;

  function init() {
    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.style.top = "0px";
    canvas.style.left = "0px";
    canvas.style.pointerEvents = "none";

    if (hasWrapperEl) {
      canvas.style.position = "absolute";
      element.appendChild(canvas);
      canvas.width = element.clientWidth;
      canvas.height = element.clientHeight;
    } else {
      canvas.style.position = "fixed";
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
    }

    bindEvents();
    loop();
  }

  function bindEvents() {
    element.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onWindowResize);
  }

  function onWindowResize(e) {
    width = window.innerWidth;
    height = window.innerHeight;

    if (hasWrapperEl) {
      canvas.width = element.clientWidth;
      canvas.height = element.clientHeight;
    } else {
      canvas.width = width;
      canvas.height = height;
    }
  }

  function onMouseMove(e) {
    if (hasWrapperEl) {
      const boundingRect = element.getBoundingClientRect();
      cursor.x = e.clientX - boundingRect.left;
      cursor.y = e.clientY - boundingRect.top;
    } else {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    }
  }

  function updateDot() {
    context.clearRect(0, 0, width, height);
    dot.moveTowards(cursor.x, cursor.y, context);
  }

  function loop() {
    updateDot();
    animationFrame = requestAnimationFrame(loop);
  }

  function destroy() {
    canvas.remove();
    cancelAnimationFrame(animationFrame);
    element.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onWindowResize);
  }

  function Dot(x, y, size, lag) {
    this.position = { x: x, y: y };
    this.size = size;
    this.lag = lag;

    this.moveTowards = function (x, y, context) {
      this.position.x += (x - this.position.x) / this.lag;
      this.position.y += (y - this.position.y) / this.lag;

      context.strokeStyle = "gray"; // Set border color to gray
      context.lineWidth = 2; // Set border width
      context.fillStyle = "rgba(0, 0, 0, 0)"; // Transparent fill color

      context.beginPath();
      context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
      context.stroke(); // Draw border
      context.fill(); // Fill center
      context.closePath();
    };
  }

  init();

  return {
    destroy: destroy,
  };
}

export default Pointer;
