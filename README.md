Visual representation of a dynamically loaded tree with very long, flat branches.

The items are managed by the parent component, but the state of the tree itself (which items are closed / open / selected) is managed by the tree component.
The loading state is managed by the parent component as well (this allows for the data to be reactive)

Props
-----

 * `branches`: an object where the keys are the categories, and the values are list of items for that branch.  Each item has the following properties:
    - `branches`: sub-branches for that item.  An object where the keys are the categories, and the values are the list of items for that branch.
    - `title`: string to display for the item
    - `id`: a unique identifier for the item (among this branch).  Each id must be unique for the item's category, though it may be repeated in different categories.
    - `loading`: indicate the content of that item (its children) is currently loading from the server
 * `categoryLabels`: map category name to labels
 * `onItemSelected`: a function that will be invoked when the user selects an item.
 * `onOpenItem`: a function that will be invoked when the user opens an item.  This should trigger a loading mechanism for that item.  The function will be called with the category key, and the item (the item should not be modified directly)
 * `onCloseItem`: a function that will be invoked when the user closes an item.
 * `children`: the component's child will be used as the detail view, when a user selects an item

Example
-------

See the [example app](https://github.com/nicocrm/flat-tree/blob/master/example/App.jsx) to view an example of how the component could be used in your own app.  This can be run after you clone the repository by running `npm start`

