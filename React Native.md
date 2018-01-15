# React Native Learning

My self learning notes and repo for examples to go back on later. 

---

## Creating an Initial project
`react-native init { project name }`

* Generates a react native project with the proper structure

### Running Projects
* iOS

`react-native run-ios`

* Android

`react-native run-android`

Launches either an Android and iOS Emulator.  To run on and debug on a devce, use either ADB or XCode. 

## React Native App Composition

### A Hello World Application

```
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
```

the takeaway from this is that you import react using `import React, { Component } from 'react';`

### JSX Rendering

```
render() {
    return (
        <Text>Hello World!</Text>
    );
}
```

* this is jsx or Javascript XML
* it renders items onto the native component it represents

The Render component must only have **one** Parent component inside the return.  All other nodes must be children.  Usually rendered items are placed inside a `View` component. 

```
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
```

* is the entry point for a react native application. 
* if you open the xcode generated code, you will notice the entry point is the same in AppDelegate file.  This is how React is hooked into a native application and APIs are exposed. 

___

### ES6 ES2015

`import`, `from`, `class`, `extends`, and `() =>` are all apart of these language improvements.

## Props with Components
---

```
import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

module.exports = Bananas;
```

* Props allow components to take in values that are static and do not change.  
* Props are denoted as `{ theProp }` and have curley braces surrounding some javascript property or function that returns a value. 

### Custom Components
```
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
```

* Custom components all have the `this.props` object built in.  Values on render can be passed into a custom object. Snipped below demonstrates this concept, some code missing

```
...
render() {
    return (
        <Greeting name='Tim' />
    );
}
...
```

## State on Components

* Two importat types of data that can control a component
1. props
2. state.props

these are both set by the _parent_ and are **fixed throughout the lifetime of a component**

### Example Component with ES6 Constructor feature

```
class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: 'pair' };
    }
}
```

* subsequent state changes are then called using this.setState(). This causes a re-render of the component. 

* note how the constructure takes in and calls super with **props object**

* Redux could also be used in lue of `setState()`.

`

