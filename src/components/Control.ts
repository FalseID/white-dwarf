import { Component, ComponentCode } from './Component';

export interface ControlState {
    isFiring: boolean;
    isAccelerating: boolean;
    isDecelerating: boolean;
    isTurningLeft: boolean;
    isTurningRight: boolean;
}

export class Control extends Component {
    constructor(public state: ControlState) {
        super(ComponentCode.CONTROL, 'Control', state);
    }
}
