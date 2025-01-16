### Angular Pure Impure Pipes

Certainly, let's explore pure and impure pipes in Angular 19 with an example.

#### Pure Pipes

Definition:

By default, all pipes in Angular are pure.
Pure pipes are optimized for performance.
They are only re-executed when the input values to the pipe change.
If the input values remain the same, the pipe's previous output is reused.

Example:

TypeScript
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {
  transform(value: number): number {
    return value * value;
  }
}
```
In this example, the SquarePipe is pure. If the input value to the pipe remains the same, the pipe will not be re-executed, and the previously calculated squared value will be used.

#### Impure Pipes

Definition:

Impure pipes are re-executed every time the component's Change Detection runs.
They are useful when you need to:
React to external events (e.g., timer events, HTTP requests)
Handle asynchronous data
Perform side effects (e.g., logging)
Example:

TypeScript
```typescript
import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';

@Pipe({
  name: 'currentTime',
  pure: false 
})
export class CurrentTimePipe implements PipeTransform {
  currentTime: Date = new Date();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  transform(value: string): string {
    this.currentTime = new Date();
    this.changeDetectorRef.markForCheck(); 
    return this.currentTime.toLocaleTimeString();
  }
}
```

In this example, the currentTime pipe is impure due to the pure: false flag.

It updates the current time every time the Change Detection runs, ensuring that the displayed time is always up-to-date.
ChangeDetectorRef.markForCheck() is necessary to trigger a change detection cycle and update the view with the new time.
#### Key Considerations

Use pure pipes whenever possible for optimal performance.
Use impure pipes only when necessary, such as for handling asynchronous data or external events.
Be mindful of the performance implications of using impure pipes, as they can impact the overall performance of your application.
