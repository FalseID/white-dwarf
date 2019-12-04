import { Component, ComponentCode } from './Component'

export interface HealthState {
    health: number,
    maxHealth: number
}

export class Health extends Component {
    constructor(public state: HealthState) {
        super(ComponentCode.HEALTH, 'Health', state)
    }
}
