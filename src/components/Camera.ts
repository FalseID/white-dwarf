import { Position } from '../Math'
import { Component, ComponentCode, ComponentState } from './Component'

export interface CameraState extends ComponentState {
    origin: Position
}

export class Camera extends Component {
    constructor(public state: CameraState) {
        super(ComponentCode.CAMERA, 'Camera', state)
    }
}
