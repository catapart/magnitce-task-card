# `<task-card>`
A custom `HTMLElement` that represents a task and provides an api for task properties.

Includes subrouting, transitions, events, dialog routes, route links, and route buttons.

Package size: ~19kb minified, ~33kb verbose.

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

## License
This library is in the public domain. You do not need permission, nor do you need to provide attribution, in order to use, modify, reproduce, publish, or sell it or any works using it or derived from it.