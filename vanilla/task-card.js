// task-card.css?raw
var task_card_default = ':host\r\n{\r\n    --border-color: rgb(95, 95, 95);\r\n    border: solid 1px var(--border-color);\r\n    border-radius: 3px;\r\n    padding: 0;\r\n    margin: .25em;\r\n    display: inline-flex;\r\n}\r\n@media (prefers-color-scheme: dark) \r\n{\r\n    :host\r\n    {\r\n        --border-color: rgb(71, 71, 71);\r\n    }\r\n}\r\n\r\n[part="color-container"]\r\n{\r\n    display: contents;\r\n}\r\n\r\n[part="color"]\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 7.5px;\r\n    min-height: 0;\r\n    height: auto;\r\n    border: none;\r\n}\r\n[part="color"]::-moz-color-swatch \r\n{\r\n    border: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n[part="color"]::-webkit-color-swatch-wrapper \r\n{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n[part="color"]::-webkit-color-swatch \r\n{\r\n    border: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n[part="is-finished"]\r\n{\r\n    margin: 1em .5em;\r\n}\r\n\r\n\r\n[part="is-finished"]:checked + slot [part="description"]\r\n,[part="is-finished"]:checked + ::slotted([slot="description"])\r\n{\r\n    text-decoration: line-through;\r\n}\r\n\r\n[part="description"]\r\n{\r\n    /* user-agent input defaults */\r\n    --input-border-color: rgb(118, 118, 118);\r\n\r\n    min-height: 1.2em;\r\n    min-width: 20ch;\r\n    resize: both;\r\n    background-color: field;\r\n    color: fieldtext;\r\n    border: solid 1px var(--input-border-color, fieldtext);\r\n    padding: 3px 5px;\r\n    font-size: 12px;\r\n    font-family: sans-serif;\r\n    display: block;\r\n    border-radius: 2px;\r\n\r\n}\r\n@media (prefers-color-scheme: dark) \r\n{\r\n    :host\r\n    {\r\n        /* user-agent input defaults */\r\n        --input-border-color: rgb(133, 133, 133);\r\n    }\r\n}\r\n\r\n[part="description"]\r\n,::slotted([slot="description"])\r\n{\r\n    margin: 1em .5em 1em 0;\r\n    flex: 1;\r\n}\r\n\r\n[part="remove-button"]\r\n{\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin:1em .5em 1em 0;\r\n}\r\n[part="remove-icon"]\r\n{\r\n    width: var(--icon-width, var(--icon-size, 12px));\r\n    height: var(--icon-height, var(--icon-size, 12px));\r\n}';

// task-card.html?raw
var task_card_default2 = '<slot name="handle">\r\n    <span part="handle"></span>\r\n</slot>\r\n<span part="color-container">\r\n    <input type="color" part="color" value="#919191" />\r\n</span>\r\n<input type="checkbox" part="is-finished" title="Finished?" />\r\n<slot name="description"><div part="description" contenteditable="true"></div></slot>\r\n<button type="button" part="remove-button" title="Delete">\r\n    <slot name="remove-button-label">\r\n        <svg part="remove-icon" class="icon close-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r\n            <path\r\n            style="display:inline;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\r\n            d="m 3.8656768,2.2287478 a 1.6392814,1.6392814 0 0 0 -1.15929,0.48032 1.6392814,1.6392814 0 0 0 0,2.31816 l 6.38181,6.3818002 -6.38181,6.38182 a 1.6392814,1.6392814 0 0 0 0,2.31814 1.6392814,1.6392814 0 0 0 2.31816,0 l 6.3818102,-6.3818 6.38181,6.3818 a 1.6392814,1.6392814 0 0 0 2.31816,0 1.6392814,1.6392814 0 0 0 0,-2.31814 l -6.38182,-6.38182 6.38182,-6.3818002 a 1.6392814,1.6392814 0 0 0 0,-2.31816 1.6392814,1.6392814 0 0 0 -1.15929,-0.48032 1.6392814,1.6392814 0 0 0 -1.15887,0.48032 l -6.38181,6.38181 -6.3818102,-6.38181 a 1.6392814,1.6392814 0 0 0 -1.15887,-0.48032 z" />\r\n        </svg>\r\n    </slot>\r\n</button>';

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
      this.dispatchEvent(new CustomEvent("change", { detail: { target: event.target } }));
    });
    this.findPart("is-finished").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { detail: { target: event.target } }));
    });
    this.findPart("description").addEventListener("blur", (event) => {
      if (this.value != this.#previousValue) {
        this.dispatchEvent(new CustomEvent("change", { detail: { target: event.target } }));
      }
      this.#previousValue = this.value;
    });
    this.findPart("remove-button").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("remove"));
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
