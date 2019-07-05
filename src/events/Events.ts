import { Event, EventMap, EventType } from './Event';

export class Events {
    private events: Event[] = [];
    private listeners: Map<EventType, ReadonlyArray<(event: Event) => void>> = new Map();

    emit(event: Event) {
        this.events.push(event);
    }

    on<T extends keyof EventMap>(eventType: T, callback: (event: EventMap[T]) => void) {
        if (this.listeners.has(eventType)) {
            const newCallbackArray = (this.listeners.get(eventType) as ReadonlyArray<(event: Event) => void>)
                .concat([(callback as (event: Event) => void)]);
            this.listeners.set(eventType, newCallbackArray);
        } else {
            this.listeners.set(eventType, [callback as (event: Event) => void]);
        }
    }

    off<T extends keyof EventMap>(eventType: T, callback: (event: EventMap[T]) => void) {
        if (this.listeners.has(eventType)) {
            const newCallbackArray = this.listeners.get(eventType)!
                .filter((cb) => cb !== callback);
            this.listeners.set(eventType, newCallbackArray);
        }
    }

    proccess() {
        this.events.forEach((event) => {
            const listeners = this.listeners.has(event.type) ?
                this.listeners.get(event.type) as Array<(event: Event) => void> : [];
            listeners.forEach((callback: (event: Event) => void) => callback(event));
        });
        this.events = [];
    }
}
