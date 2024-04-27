---
title: Building React mini
description: React is a big library that gives a lot of useful apis for creating web apps that we tale for granted, in this blog post I try to implement some of these apis in order to understand how React works under the hood.
publishedAt: 2024-03-17
---

after using react for the past 3 years 2 of these professionally I've become descent at using the framework and my knowledge of the internal working of it became better with time, but still I don't understand a lot of parts that are essential to it's working and with the increase of tools and ways you can use react I decided to take a step back and try to understand the very basics of it for web dev, web dev is html css and javascript, a script tag is added to the html file has a script tag for js that browsers can run, so that's what I want code that looks very similar to react that I can just shove inside a browser.

so no vite no CRA no nextjs I just want js

let's try building a library that looks similar to reactjs in order to understand how it really works under the hood

first thing is that react doesn't work with jsx, jsx is a completely different project so react doesn't really understand it so a transpiler must come in to save us, enter [babel](https://babeljs.io/docs/)

If you try using react without jsx you'll have write something like this

```javascript
import { jsx as _jsx } from "react/jsx-runtime";
function App() {
  const [count, setCount] = useState(0);
  return /*#__PURE__*/ _jsx("a", {
    href: "#",
  });
}
```

I don't want to write this so why force anyone to do that, what I want is jsx so babel will transform the jsx for us to the code above (maybe we will build babel our selves too next??)

let's install it and configure it `npm i -D @babel/cli @babel/core @babel/plugin-transform-react-jsx`

in the package.json file we add this config

```json
"babel": {
    "presets": [],
    "plugins": [
      [
        "@babel/plugin-transform-react-jsx",
        {
          "throwIfNamespace": false,
          "runtime": "automatic",
          "importSource": "../packages/jsx"
        }
      ]
    ]
  }
```

and we add a script to run babel

`"build": "babel src -d dist"`

so the input would be:

```jsx
function Profile() {
  const user = {
    firstName: "helo",
    lastName: "yello",
  };
  return (
    <div>
      <img src="avatar.png" className="profile" />
      <h3>{[user.firstName, user.lastName].join(" ")}</h3>
    </div>
  );
}
```

and the output would look like:

```javascript
import { jsx as _jsx } from "../packages/jsx/jsx-runtime";
import { jsxs as _jsxs } from "../packages/jsx/jsx-runtime";
function Profile() {
  const user = {
    firstName: "helo",
    lastName: "yello",
  };
  return _jsxs("div", {
    children: [
      _jsx("img", {
        src: "avatar.png",
        className: "profile",
      }),
      _jsx("h3", {
        children: [user.firstName, user.lastName].join(" "),
      }),
    ],
  });
}
```

so you can see that all html elements are turned into function calls for `jsx` or `jsxs`

ok transpilation is done and we are back into js land but what about the imports from `jsx-runtime` we don't have that set yet so let's build it

first let's create a packages folder and this is where we will put the logic for react-mini, and add a jsx folder we will add the logic for jsx (this is something I took from the react code base, it's not specific to them but I liked this file structure)

in the jsx folder let's create the jsx-runtime file and export the functions the code needs

```javascript
export function jsx(tag, props, children) {
  console.log({ tag, props, children });
}
export function jsxs(tag, props, children) {
  console.log("hello", { tag, props, children });
}
```

just logging the arguments for now

forgot to mention this but I have a index.html where I import the entry point for the code in dist folder that babel produces so that I can run that code in the browser

doing this you'll run into problems trying to import into the index.js since it's not a module so let's set the script tag in our html

```html
<script src="dist/index.js" type="module"></script>
```

but just opening this html file will throw a CORS error, I know right this thing just can't stop making our lives miserable.

to fix this we need a server to serve this html, let's create server.js and put this gpt code inside:

```javascript
const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1"; // localhost
const port = 3000; // You can use any available port number

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
  let contentType = "text/html"; // Default content type

  // Check if the requested file is a JavaScript file
  if (path.extname(filePath) === ".js" || path.extname(filePath) === "") {
    contentType = "application/javascript"; // Set content type to JavaScript
  }
  if (path.extname(filePath) === "") filePath = filePath + ".js";

  // Check if the requested file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log({ err, pathext: path.extname(filePath) });
      res.writeHead(404);
      res.end("File not found");
      return;
    }

    // Read the file and serve it
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error loading file: ${err}`);
        return;
      }

      // Serve the file with the appropriate content type
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    });
  });
});

server.listen(port, hostname, () => console.log("server is running"));
```

you can see in line 16 that I'm checking for an empty extensions and that is because of this `import { jsx as _jsx } from "../packages/jsx/jsx-runtime";`

the import doesn't have the "js" extension and that is causing 404 errors so for now this is a quick and dirty fix until I find out how it's done for something like vite or next.js

I use this script to run it `"dev": "npm run build && node server.js"` transpile the jsx and run the server

## ReactDOM

let's create a folder inside packages and this would hold our ReactDOM implementation, react doesn't care about the UI so it can be used for anything, examples are react native react ink and the most known react dom.

ReactDOM cares about displaying to the browser so let's build that first

```jsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

this is from a react project so let's try to mimic that

```javascript
const ReactDOM = {};

function createRoot(element) {
  return {
    render: (root) => {
      console.log(root);
    },
  };
}

ReactDOM.createRoot = createRoot;

export default ReactDOM;
```

and let's import this inside our component

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

after running the program it would log undefined for the root but that's because our jsx handling functions don't return anything yet

remember our transpiled code would look like this

```javascript
ReactDOM.createRoot(document.getElementById("root")).render(jsx(App, {}));
```

so let's fix that quickly

```javascript
export function jsx(tag, props) {
  return {
    tag,
    props,
  };
}
export function jsxs(tag, props) {
  return {
    tag,
    props,
  };
}
```

I don't do anything fancy for now I just return whatever I receive

after running the code, the render function would log this

```javascript
{
  tag:App,
  children:{}
}
```

but this isn't very useful to us, the function components have their own implantation so for now let's ignore them, I just want to show something in the browser

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>title here</h1>
    <span>span here </span>
  </div>
);
```

this would be simpler to handle and we won't have to deal with any logic for functional or class components

the log for render function would become

```json
{
  "tag": "div",
  "props": {
    "children": [
      "text here ",
      {
        "tag": "span",
        "props": {
          "children": "text here 222"
        }
      }
    ]
  }
}
```

this is more useful to us and we can use it to create dom elements in the browser, so let's add more logic in the render function

```javascript
function createRoot(element) {
  return {
    render: (root) => {
      let newEl;
      if (!root.tag) {
        newEl = document.createTextNode(root);
      } else {
        newEl = document.createElement(root.tag);
      }
      walkTree(root.props.children, newEl);
      document.body.insertBefore(newEl, element);
    },
  };
}

function walkTree(children, parentEl) {
  if (Array.isArray(children)) {
    children.forEach((el) => {
      if (!el.tag) {
        //since no tag is given it's just text
        parentEl.appendChild(document.createTextNode(el));
      } else {
        const newEl = document.createElement(el.tag);
        walkTree(el.props.children, newEl);
        parentEl.appendChild(newEl);
      }
    });
    return;
  }
  if (!children.tag) {
    //since no tag is given it's just text
    parentEl.appendChild(document.createTextNode(children));
  } else {
    const newEl = document.createElement(children.tag);
    walkTree(children.tag.props.children, newEl);
    parentEl.appendChild(newEl);
  }
}
```

render now creates the root dom node then calls to walkTree function to traverse the children and creates the dom elements for each child and appends them to their correspondent parent recursively

running the code, will put the dom elements inside our browser for us to see, and congrats we got stuff displaying.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/41tkvh5v4u89k7a79h9j.png)

## functional components

in this section I'll try to handle functional components since they don't seem to be working for now

one thing that you'll notice after logging the result from jsx function for functional components is that we get the function signature so we can just call it and it'll return it's children whatever they are and we can just shove them inside the walkTree for it to process, some changes need to be made though

let's add logic to check if the tag is a function

```javascript
if (typeof children.tag === "function") {
  const functionCallRes = children.tag(children.props);
  walkTree(functionCallRes.props.children, newEl);
  return;
}
```

we just call the function and it would return to us what we need, we use a the children.props for the function since it does expect it if the components receives props

and let's updates the render function so it doesn't blow up if the root is a functional component

```javascript
render: (root) => {
  const newEl = document.createElement("div");
  walkTree(root, newEl);

  document.body.insertBefore(newEl, element);
};
```

we can also add support for the `style` prop for our elements so we can add styles in the future, the code for it is pretty straight forward

```javascript
if (children.props.style) {
  Object.keys(children.props.style).forEach((key) => {
    newEl.style[key] = children.props.style[key];
  });
}
```

this is for the case where we create a dom element, so here in the else statement:

```javascript
if (!children.tag) {
  //since no tag is given it's just text
  parentEl.appendChild(document.createTextNode(children));
} else {
  const newEl = document.createElement(children.tag);

  if (children.props.style) {
    Object.keys(children.props.style).forEach((key) => {
      newEl.style[key] = children.props.style[key];
    });
  }
  walkTree(children.props.children, newEl);
  parentEl.appendChild(newEl);
}
```

# react package

now that we got rendering to the screen, let's get to the real meat of react and try to implement some hooks

## useState

<!-- todo: update the dan abramove quote -->

useState is the bread and butter of UI development,"UI is a function of state".

ok what is the useState hook then?? well looking at the code for it

`const [counter, setCounter] = React.useState(10);`

it's just a function that takes the initial state and returns a tuple, first element is just the value for the state, second element is the function to update the state and cause a rerender.

let's try to implement that:

```javascript
function useState(initialState) {
  let state = initialState;
  function dispatch(newState) {
    state = newState;
    //rerender
  }

  const tuple = [initialState, dispatch];

  return tuple;
}
```

rerendering is just removing the old elements from the dom and inserting the new ones, insert part is done already in the **render** function now we just need to remove the dom elements and call the render function with the correct arguments and rerendering should be done.

But Taher you might say react doesn't blow up the whole app for a state update and you are correct react does handle updates better by updating only the parts that are effected by the state change, this is exciting to implement but for now I just want to build a counter not a stripe website.

so let's see how we can do it:

```javascript
function rerenderApp(element, root, appElement) {
  return () => {
    appElement.remove();
    createRoot(element).render(root);
  };
}

function createRoot(element) {
  return {
    render: (root) => {
      const newEl = document.createElement("div");
      walkTree(root, newEl);
      document.body.insertBefore(newEl, element);

      ReactDOM.rerender = rerenderApp(element, root, newEl);
    },
  };
}
```

rerenderApp is a function that returns a function so that we can set the needed params for rendering and removing elements from the dom, parent element for our app is removed from the dom and render just repaints to the screen, easy simple and quick to implement (I'm open to better ways to handle this).

let's create a counter

```jsx
function Profile() {
  const [counter, setCounter] = React.useState(10);

  return (
    <div>
      <button
        onClick={() => {
          const newCount = counter + 1;
          setCounter(newCount);
        }}
      >
        change counter: {counter}
      </button>
    </div>
  );
}
```

looks like any counter ever written in react so let's run it

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5a4shyv8qbtaj9oczxob.png)

running this and clicking the change counter button won't change anything in the browser, and that's because the state is being reset every time we call the render function, so we need to keep track of the states

```javascript
const stateMap = {
  states: [],
  calls: -1,
};

function useState(initialState) {
  const callId = ++stateMap.calls;

  if (stateMap.states[callId]) {
    return stateMap.states[callId];
  }

  function dispatch(newState) {
    stateMap.states[callId][0] = newState;
    //rerender
    stateMap.calls = -1;
    ReactDOM.rerender();
  }

  const tuple = [initialState, dispatch];
  stateMap.states[callId] = tuple;

  return tuple;
}
```

so we are keeping track of two things:

- `states` which is an array of tuples first element is the state value second is the update state function
- `calls` is just to keep track of the index of the state that we are trying to get

in first render the states array is empty so we fill it up by the tuples that we create and we keep track of them plus the callId

after updating the state we call dispatch, this will update the the specific state with the correct `callId` then reset the calls number and rerender the whole app

rerendering the app will call useState again so it would `const callId = ++stateMap.calls;` if we don't reset calls before rerender calls would be increasing endlessly and would just try to access a state that doesn't exist, by resetting `calls` we would have access to the correct state.

let's try to rerun the counter again

nothing would happen cause I forgot to implement `onClick` in react dom

```javascript
if (children.props.onClick) {
  newEl.addEventListener("click", children.props.onClick);
}
```

we add this inside the case where we handle dom elements so the walk function would like this

```javascript
function walkTree(children, parentEl) {
  if (!children) return;
  if (Array.isArray(children)) {
    children.forEach((el) => {
      if (!el.tag) {
        //since no tag is given it's just text
        parentEl.appendChild(document.createTextNode(el));
      } else {
        walkTree(el, parentEl);
      }
    });
    return;
  }

  if (typeof children.tag === "function") {
    walkTree(children.tag(children.props), parentEl);
    return;
  }

  if (!children.tag) {
    //since no tag is given it's just text
    parentEl.appendChild(document.createTextNode(children));
  } else {
    const newEl = document.createElement(children.tag);

    if (children.props.style) {
      Object.keys(children.props.style).forEach((key) => {
        newEl.style[key] = children.props.style[key];
      });
    }
    if (children.props.onClick) {
      newEl.addEventListener("click", children.props.onClick);
    }
    walkTree(children.props.children, newEl);
    parentEl.appendChild(newEl);
  }
}
```

let's try running the counter again

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0zsy8o44bodq0vspwz7h.gif)

and boom state is updating in the screen

## useRef

useRef is just useState without the returning the dispatch function so we can reuse most of the logic

```javascript
function useRef(initialState) {
  const callId = ++stateMap.calls;

  if (stateMap.states[callId]) {
    return stateMap.states[callId];
  }

  stateMap.states[callId] = { current: initialState };

  return stateMap.states[callId];
}
```

I don't create the dispatch function for useRef since we don't need it, I set the state to an object and return that, this worked for me when updating the current it would actually update the states array and not something weird, it's the difference between returning just the value or a reference to the object (that' what I think at least)

```jsx
const ref = React.useRef(null);
console.log("ref", ref.current);
```

the ref.current value will be preserved after rerenders, but no implementation of the ref prop for dom elements yet

## useEffect

this hook will be simple after implementing useState since it uses the same trick of keeping track of states (in this case dependency arrays) in an object that won't be destroyed after every rerender.

```jsx
React.useEffect(() => {
  console.log("this is called");
}, []);
```

this is a simple use case for useEffect and we can see that it takes two arguments, first one is a callback and second is the dependency array

```javascript
function useEffect(cb, depArr) {
  if (!depArr) throw new Error("you don't want this buddy");

  const callId = ++depMap.calls;
  const prevDeps = depMap.deps[callId];

  if (
    !prevDeps ||
    depArr.length !== prevDeps.length ||
    depArr.some((value, id) => {
      return value !== prevDeps[id];
    })
  ) {
    cb();
    depMap.deps[callId] = depArr;
  }
}
```

you can tell that I'm a better software dev than the whole react team since I do tell you that you must specify the dep array for useEffect, I added that cause I thought it was funny that's all

we keep track of the prev dep arrays in this object

```javascript
const depMap = {
  deps: [],
  calls: -1,
};
```

same way with the states tracking, we check if the prevDeps are there or not, if they are not then this is the first render and we should run the effect call back and we register the deps for the next renders, if there is any change the deps from the previous ones then we fire the call back and update the deps that we are tracking

<!-- todo: still yet to do the cleanup function -->

and there we have it, functioning useEffect hook so let's use it to do the only useful thing for this hook, fetching dog images

```jsx
React.useEffect(() => {
  fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
    res.json().then((res) => setImageSrc(res.message))
  );
  console.log("this is called");
}, [counter]);
```

every time we change the counter we fetch a random dog image and put it inside the imageSrc state

```jsx
<img src={imageSrc} />
```

we are setting the image src to the state, and update our ReactDOM logic so it sets the `src` attribute for image tags

```javascript
if (children.tag === "img" && children.props.src) {
  newEl.src = children.props.src;
}
```

and there we have it every time we update the the counter we see a new dog image

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qvwdjujlki858mo32nbn.gif)

## let's build a todo app

the best way to see if your library works is to build something with it, so let's build a quick todo app

```jsx
function Todo() {
  const [todos, setTodos] = React.useState(["first todo"]);
  const [inputVal, setInputVal] = React.useState("");
  return (
    <div>
      <label title="todo title">
        todo title
        <input
          value={inputVal}
          onChange={(evt) => {
            setInputVal(evt.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          if (!inputVal) return;
          setTodos([...todos, inputVal]);
        }}
      >
        add todo
      </button>
      <ul>
        {todos.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </div>
  );
}
```

we must add logic for the input tag element in ReactDOM

```javascript
if (children.tag === "input") {
  newEl.value = children.props.value ?? "";
  newEl.oninput = children.props.onChange;
}
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dflu8133jsliwwyt8jsz.png)

looks ugly but it's functional, typing into the input causes a bug, it goes out of focus on every character typed because I destroy the whole app on state change so we might have to create vdom and not rerender everything, or just use a ref for the input value

```jsx
<input
  onChange={(evt) => {
    inputVal.current = evt.target.value;
  }}
/>
```

and now no bugs only features, todos can be added to the list after clicking the add todo button.

this is a very bare bones implementation for the react api but it really helped me understand some of the magic that we take for granted when working with react.

here is the [repo](https://github.com/taher33/react-mini) so that you can check it out

building this also gave me new found respect for anyone that worked on these libraries, they are very smart people that I hold in high regard, and this is after trying to create something as simple as this, the amount of features that are just in react core: suspense, fiber reconciler, concurrent mode, server components and the list goes on, it is actually crazy.

I would like to build more, and explore more of react but let's call it for this one.

thank you for reading this far, I hope this article has been of some value to you and any feedback is good feedback.

---

some resources I used for understanding react more deeply:

this is a great [talk](https://www.youtube.com/watch?v=CGpMlWVcHok) by sophie alpert

this is the implementation of [hooks](https://youtu.be/1jWS7cCuUXw?si=sNvDrwIDtEp_p9zJ) that I used

Dan Abramov explaining [react fiber](https://youtu.be/aS41Y_eyNrU?si=NV_xSuHSRZatrZ7E)
