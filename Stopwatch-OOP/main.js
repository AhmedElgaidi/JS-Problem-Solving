'use strict';


/*
    Problem Description:
    --------------------
    You should have a stopwatch object which can be started, stopped and resetted. U can get the duration off of it, with the duration added up on its previous values unless it's resetted. Handle the cases where the stopwatch might be started again/stopped again.
*/


function Stopwatch() {
    // Private members of the Stopwatch object
    let duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function () {
            return (duration / 1000).toFixed(2);
        }
    });

    let startTime = undefined;
    this.running = false;

    this.start = function () {
        if (this.started)
            throw new Error('Stopwatch already started.');

        this.running = true;

        startTime = new Date().getTime();
    };

    this.stop = function () {
        if (this.stopped)
            throw new Error('Stopwatch already stopped.');

        this.running = false;

        duration += (new Date().getTime() - startTime);
    };

    this.reset = function () {
        this.running = false;
        startTime = undefined;
        duration = 0;
    };
}