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
