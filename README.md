# `<task-card>`
A custom `HTMLElement` that represents a task and provides an api for task properties.

Package size: ~6kb minified, ~8kb verbose.

## Quick Reference
```html
<task-card value="Dishes" is-finished="true"></task-card>
<task-card value="Laundry" color="#FF00FF"></task-card>
<task-card value="Sweeping"></task-card>
<task-card value="Cocktail (margarita:)">
    <textarea slot="description">
1 part  lime juice
1 part  orange liqueur (grand marnier/cointreau/triple sec/etc)
3 parts tequila

1 twist of lime peel
1 tbsp rimming salt

1/2 shaker of ice
1 serving glass "on the rocks" (a serving amount of ice)

combine lime juice, orange liquer, and tequila in shaker
shake well for 10-20 seconds
strain liquid into serving glass
express oils from lime peel and wet serving glass rim with them
apply rimming salt to wetted rim of glass
    </textarea>
</task-card>
<script type="module" src="/path/to/task-card[.min].js"></script>
```

## Demos
https://catapart.github.io/magnitce-task-card/demo/

## Support
- Firefox
- Chrome
- Edge
- <s>Safari</s> (Has not been tested; should be supported, based on custom element support)

## Getting Started
 1. [Install/Reference the library](#referenceinstall)

### Reference/Install
#### HTML Import (not required for vanilla js/ts; alternative to import statement)
```html
<script type="module" src="/path/to/task-card[.min].js"></script>
```
#### npm
```cmd
npm install @magnit-ce/task-card
```

### Import
#### Vanilla js/ts
```js
import "/path/to/task-card[.min].js"; // if you didn't reference from a <script>, reference with an import like this

import { TaskCard } from "/path/to/task-card[.min].js";
```
#### npm
```js
import "@magnit-ce/task-card"; // if you didn't reference from a <script>, reference with an import like this

import { TaskCard } from "@magnit-ce/task-card";
```

---
---
---

## Overview
The `<task-card>` element is a collection of a text-like input, a checkbox input, a color input, and a remove button, arranged for the purpose of listing them as tasks to be "completed". The element provides access to the inputs via the attributes, and dispatches events when the inputs change or the remove button is invoked.

## Attributes
The `<task-card>` element's attributes can be used to set the values of its inputs. Each attribute, and the its effects, are listed below.
|Attribute|Effect|
|-|-|
|`description`|Sets the text description of the task.|
|`value`|Sets the text description of the task. (alternative to description)|
|`placeholder`|Sets the text description's placeholder.|
|`is-finished`|When present, sets the checkbox to `checked`. When not present, clears the `checked` property of the checkbox.|
|`color`|Sets the color to the provided hex color value|

## Parts
The `<task-card>` element uses the `part` attribute to expose its shadow DOM content to the light DOM both for styling and selecting in javascript.

|Part Name|Description|
|-|-|
|`handle`|An area before the color input. This area is unstyled in the library. This part is intended to be used with implementations that interact with dragging the `<task-card>` element.|
|`color-container`|Holds the input that records the task's color.|
|`color`|An input that displays a color on the task. Intended for basic "tagging" or "grouping".|
|`is-finished`|An input that displays the completed status of the task.|
|`description`|An input that displays the description of the task.|
|`remove-button`|A button that dispatches a remove event on the task element.|
|`remove-icon`|The icon that is used to represent removing the task element from the DOM.|

### `findPart()` and `getPart()`
In addition to being able to select an element from the `<task-card>` element's shadowRoot reference, this element provides a function for selecting one of its parts by using the `findPart()` function.

In this example, the same part is selected with the default shadowRoot reference, and by using the `findPart()` function:
```js
const taskCard = document.querySelector('task-card');
taskCard.findPart('description').addEventListener('input', (event) =>
{
    // queries the shadowRoot for an element with a part attribute of "description"
});
taskCard.shadowRoot.querySelector('[part="description"]').addEventListener('input', (event) =>
{
    // queries the shadowRoot for an element with a part attribute of "description"
});
```
*(note: these two calls do exactly the same thing)*

If one of this element's parts are going to be referenced frequently, the `<task-card>` element's `getPart()` function can be used instead.

With `getPart()`, the element will be cached in RAM for immediate access witout having to perform a DOM query on the shadowRoot.
```js
const taskCard = document.querySelector('task-card');
taskCard.getPart('description').addEventListener('input', (event) =>
{
    // gets cached element and, if null: queries the shadowRoot for an element with a part attribute of "description"
});
taskCard.shadowRoot.querySelector('[part="description"]').addEventListener('input', (event) =>
{
    // queries the shadowRoot for an element with a part attribute of "description"
});
```
*(note: these two calls do two different things)*

For event-based or initialization code, `findPart()` should be fine for performance. But if the `<task-card>` element is going to be updated multiple times in a row, the `getPart()` function will provide a smoother experience.

## Events
The `<task-card>` element's events are dispatched on the `<task-card>` element, but they provide the element that invoked the event using the `target` property on the `CustomEvent`'s `detail` property.

The value of the content can be read directly from the input reference.

In this example, the description input's value is read once using the `<task-card>` element's `change` event, and again using the description input's `input` event:
```js
const taskCard = document.querySelector('task-card');
const taskDescription = taskCard.findPart('description');
taskCard.addEventListener('change', (event) =>
{
    const input = event.detail.target;
    if(input == taskDescription)
    {
        console.log(input.value);
    }
});
taskDescription.addEventListener('input', (event) =>
{
    const input = event.target;
    console.log(input.value);
});
```

|Event|Detail|
|-|-|
|`change`|`{ target: [HTMLInputElement] }`|
|`remove`|`null`|

## Slots
The `<task-card>` element allows customization by using slots to inject custom html content into its shadowRoot.

A common use-case for the element's slots are to use the `description` slot to replace the type of text input the description uses. By setting a `<textarea>` element's `slot` value to `description`, the `<textarea>` element will be used to record the task's description.

The `<task-card>` element exposes the following `slot`s: 
|Slot Name|Description|Default
|-|-|-|
|`handle`|[*empty in library implementation*] Intended to be used for a "drag and drop" handle.|`HTMLSpanElement`|
|`description`|Holds the input that records the task's description.|`HTMLDivElement[contenteditable]`|
|`remove-button-label`|The content of the remove button.|`SVGElement`|

## Styling
Each of the elements in the `<task-card>` element's shadowRoot can be selected for styling, directly, by using the `::part()` selector.

In this example, the `description` part is being selected for styling:
```css
task-card::part(description)
{
    /* styling */
}
```

For a list of all part names, see the [parts](#parts) section.

## `<task-list>` and `<task-board>` elements
The `<task-card>` element is designed as a standalone element and has some utility on its own, but it was designed alongside two other "parent" elements: the [`<task-list>`](https://github.com/catapart/magnitce-task-list) and [`<task-board>`](https://github.com/catapart/magnitce-task-board) elements.

Taken together, a `<task-list>` element with a `<task-card>` element as its child is analagous to the `select` element and the `option` element. Since the `<task-card>` element can be used with multiple parents, it didn't make sense to build them as a packaged library, so the `<task-card>` element was developed to be a standalone element for generalized implementation.

The expected "parent" implementation informs why the `<task-card>` element's remove button doesn't actually remove it from the DOM. This structure seemed to be more agnostic, and it was hard to imagine that a developer would want to use this particular library, but **not** want to use any kind of management javascript for it.

So, if you are implementing a custom management solution: this element sticks to messaging, rather than direct effects. Otherwise, this element can be fully managed either in simple lists, or within a full task board, by using either the [`<task-list>`](https://github.com/catapart/magnitce-task-list) or [`<task-board>`](https://github.com/catapart/magnitce-task-board) element.

## License
This library is in the public domain. You do not need permission, nor do you need to provide attribution, in order to use, modify, reproduce, publish, or sell it or any works using it or derived from it.