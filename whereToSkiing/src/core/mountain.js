//@flow
import Hill from './hill';

type MountainPropsType = {
    size: { width: number, length: number },
};

const NEW_ROW = 0;

export default class Mountain {

    _size: { width: number, length: number };
    _terrain: Array<Array<Hill>>;
    _hillNumber: number;

    constructor(props: MountainPropsType) {
        this._size = props.size;
        this._terrain = [];
        this._hillNumber = 0;
    }

    addHillInfo(hill: Hill) {
        if (this._hillNumber % this._size.width === NEW_ROW) {
            if (this._hillNumber !== 0) {
                this.compareNorthHillWith(hill);
            }

            this._terrain.push([hill]);
        } else {
            if (this._hillNumber > this._size.width) {
                this.compareNorthHillWith(hill);
            }
            this.compareWestHillWith(hill);
            this._terrain[this._terrain.length - 1].push(hill);
        }

        this._hillNumber++;
    }

    compareWestHillWith(hill: Hill) {

        const westHill = this._terrain[this._terrain.length - 1][this._hillNumber % this._size.width - 1];

        if (westHill.getHeight() > hill.getHeight()) {
            westHill.setSkiingDownPath(hill);
        } else {
            hill.setSkiingDownPath(westHill);
        }
    }

    compareNorthHillWith(hill: Hill) {
        const northHill = this._terrain[this._terrain.length - 1][0];
        if (northHill.getHeight() > hill.getHeight()) {
            northHill.setSkiingDownPath(hill);
        } else {
            hill.setSkiingDownPath(northHill);
        }
    }
}