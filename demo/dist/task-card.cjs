"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// task-card.ts
var task_card_exports = {};
__export(task_card_exports, {
  COMPONENT_TAG_NAME: () => COMPONENT_TAG_NAME,
  TaskCardElement: () => TaskCardElement,
  TaskCardEvent: () => TaskCardEvent,
  TaskCardPart: () => TaskCardPart
});
module.exports = __toCommonJS(task_card_exports);

// task-card.css?raw
var task_card_default = ':host\r\n{\r\n    --border-color: rgb(95, 95, 95);\r\n    border: solid 1px var(--border-color);\r\n    border-radius: 3px;\r\n    padding: 0;\r\n    margin: .25em;\r\n    display: inline-flex;\r\n}\r\n@media (prefers-color-scheme: dark) \r\n{\r\n    :host\r\n    {\r\n        --border-color: rgb(71, 71, 71);\r\n    }\r\n}\r\n\r\n:host:has(#description:focus)\r\n,:host:has(#description:focus-visible)\r\n{\r\n    outline: var(--task-focus-outline);\r\n}\r\n\r\n/* :host:has(#description)\r\n{\r\n    outline: var(--task-focus-outline);\r\n} */\r\n\r\n#color-container\r\n{\r\n    display: contents;\r\n}\r\n\r\n#color\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 7.5px;\r\n    min-height: 0;\r\n    height: auto;\r\n    border: none;\r\n}\r\n#color::-moz-color-swatch \r\n{\r\n    border: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#color::-webkit-color-swatch-wrapper \r\n{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#color::-webkit-color-swatch \r\n{\r\n    border: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#is-finished\r\n{\r\n    margin: 1em .5em;\r\n}\r\n\r\n:host(.custom-checkbox) #is-finished\r\n{\r\n    display: none;\r\n}\r\n\r\n#finished-indicator\r\n{\r\n    margin-block: var(--margin-block, var(--margin, .5em));\r\n    margin-inline: var(--margin-inline, var(--margin, .5em));\r\n    background: var(--background);\r\n    background-color: var(--background-color, field);\r\n    background-image: var(--background-image, none);\r\n    border: var(--border, solid 1px fieldtext);\r\n    color: var(--color);\r\n    min-width: 13px;\r\n    min-height: 13px;\r\n    border-radius: 3px;\r\n    padding: 1px 2px;\r\n    box-sizing: border-box;\r\n    user-select: none;\r\n}\r\n:host(:not(.custom-checkbox)) #finished-indicator\r\n{\r\n    display: none;\r\n}\r\n\r\n\r\n#is-finished:checked ~ slot #description\r\n,#is-finished:checked ~ ::slotted([slot="description"])\r\n{\r\n    text-decoration: line-through;\r\n}\r\n\r\n::slotted([slot="custom-check"])\r\n{\r\n    visibility: hidden;\r\n}\r\n#is-finished:checked ~ #finished-indicator\r\n{\r\n    background: var(--finished-background);\r\n    background-color: var(--finished-background-color, transparent);\r\n    background-image: var(--finished-background-image, none);\r\n    border: var(--finished-border, solid 1px fieldtext);\r\n    color: var(--finished-color);\r\n}\r\n#is-finished:checked ~ #finished-indicator ::slotted([slot="custom-check"])\r\n{\r\n    visibility: var(--custom-check-visibility, visible);\r\n    display: var(--custom-check-display, block);\r\n}\r\n\r\n#description\r\n{\r\n    /* user-agent input defaults */\r\n    --input-border-color: rgb(118, 118, 118);\r\n\r\n    min-height: 1.2em;\r\n    min-width: 24px;\r\n    resize: both;\r\n    background-color: field;\r\n    color: fieldtext;\r\n    border: solid 1px var(--input-border-color, fieldtext);\r\n    padding: 3px 15px 3px 5px;\r\n    font-size: 12px;\r\n    font-family: sans-serif;\r\n    display: block;\r\n    border-radius: 2px;\r\n    overflow: auto;\r\n    overflow-wrap: normal;\r\n\r\n}\r\n@media (prefers-color-scheme: dark) \r\n{\r\n    :host\r\n    {\r\n        /* user-agent input defaults */\r\n        --input-border-color: rgb(133, 133, 133);\r\n    }\r\n}\r\n\r\n#description\r\n,::slotted([slot="description"])\r\n{\r\n    margin: 1em .5em 1em 0;\r\n    flex: 1;\r\n}\r\n\r\n#remove-button\r\n{\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin:1em .5em 1em 0;\r\n}\r\n#remove-icon\r\n{\r\n    width: var(--icon-width, var(--icon-size, 12px));\r\n    height: var(--icon-height, var(--icon-size, 12px));\r\n}\r\n\r\n\r\n:host(.stacked)\r\n{\r\n    display: grid;\r\n    grid-template-columns: auto auto 1fr auto;\r\n    grid-template-rows: auto 1fr;\r\n}\r\n\r\n:host(.stacked) #color-container\r\n,:host(.stacked) #color\r\n{\r\n    grid-row: 2;\r\n    grid-column: 2;\r\n    width: 14px;\r\n    height: 14px;\r\n    margin-block-end: 7px;\r\n    margin-block-start: 0;\r\n    border-radius: 3px;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n\r\n:host(.stacked) #handle\r\n{\r\n    grid-row: span 2;\r\n    grid-column: 1;\r\n}\r\n\r\n:host(.stacked) #is-finished\r\n{\r\n    grid-row: 1;\r\n    grid-column: 2;\r\n    margin-block-start: 7px;\r\n    margin-block-end: 0;\r\n}\r\n\r\n:host(.stacked) #description\r\n,:host(.stacked) #remove-button\r\n{\r\n    grid-row: span 2;\r\n    margin-top: 7px;\r\n    margin-bottom: 7px;\r\n}';

// task-card.html?raw
var task_card_default2 = '<slot name="handle">\r\n    <span id="handle"></span>\r\n</slot>\r\n<label id="color-container">\r\n    <input type="color" id="color" class="input" value="#919191" />\r\n</label>\r\n<input type="checkbox" id="is-finished" class="input checkbox" title="Finished?" />\r\n<label id="finished-indicator" for="is-finished" tabindex="0">\r\n    <slot id="custom-check" name="custom-check"></slot>\r\n</label>\r\n<slot name="description"><div id="description" contenteditable="true"></div></slot>\r\n<button type="button" id="remove-button" class="button" title="Delete">\r\n    <slot name="remove-button-label">\r\n        <svg id="remove-icon" class="icon close-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r\n            <path\r\n            style="display:inline;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\r\n            d="m 3.8656768,2.2287478 a 1.6392814,1.6392814 0 0 0 -1.15929,0.48032 1.6392814,1.6392814 0 0 0 0,2.31816 l 6.38181,6.3818002 -6.38181,6.38182 a 1.6392814,1.6392814 0 0 0 0,2.31814 1.6392814,1.6392814 0 0 0 2.31816,0 l 6.3818102,-6.3818 6.38181,6.3818 a 1.6392814,1.6392814 0 0 0 2.31816,0 1.6392814,1.6392814 0 0 0 0,-2.31814 l -6.38182,-6.38182 6.38182,-6.3818002 a 1.6392814,1.6392814 0 0 0 0,-2.31816 1.6392814,1.6392814 0 0 0 -1.15929,-0.48032 1.6392814,1.6392814 0 0 0 -1.15887,0.48032 l -6.38181,6.38181 -6.3818102,-6.38181 a 1.6392814,1.6392814 0 0 0 -1.15887,-0.48032 z" />\r\n        </svg>\r\n    </slot>\r\n</button>';

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
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  get value() {
    return this.findElement("description").textContent;
  }
  #previousValue = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = task_card_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    this.findElement("custom-check").addEventListener("slotchange", (event) => {
      const customCheck = event.target.assignedNodes()[0];
      this.classList.toggle("custom-checkbox", customCheck != null);
    });
    this.findElement("color").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, composed: true, detail: this.#getCardData("color") }));
    });
    this.findElement("is-finished").addEventListener("change", (event) => {
      const isAllowed = this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, composed: true, detail: this.#getCardData("is-finished") }));
      if (isAllowed == false) {
        return;
      }
      const finished = event.target.checked;
      this.classList.toggle("finished", finished);
      this.part.toggle("finished", finished);
      const indicator = this.findElement("finished-indicator");
      indicator.classList.toggle("finished", finished);
      indicator.part.toggle("finished", finished);
    });
    this.findElement("description").addEventListener("blur", (event) => {
      if (this.value != this.#previousValue) {
        this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, composed: true, detail: this.#getCardData("description") }));
      }
      this.#previousValue = this.value;
    });
    this.findElement("remove-button").addEventListener("click", (event) => {
      this.dispatchEvent(new CustomEvent("remove", { bubbles: true, cancelable: true, composed: true }));
    });
    this.#applyPartAttributes();
  }
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
  }
  #getCardData(currentUpdate) {
    return {
      currentUpdate,
      color: this.findElement("color").value,
      isFinished: this.findElement("is-finished").checked,
      description: this.findElement("description").textContent
    };
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
      this.findElement("description").textContent = newValue;
    } else if (attributeName == "is-finished") {
      const finished = newValue == "true";
      this.findElement("is-finished").checked = finished;
      this.classList.toggle("finished", finished);
      this.part.toggle("finished", finished);
      const indicator = this.findElement("finished-indicator");
      indicator.classList.toggle("finished", finished);
      indicator.part.toggle("finished", finished);
    } else if (attributeName == "color") {
      this.findElement("color").value = newValue;
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, TaskCardElement);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  COMPONENT_TAG_NAME,
  TaskCardElement,
  TaskCardEvent,
  TaskCardPart
});
