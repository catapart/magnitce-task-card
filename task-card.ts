import style from './task-card.css?raw';
import html from './task-card.html?raw';

export enum TaskCardEvent
{
    Change = 'change',
    Remove = 'remove'
}

export enum TaskCardPart
{
    Handle = 'handle',
    ColorLabel = 'color-label',
    Color = 'color',
    IsFinished = 'is-finished',
    Description = 'description',
    RemoveButton = 'remove-button',
    RemoveIcon = 'remove-icon',
}

export type TaskCardAttributes = 
{
    value?: string;
    placeholder?: string;
    color?: string;
};

export type TaskCardProperties = TaskCardAttributes &
{
    onInput?: (event?: Event) => void|Promise<void>;
    onChange?: (event?: Event) => void|Promise<void>;
};

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(style);

export const COMPONENT_TAG_NAME = 'task-card';
export class TaskCardElement extends HTMLElement
{

    componentParts: Map<string, HTMLElement> = new Map();
    /**
     * Query for a part in the element's shadow DOM and then caches it so that the next time this function is called, the cached element can be provided.
     * @param key the part value of the child element to query for
     * @returns the requested `HTMLElement` or `undefined`
     */
    getPart<T extends HTMLElement = HTMLElement>(key: string)
    {
        if(this.componentParts.get(key) == null)
        {
            const part = this.shadowRoot!.querySelector(`[part="${key}"]`) as HTMLElement;
            if(part != null) { this.componentParts.set(key, part); }
        }

        return this.componentParts.get(key) as T;
    }
    /**
     * Query for a part in the element's shadow DOM
     * @param key the part value of the child element to query for
     * @returns the requested `HTMLElement` or `undefined`
     */
    findPart<T extends HTMLElement = HTMLElement>(key: string) { return this.shadowRoot!.querySelector(`[part="${key}"]`) as T; }

    get value()
    {
        return this.findPart('description').textContent;
    }

    #previousValue: string|null = null;

    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot!.innerHTML = html;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        this.findPart('color').addEventListener('change', (event) =>
        {
            this.dispatchEvent(new CustomEvent('change', { bubbles: true, cancelable: true, detail: { target: event.target }}));
        });
        this.findPart('is-finished').addEventListener('change', (event) =>
        {
            this.dispatchEvent(new CustomEvent('change', { bubbles: true, cancelable: true, detail: { target: event.target }}));
        });
        this.findPart('description').addEventListener('blur', (event) =>
        {
            if(this.value != this.#previousValue)
            {
                // prevents race conditions
                this.dispatchEvent(new CustomEvent('change', { bubbles: true, cancelable: true, detail: { target: event.target }}));
            }
            this.#previousValue = this.value;
        });

        this.findPart('remove-button').addEventListener('click', () =>
        {
            this.dispatchEvent(new CustomEvent('remove', { bubbles: true, cancelable: true }));
        });
    }

    static create(props?: TaskCardProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as TaskCardElement;
        if(props == null) { return element; }        

        for(const [key, value] of Object.entries(props))
        {
            if(key == 'value' || key == 'placeholder'|| key == 'color')
            {
                element.setAttribute(key, value as string)
            }
            else if(key.startsWith('on'))
            {
                const eventName = key.substring(2).toLowerCase();
                element.addEventListener(eventName, value as (event: Event) => void|Promise<void>);
            }
        }
        return element;
    }

    static observedAttributes = [ 'value', 'description', 'color', 'is-finished' ];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string) 
    {
        if(attributeName == "value" || attributeName == "description")
        {
            this.findPart('description').textContent = newValue;
        }
        else if(attributeName == "is-finished")
        {
            this.findPart<HTMLInputElement>('is-finished').checked = (newValue == "true");
        }
        else if(attributeName == "color")
        {
            this.findPart<HTMLInputElement>('color').value = newValue;
        }
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskCardElement);
}