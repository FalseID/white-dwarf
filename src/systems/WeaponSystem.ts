import { CommandManager } from '../CommandManager';
import { Command } from '../Commands';
import { ComponentCode } from '../components/Components';
import { Weapon } from '../components/Weapon';
import { EntityManager } from '../EntityManager';
import { EventManager } from '../EventManager';
import { FireEvent } from '../events/FireEvent';
import { System } from './System';

export class WeaponSystem extends System {
    constructor(
        private readonly entityManager: EntityManager,
        private readonly eventManager: EventManager,
        private readonly commandManager: CommandManager) {
        super();
        this.registerListeners();
    }

    update() {
        return;
    }

    registerListeners() {
        this.commandManager.registerListener(Command.FIRE, () => {
            this.entityManager.entities.forEach((entity) => {
                const weapon = entity.getComponent(ComponentCode.WEAPON) as Weapon | undefined;
                if (!weapon) return;

                this.eventManager.queueEvent(new FireEvent(entity.id));
            });
        });
    }
}
