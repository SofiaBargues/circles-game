## Circles Game

Build a simple React app where a circle appears wherever the user clicks on the screen.

The app should support undo, redo, and reset operations.

### Functional Requirements

1. A circle should appear where the user clicks on the screen.
2. The circle should be assigned a random color from a predefined list of colors.
3. The app should support an `Undo` operation that removes the circles in the inverse order of insertion.
4. The app should support a `Redo` operation that adds back the circle removed via `Undo`.
5. The app should support a `Reset` operation that resets the board to its original state.
6. The controls should be disabled when there is nothing to `undo`, `redo`, or `reset`.
7. The circles should have fade-in/scale animation when entering and exiting the screen.

### Mockup

<img width="1918" height="908" alt="image" src="https://github.com/user-attachments/assets/71d3a030-72b5-4fef-a075-8d94bd3db1c6" />


### Notes

- The app should track the order in which circles are added.
- Undo should remove the most recently added circle.
- Redo should restore the most recently undone circle.
- Reset should clear the board and return the app to its initial state.
