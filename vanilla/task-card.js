// task-card.css?raw
var task_card_default = ':host\n{\n    --border-color: rgb(95, 95, 95);\n    border: solid 1px var(--border-color);\n    border-radius: 3px;\n    padding: 0;\n    margin: .25em;\n    display: inline-flex;\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n        --border-color: rgb(71, 71, 71);\n    }\n}\n\n[part="color-container"]\n{\n    display: contents;\n}\n\n[part="color"]\n{\n    margin: 0;\n    padding: 0;\n    width: 7.5px;\n    min-height: 0;\n    height: auto;\n    border: none;\n}\n[part="color"]::-moz-color-swatch \n{\n    border: none;\n    padding: 0;\n    margin: 0;\n}\n\n[part="color"]::-webkit-color-swatch-wrapper \n{\n    padding: 0;\n    margin: 0;\n}\n\n[part="color"]::-webkit-color-swatch \n{\n    border: none;\n    padding: 0;\n    margin: 0;\n}\n\n[part="is-finished"]\n{\n    margin: 1em .5em;\n}\n\n[part="finished-indicator"]\n{\n    margin-block: var(--margin, .5em);\n    background: var(--background);\n    background-color: var(--background-color, transparent);\n    background-image: var(--background-image, none);\n    border: var(--border, none);\n    color: var(--color);\n}\n\n\n[part="is-finished"]:checked ~ slot [part="description"]\n,[part="is-finished"]:checked ~ ::slotted([slot="description"])\n{\n    text-decoration: line-through;\n}\n\n::slotted([slot="custom-check"])\n{\n    display: none;\n}\n[part="is-finished"]:checked ~ [part="finished-indicator"]\n{\n    background: var(--finished-background);\n    background-color: var(--finished-background-color, transparent);\n    background-image: var(--finished-background-image, none);\n    border: var(--finished-border, none);\n    color: var(--finished-color);\n}\n[part="is-finished"]:checked ~ [part="finished-indicator"] ::slotted([slot="custom-check"])\n{\n    display: var(--custom-check-display, block);\n}\n\n[part="description"]\n{\n    /* user-agent input defaults */\n    --input-border-color: rgb(118, 118, 118);\n\n    min-height: 1.2em;\n    min-width: 24px;\n    resize: both;\n    background-color: field;\n    color: fieldtext;\n    border: solid 1px var(--input-border-color, fieldtext);\n    padding: 3px 15px 3px 5px;\n    font-size: 12px;\n    font-family: sans-serif;\n    display: block;\n    border-radius: 2px;\n    overflow: auto;\n    overflow-wrap: normal;\n\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n        /* user-agent input defaults */\n        --input-border-color: rgb(133, 133, 133);\n    }\n}\n\n[part="description"]\n,::slotted([slot="description"])\n{\n    margin: 1em .5em 1em 0;\n    flex: 1;\n}\n\n[part="remove-button"]\n{\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    margin:1em .5em 1em 0;\n}\n[part="remove-icon"]\n{\n    width: var(--icon-width, var(--icon-size, 12px));\n    height: var(--icon-height, var(--icon-size, 12px));\n}\n\n\n:host(.stacked)\n{\n    display: grid;\n    grid-template-columns: auto auto 1fr auto;\n    grid-template-rows: auto 1fr;\n}\n\n:host(.stacked) [part="color-container"]\n,:host(.stacked) [part="color"]\n{\n    grid-row: 2;\n    grid-column: 2;\n    width: 14px;\n    height: 14px;\n    margin-block-end: 7px;\n    margin-block-start: 0;\n    border-radius: 3px;\n    align-self: center;\n    justify-self: center;\n}\n\n:host(.stacked) [part="handle"]\n{\n    grid-row: span 2;\n    grid-column: 1;\n}\n\n:host(.stacked) [part="is-finished"]\n,:host(.stacked) [part="finished-indicator"]\n{\n    grid-row: 1;\n    grid-column: 2;\n    margin-block-start: 7px;\n    margin-block-end: 0;\n}\n\n:host(.stacked) [part="description"]\n,:host(.stacked) [part="remove-button"]\n{\n    grid-row: span 2;\n}';

// task-card.html?raw
var task_card_default2 = '<slot name="handle">\n    <span part="handle"></span>\n</slot>\n<label part="color-container">\n    <input type="color" part="color" value="#919191" />\n</label>\n<input type="checkbox" part="is-finished" title="Finished?" id="finished-checkbox" />\n<label part="finished-indicator" for="finished-checkbox"><slot name="custom-check"></slot></label>\n<slot name="description"><div part="description" contenteditable="true"></div></slot>\n<button type="button" part="remove-button" title="Delete">\n    <slot name="remove-button-label">\n        <svg part="remove-icon" class="icon close-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n            <path\n            style="display:inline;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\n            d="m 3.8656768,2.2287478 a 1.6392814,1.6392814 0 0 0 -1.15929,0.48032 1.6392814,1.6392814 0 0 0 0,2.31816 l 6.38181,6.3818002 -6.38181,6.38182 a 1.6392814,1.6392814 0 0 0 0,2.31814 1.6392814,1.6392814 0 0 0 2.31816,0 l 6.3818102,-6.3818 6.38181,6.3818 a 1.6392814,1.6392814 0 0 0 2.31816,0 1.6392814,1.6392814 0 0 0 0,-2.31814 l -6.38182,-6.38182 6.38182,-6.3818002 a 1.6392814,1.6392814 0 0 0 0,-2.31816 1.6392814,1.6392814 0 0 0 -1.15929,-0.48032 1.6392814,1.6392814 0 0 0 -1.15887,0.48032 l -6.38181,6.38181 -6.3818102,-6.38181 a 1.6392814,1.6392814 0 0 0 -1.15887,-0.48032 z" />\n        </svg>\n    </slot>\n</button>';

// task-card.ts
var TaskCardEvent = /* @__PURE__ */ ((TaskCardEvent2) => {
  TaskCardEvent2["Change"] = "change";
  TaskCardEvent2["Remove"] = "remove";
  return TaskCardEvent2;
})(TaskCardEvent || {});
var TaskCardPart = /* @__PURE__ */ ((TaskCardPart2) => {
  TaskCardPart2["Handle"] = "handle";
  TaskCardPart2["ColorLabel"] = "color-label";
  TaskCardPart2["Color"] = "color";
  TaskCardPart2["IsFinished"] = "is-finished";
  TaskCardPart2["Description"] = "description";
  TaskCardPart2["RemoveButton"] = "remove-button";
  TaskCardPart2["RemoveIcon"] = "remove-icon";
  return TaskCardPart2;
})(TaskCardPart || {});
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(task_card_default);
var COMPONENT_TAG_NAME = "task-card";
var TaskCardElement = class extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  /**
   * Query for a part in the element's shadow DOM and then caches it so that the next time this function is called, the cached element can be provided.
   * @param key the part value of the child element to query for
   * @returns the requested `HTMLElement` or `undefined`
   */
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  /**
   * Query for a part in the element's shadow DOM
   * @param key the part value of the child element to query for
   * @returns the requested `HTMLElement` or `undefined`
   */
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  get value() {
    return this.findPart("description").textContent;
  }
  #previousValue = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = task_card_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    this.findPart("color").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, detail: { target: event.target } }));
    });
    this.findPart("is-finished").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, detail: { target: event.target } }));
    });
    this.findPart("description").addEventListener("blur", (event) => {
      if (this.value != this.#previousValue) {
        this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, detail: { target: event.target } }));
      }
      this.#previousValue = this.value;
    });
    this.findPart("remove-button").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("remove", { bubbles: true, cancelable: true }));
    });
  }
  static create(props) {
    const element = document.createElement(COMPONENT_TAG_NAME);
    if (props == null) {
      return element;
    }
    for (const [key, value] of Object.entries(props)) {
      if (key == "value" || key == "placeholder" || key == "color") {
        element.setAttribute(key, value);
      } else if (key.startsWith("on")) {
        const eventName = key.substring(2).toLowerCase();
        element.addEventListener(eventName, value);
      }
    }
    return element;
  }
  static observedAttributes = ["value", "description", "color", "is-finished"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "value" || attributeName == "description") {
      this.findPart("description").textContent = newValue;
    } else if (attributeName == "is-finished") {
      this.findPart("is-finished").checked = newValue == "true";
    } else if (attributeName == "color") {
      this.findPart("color").value = newValue;
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, TaskCardElement);
}
export {
  COMPONENT_TAG_NAME,
  TaskCardElement,
  TaskCardEvent,
  TaskCardPart
};
