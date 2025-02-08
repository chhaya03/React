# React
<h2>React  is popular Javascript library used for building user interfaces, particularly for single-page Application.</h2> <br>

1 .JavaScript library to build Dynamic and interactive user interfaces <br>
2. Developed at Facebook in 2011. <br>
3. Currently most widely used JS library for front-end development. <br>
4. Used to create single page application (page does not re-load) <br>

<h1> Working of DOM</h1> <br>
1. Browser takes HTML and create DOM. <br>
2. JS helps us modify DOM based on user actions or events.<br>
3. In big applications, Working with DOM becomes complicated.<br>

<h1> Problems with JavaScript</h1><br>
1. React has a simpler mental model<br>
2. JS is cumbersome<br>
3. JS is Error-prone<br>
4. JS is Hard to maintain<br>

 <h1>Working of React</h1><br>
 1. No need to worry about querying and updating DOM elements.<br>
2. React creates a web page with small and reusable components<br>
3. React will take care of creating and updating DOM elements.<br>
4. IT saves a lot of time, cheezein aasan hai, pahele se likhi hui hain<br>



<h1>State vs Props</h1>

<h1>State:</h1><br>
• Local and mutable data within a component.<br>
• Initialized within the component.<br>
• Can change over time.<br>
• Causes re-render when updated.<br>
• Managed using useState in functional components.<br>


<h1>Props:</h1><br>
• Passed into a component from its parent.<br>
• Read-only (immutable) within the receiving component.<br>
• Allow parent-to-child component communication.<br>
• Changes in props can also cause a re-render.<br>

<h1>React-icon Library
</h1><br>
1. You can use a lot of icons without managing 
them.<br>
2. Install Package
npm install react-icons –save<br>
3. Use icon:
import {IconName} from "react-icons/fc";


<h1>How React Works</h1><br>
Root Component: • The App is the main or root component of a React application.<br><br>
• It's the starting point of your React component tree.<br>
Virtual DOM:<br>
• React creates an in-memory structure called the virtual DOM.<br>
• Different from the actual browser DOM.<br>
• It's a lightweight representation where each node stands for a 
component and its attributes.<br>
Reconciliation Process:<br>
• When component data changes, React updates the virtual DOM's 
state to mirror these changes.<br>
• React then compares the current and previous versions of the 
virtual DOM.<br>
• It identifies the specific nodes that need updating.<br>
• Only these nodes are updated in the real browser DOM, making it 
efficient


<h1>React and ReactDOM: </h1>
• The actual updating of the browser's DOM isn't done by React itself.<br>
• It's handled by a companion library called react-dom.<br>
<h3>Root Element:</h3>
• The root div acts as a container for the React app.<br>
• The script tag is where the React app starts executing.<br>
• If you check main.tsx, the component tree is rendered inside this 
root element.
<h3>Strict Mode Component:</h3> 
• It's a special component in React.<br>
• Doesn't have a visual representation.<br>
• Its purpose is to spot potential issues in your React app.<br>
<h3>Platform Independence:</h3>
• React's design allows it to be platform-agnostic.<br>
• While react-dom helps build web UIs using React, ReactNative can 
be used to craft mobile app UIs.




<h1>Using Forms
</h1>
<h3>State Management:</h3> Each input's state 
is stored in the component's state.
 <h3>Handling Changes:</h3> Use onChange to 
detect input changes.
 <h3>Submission:</h3> Utilize onSubmit for form 
submissions and prevent default with 
event.preventDefault().
 <h3>Validation:</h3> Implement custom 
validation or use third-party libraries


<h1>Use Ref</h1>
1. useRef allows access to DOM elements and 
retains mutable values without re-renders.<br>
2. Used with the ref attribute for direct DOM 
interactions.<br>
3. Can hold previous state or prop values.<br>
4. Not limited to DOM references; can hold any 
value.<br>
5. Refs can be passed as props also


<h1>Update state from Previous State
</h1>
• Spread Operator: Use to maintain 
immutability when updating arrays or 
objects.<br>
• Functional Updates: Use 
(existingPosts) => [postData, ...existingPosts] 
to avoid stale values during asynchronous 
updates

<h1>Context API
</h1>
1. Prop Drilling: Context API addresses prop drilling; 
component composition is an alternative.<br>
2. Folder Setup: Use a store folder for context files.<br>
3. Initialization: Use React.createContext with initial state 
and export it.<br>
4. Provider: Implement with contextName.Provider in 
components.<br>
5. Access Value: Use the useContext hook.<br>
6. Dynamic Data: Combine context value with state.<br>
7. Export Functions: Context can also export functions for 
actions<br>
8. Logic Separation: This helps keep the UI and business 
logic separate from each other.<br>


<h1>Use Reducer
</h1>
1. useReducer is a hook in React that offers more control over <br>
state operations compared to useState, especially for 
complex state logic.<br>
2. Components: It involves two main components:<br>
  => Reducer: A pure function that takes the current state and 
   an action and returns a new state.<br>
  => Action: An object describing what happened, typically 
having a type property.<br>
3. Initialization: It's invoked as 
const [state, dispatch] = useReducer(reducer, initialState).<br>
4. Dispatch: Actions are dispatched using the dispatch 
function, which invokes the reducer with the current state 
and the given action.<br>
5. Use Cases: Particularly useful for managing state in large 
components or when the next state depends on the 
previous one.<br>
6. Predictable State Management: Due to its strict structure, it 
leads to more predictable and maintainable state 
management.<br>


<h1>Data fetching using Fetch
</h1>
1. fetch: Modern JavaScript API for network requests.<br>
2. Promise-Based: Returns a Promise with a Response 
object.<br>
3. Usage: Default is GET. For POST use method: 'POST'<br>
4. Response: Use .then() and response.json() for JSON data.<br>
5. Errors: Doesn't reject on HTTP errors. Check response.ok.<br>
6. Headers: Managed using the Headers API.


<h1>The useEffect Hook
</h1>
1. In function-based components, useEffect handles 
side effects like data fetching or event listeners.<br>
2. useEffect runs automatically after every render by 
default.<br>
3. By providing a dependency array, useEffect will only 
run when specified variables change. An empty array 
means the effect runs once.<br>
4. Multiple useEffect hooks can be used in a single 
component for organizing different side effects 
separately<br>


<h1>The useCallback Hook
</h1>

1. Memoization: Preserves function across 
renders to prevent unnecessary re-renders.<br>
2. Optimization: Enhances performance in 
components with frequent updates.<br>
3. Dependency Array: Recreates the function
only when specific dependencies change.<br>
4. Event Handlers: Used to keep consistent 
function references for child components.<br>
5. With useEffect: Prevents infinite loops by 
maintaining function references.<br>



<h1>The useMemo Hook
</h1>
1. Memoization: useMemo caches the result of 
expensive calculations to enhance performance.<br>
2. Re-computation: Only re-computes the memoized
value when specific dependencies change.<br>
3. Optimization: Helps prevent unnecessary 
recalculations, improving component rendering 
efficiency.<br>
4. Dependency Array: Uses an array of 
dependencies to determine when to recompute 
the cached value.<br>
5. Comparison with useCallback: While useCallback
memoizes functions, useMemo memoizes values 
or results of functions.<br>
6. Best Use: Ideal for intensive computations or 
operations that shouldn't run on every render<br>



<h1>Custom Hooks</h1>
1. Reusable Logic: Custom hooks allow you to 
extract and reuse component logic across multiple 
components.<br>
2. Naming Convention: Typically start with "use" 
(e.g., useWindowSize, useFetch).<br>
3. Combining Hooks: Custom hooks can combine 
multiple built-in hooks like useState, useEffect, 
and others.<br>
4. Sharing State: Enables sharing of stateful logic 
without changing component hierarchy.<br>
5. Isolation: Helps in isolating complex logic, making 
components cleaner and easier to maintain.<br>
6. Custom Return Values: Can return any value 
(arrays, objects, or any other data type) based on 
requirements<br>


<h1>React Router</h1>
1. Installation: Use npm install react-router-dom.<br>
2. We are going to use the latest version which is 6+ <br>
3. RouterProvider: Wraps the app for routing 
capabilities.<br>
4. createBrowserRouter: helps creating the mapping 
for router provider.<br>
5. Declarative Routing: Easily define application 
routes.<br>
6. Routes are React components<br>


<h1>Data fetching using loader
</h1>
1. Loader method can be used to load 
data before a particular route is 
executed.<br>
2. The loader method must return the 
data that is loaded or promise. <br>
3. Data is available in component and all 
the child components.<br>
4. useLoaderData hook can be used to 
get the fetched data.<br>
5. Loading state can also be used.<br>

<h1>Submitting data using action</h1>
1. Action method can be used to perform an 
action on submission of Forms.<br>
2. Custom Form component need to be used
along with name attribute for all inputs.<br>
3. Action function will get an data object. To 
generate correct request object 
method=“post” attribute should be used.<br>
4. Data.request.formData() method can be 
used to get form data Object.<br>
5. Object.fromEntries(formData) can be used 
to get actual input data.<br>
6. redirect() response can be returned for 
navigation after submission.<br>

<h1>What is Redux
</h1>
1. State management for cross component or app-wide state.<br>
2. Redux is a predictable state management library for JavaScript apps.<br>
3. Local State vs Cross-component state vs App-Wide state<br>
4. useState or useReducer vs useState with prop drilling vs useState or 
useContext or Redux<br>

<h1>React-Context vs Redux
</h1>
1. You can use both.<br>
2. Setup and Coding is tough especially if you have multiple context 
providers.<br>
3. Performance is slow. Context should only be used for things that rarely 
change. On the other hand Redux has great performance.<br>
4. If these things don’t matter to you then you can choose not to use redux 
and stay with React-Context<br>


<h1> How Redux Works
</h1>
1. Single Source: Uses a single central store to 
maintain the entire application's state.<br>
2. Actions: Components never directly change the 
store. Changes to state are made through 
dispatched actions, which describe events.<br>
3. Reducers: Actions are processed by reducers, 
pure functions that return the new state.<br>
4. Immutable: State is immutable; every change 
results in a new state object. <br>
5. This is different from useReducer hook.<br>


<h1>Working with Redux
</h1>
1. npm init –y<br>
2. npm install redux<br>
3. import in node Const redux = require(‘redux’);<br>
4. We need to setup all 4 basic things:<br>
1. Reducer<br>
2. Store<br>
3. Subscriber<br>
4. Actions<br>
5. Node redux-demo.js command to run node server<br>


