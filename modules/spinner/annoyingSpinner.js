'use strict';
export class AnnoyingSpinner {
  constructor() {
    this.timers = [];
    this.state = false;
  }

  start = (delay = 0) => {
    if (this.state === true) {
      return;
    }

    this.state = true;
    const nodes = document.querySelectorAll('p');

    const t0 = setTimeout(() => {
      nodes.forEach((x) => {
        x.classList.add('spinner');
      });
    }, 0 + delay);

    const t1 = setTimeout(() => {
      nodes.forEach((x) => {
        x.classList.remove('spinner');
        x.classList.add('fasterspinner');
      });
    }, 5000 + delay);

    const t2 = setTimeout(() => {
      nodes.forEach((x) => {
        x.classList.remove('fasterspinner');
        x.classList.add('fastestspinner');
      });
    }, 10000 + delay);

    this.timers.push(t0);
    this.timers.push(t1);
    this.timers.push(t2);
    console.log(this.timers);
  };

  stopSpinner = () => {
    this.state = false;
    const nodes = document.querySelectorAll('p');
    this.timers.forEach((x) => {
      clearTimeout(x);
    });
    nodes.forEach((x) => {
      x.classList.remove('spinner', 'fasterspinner', 'fastestspinner');
    });
    this.timers = [];
  };

  test = () => {
    console.log(this);
    const meep = () => {
      console.log(this);

      const yolo = () => {
        console.log(this);
        yolo();
      };
    };
    meep();
  };

  test2() {
    console.log(this);
    function meep() {
      console.log(this);

      function yolo() {
        console.log(this);
        yolo();
      }
    }
    meep();
  }
}
