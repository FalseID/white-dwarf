import { asteroid, camera, player } from './Assembly'
import { RemoveBehavior } from './components/Attachment'
import { EntityManager } from './EntityManager'

export class GameManager {
    private then: number = Date.now()
    private readonly entities: EntityManager

    constructor(entities: EntityManager) {
        this.entities = entities
    }

    generateAsteroids() {
        const now = Date.now()
        if (now - this.then > 1500) {
            this.then = now
            this.entities.create(asteroid([320, 150], Math.random() * Math.PI))
        }
    }

    initWorld() {
        const playerId = this.entities.create(player([640, 360]))
        const cameraId = this.entities.create(camera())
        this.entities.attach(playerId, { childId: cameraId, offset: [30, 30], onRemove: RemoveBehavior.DETACH })
    }
}
