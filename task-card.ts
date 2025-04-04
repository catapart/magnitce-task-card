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
    getElement<T extends HTMLElement = HTMLElement>(id: string)
    {
        if(this.componentParts.get(id) == null)
        {
            const part = this.findElement(id);
            if(part != null) { this.componentParts.set(id, part); }
        }

        return this.componentParts.get(id) as T;
    }
    findElement<T extends HTMLElement = HTMLElement>(id: string) { return this.shadowRoot!.getElementById(id) as T; }

    get value()
    {
        return this.findElement('description').textContent;
    }

    #previousValue: string|null = null;

    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot!.innerHTML = html;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        this.findElement('custom-check').addEventListener('slotchange', (event) =>
        {
            const customCheck = (event.target! as HTMLSlotElement).assignedNodes()[0];
            this.classList.toggle('custom-checkbox', (customCheck != null));
        });

        this.findElement('color').addEventListener('change', (event) =>
        {
            this.dispatchEvent(new CustomEvent('change', { bubbles: true, cancelable: true, composed: true, detail: this.#getCardData('color') }));
        });
        this.findElement('is-finished').addEventListener('change', (event) =>
        {
            const isAllowed = this.dispatchEvent(new CustomEvent('change', { bubbles: true, cancelable: true, composed: true, detail: this.#getCardData('is-finished') }));
            if(isAllowed == false) { return; }
            this.classList.toggle('finished');
            this.part.toggle('finished', this.classList.contains('finished'));
        });
        this.findElement('description').addEventListener('blur', (event) =>
        {
            if(this.value != this.#previousValue)
            {
                // prevents race conditions
                this.dispatchEvent(new CustomEvent('change', { bubbles: true, cancelable: true, composed: true, detail: this.#getCardData('description') }));
            }
            this.#previousValue = this.value;
        });

        this.findElement('remove-button').addEventListener('click', (event) =>
        {
            this.dispatchEvent(new CustomEvent('remove', { bubbles: true, cancelable: true, composed: true }));
        });

        this.#applyPartAttributes();
    }
    #applyPartAttributes()
    {
        const identifiedElements = [...this.shadowRoot!.querySelectorAll('[id]')];
        for(let i = 0; i < identifiedElements.length; i++)
        {
            identifiedElements[i].part.add(identifiedElements[i].id);
        }
        const classedElements = [...this.shadowRoot!.querySelectorAll('[class]')];
        for(let i = 0; i < classedElements.length; i++)
        {
            classedElements[i].part.add(...classedElements[i].classList);
        }
    }

    #getCardData(currentUpdate: string)
    {
        return { 
            currentUpdate,
            color: this.findElement<HTMLInputElement>('color').value,
            isFinished: this.findElement<HTMLInputElement>('is-finished').checked,
            description: this.findElement<HTMLInputElement>('description').textContent,
        };
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
            this.findElement('description').textContent = newValue;
        }
        else if(attributeName == "is-finished")
        {
            this.findElement<HTMLInputElement>('is-finished').checked = (newValue == "true");
        }
        else if(attributeName == "color")
        {
            this.findElement<HTMLInputElement>('color').value = newValue;
        }
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskCardElement);
}