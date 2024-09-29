declare enum TaskCardEvent {
    Change = "change",
    Remove = "remove"
}
declare enum TaskCardPart {
    Handle = "handle",
    ColorLabel = "color-label",
    Color = "color",
    IsFinished = "is-finished",
    Description = "description",
    RemoveButton = "remove-button",
    RemoveIcon = "remove-icon"
}
type TaskCardAttributes = {
    value?: string;
    placeholder?: string;
    color?: string;
};
type TaskCardProperties = TaskCardAttributes & {
    onInput?: (event?: Event) => void | Promise<void>;
    onChange?: (event?: Event) => void | Promise<void>;
};
declare const COMPONENT_TAG_NAME = "task-card";
declare class TaskCardElement extends HTMLElement {
    #private;
    componentParts: Map<string, HTMLElement>;
    /**
     * Query for a part in the element's shadow DOM and then caches it so that the next time this function is called, the cached element can be provided.
     * @param key the part value of the child element to query for
     * @returns the requested `HTMLElement` or `undefined`
     */
    getPart<T extends HTMLElement = HTMLElement>(key: string): T;
    /**
     * Query for a part in the element's shadow DOM
     * @param key the part value of the child element to query for
     * @returns the requested `HTMLElement` or `undefined`
     */
    findPart<T extends HTMLElement = HTMLElement>(key: string): T;
    get value(): string | null;
    constructor();
    static create(props?: TaskCardProperties): TaskCardElement;
    static observedAttributes: string[];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string): void;
}

export { COMPONENT_TAG_NAME, type TaskCardAttributes, TaskCardElement, TaskCardEvent, TaskCardPart, type TaskCardProperties };
