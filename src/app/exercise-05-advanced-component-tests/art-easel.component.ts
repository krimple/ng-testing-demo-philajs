import { Component, Input, AfterViewInit,
        OnChanges, SimpleChange, ElementRef,
        ViewChild, ChangeDetectionStrategy,
        ChangeDetectorRef} from '@angular/core';
@Component({
    selector: 'art-easel',
    styles: [
        "canvas: border 1px solid black;"
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <canvas 
       #drawingCanvas 
       (mousemove)="recordPoint($event)" 
       [width]="width" 
       [height]="height"></canvas>
  `
})
export class ArtEaselComponent implements AfterViewInit, OnChanges {
    @Input() width: number;
    @Input() height: number;
    @ViewChild ('drawingCanvas') canvas: ElementRef;
    private context: CanvasRenderingContext2D;

    constructor(private cd: ChangeDetectorRef ) {}

    ngAfterViewInit() {
        this.context = this.canvas.nativeElement.getContext('2d');
    }

    points: Point[] = [];

    recordPoint(event: MouseEvent) {
        //console.log(`${JSON.stringify(getMousePos(this.canvas, event))}`);
        let coordinates: any = getMousePos(this.canvas, event);
        setTimeout(() => { this.points = this.points.concat(new Point(coordinates.x, coordinates.y))});
        this.cd.markForCheck();
    }

    ngOnChanges(changes: { [key: string]: SimpleChange; }) {
        if (changes.hasOwnProperty('points')) {
            console.log(changes['points']);
            this.context.clearRect(0, 0, this.width, this.height);
            this.points.forEach((point) => {
                this.context.moveTo(point.x, point.y);
                this.context.stroke();
            });
        }


    }

}

export class Point {
    constructor(public x: number, public y: number) {}
}

function getMousePos(canvas, evt) {
    var rect = canvas.nativeElement.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
