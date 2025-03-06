import { useState, createContext, useContext, useReducer, useRef, useCallback, useMemo } from "react";
 import AppHeader from "./AppHeader";
import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
  import Placeholder from 'react-bootstrap/Placeholder';

import React from 'react'; import { useEffect } from 'react';


const ReactConcepts = () => {

    return (<>      <AppHeader />      <UseContextExp />      <UseReducerExp />      <UseEffectExp />      <UseMemoExp />      <UseCallbackExp />      <UseRefExp />      <CustomHook />
    </>);
};
/******  useReducer  *******/const initialTodos = [{ id: 1, title: "Todo 1", complete: false, }, { id: 2, title: "Todo 2", complete: false, },]; const reducer = (state, action) => { switch (action.type) { case "COMPLETE": return state.map((todo) => { if (todo.id === action.id) { return { ...todo, complete: !todo.complete }; } else { return todo; } }); default: return state; } };
function UseReducerExp() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const handleComplete = (todo) => { dispatch({ type: "COMPLETE", id: todo.id }); };
    return (<>
        <div className="reactConceptChip">        <Card style={{ width: '18rem' }}>          <Card.Body>            <Card.Title>useReducer</Card.Title>            <Card.Text>The useReducer Hook is similar to the useState Hook.              It allows for custom state logic.              If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</Card.Text>            <Card>              {todos.map((todo) => (<div key={todo.id}>                  <label>                    <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)} />                    {todo.title}                  </label>                </div>))}            </Card>          </Card.Body>        </Card>      </div>

    </>);
}
/******  useContext  *******/const UserContext = createContext(); const UseContextExp = () => {
    const [user, setUser] = useState("RSN"); return (<>      <div className="reactConceptChip">        <Card style={{ width: '18rem' }}>          <Card.Body>            <Card.Title>useContext</Card.Title>            <Card.Text>              React Context is a way to manage state globally.              It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.            </Card.Text>            <Card>              <UserContext.Provider value={user}>                <input type="text" placeholder="Enter something" value={user} onChange={(e) => setUser(e.target.value)} />                <p>Hello<b>&nbsp;{user}&nbsp;</b>From Parent Component!</p>                <Component1 />              </UserContext.Provider>            </Card>          </Card.Body>        </Card>      </div>
    </>);
}; const Component1 = () => { return (<>      <div className="roundedCorners component1">        Component 1        <Component2 />      </div>    </>); }; const Component2 = () => { return (<>      <div className="roundedCorners component2">        Component 2        <Component3 />      </div>    </>); }; const Component3 = () => { const user = useContext(UserContext); return (<>      <div className="roundedCorners component3">        Hello <b>{user}</b> from Component 3, WIthout passing in Componet 2      </div>    </>); };

/*********useEffect  *********/const UseEffectExp = () => {
    const [count, setCount] = useState(0);
    useEffect(() => { setTimeout(() => { setCount((count) => count + 1); }, 1000); }, []); // <- add empty brackets here
    return (<>      <div className="reactConceptChip">        <Card style={{ width: '18rem' }}>          <Card.Body>            <Card.Title>useEffect</Card.Title>            <Card.Text>              The useEffect Hook allows you to perform side effects in your components.<br />              Side effects like: fetching data, directly updating the DOM, and timers.<br />              useEffect accepts two arguments. The second argument is optional. <br /><br />              {'useEffect(<function>, <dependency>)'}            </Card.Text>            <Card>              <p>I've rendered {count} times</p>;            </Card>          </Card.Body>        </Card>      </div>
    </>);
};
/*********useRef  *********/const UseRefExp = () => {
    const [inputValue, setInputValue] = useState(""); const count = useRef(0);
    useEffect(() => { count.current = count.current + 1; }); return (<>      <div className="reactConceptChip">        <Card style={{ width: '18rem' }}>          <Card.Body>            <Card.Title>useRef</Card.Title>            <Card.Text>              The useRef Hook allows you to persist values between renders.              It can be used to store a mutable value that does not cause a re-render when updated.              It can be used to access a DOM element directly. like:<br />              If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.              <br />              useRef() only returns one item. It returns an Object called current.              When we initialize useRef we set the initial value: useRef(0).              It's like doing this: {'const count = {current: 0}'}. We can access the count by using count.current.            </Card.Text>            <Card>              <input type="text" placeholder="Enter something" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />              <p>Render Count: {count.current}</p>            </Card>          </Card.Body>        </Card>      </div>
    </>);
};
/*********useCallback  *********/const funcSet = new Set(); const UseCallbackExp = () => {
    const [cnt, setCnt] = useState(0);
    const [num, setNum] = useState(0);
    // const incCnt = () => setCnt(cnt + 1);    
    // const decCnt = () => setCnt(cnt - 1);    
    // const incNum = () => setNum(num + 1); 
    const incCnt = useCallback(() => setCnt(cnt + 1), [cnt]);
    const decCnt = useCallback(() => setCnt(cnt - 1), [cnt]);
    const incNum = useCallback(() => setNum(num + 1), [num]);
    funcSet.add(incCnt); funcSet.add(decCnt); funcSet.add(incNum); alert('Exp- useCallback funcSet size: ' + funcSet.size);

    return (<>      <div className="reactConceptChip">        <Card style={{ width: '18rem' }}>          <Card.Body>            <Card.Title>useCallback</Card.Title>            <Card.Text>            The React useCallback Hook returns a memoized callback function.<br />Think of memoization as caching a value so that it does not need to be recalculated.<br />This allows us to isolate resource intensive functions so that they will not automatically run on every render.<br />The useCallback Hook only runs when one of its dependencies update.<br />This can improve performance.<br />The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useMemo in the useMemo chapter.            </Card.Text>            <Card>            <div>                <h2>Without useCallback Hook</h2>                <button onClick={incCnt}>Increase Counter</button>                <button onClick={decCnt}>Decrease Counter</button>                <button onClick={incNum}>Increase Number</button>            </div>            </Card>          </Card.Body>        </Card>      </div>
    </>);
};
/*********useMemo  *********/
const expensiveCalculation = (num) => { console.log("Calculating..."); for (let i = 0; i < 1000000000; i++) { num += 1; } console.log('num==>', num); return num; }; const UseMemoExp = () => {
    const [count, setCount] = useState(0); const [todos, setTodos] = useState([]);  // const calculation = expensiveCalculation(count);  // without useMemo
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const increment = () => { setCount((c) => c + 1); };
     const addTodo = () => { setTodos((t) => [...t, "New Todo"]); };
      return (
      <>
            <div className="reactConceptChip">
                <Card style={{ width: '18rem' }}>
                      <Card.Body>
                            <Card.Title>useMemo</Card.Title> 
                           <Card.Text>            The React useMemo Hook returns a memoized value. <br />            The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.            </Card.Text>            <Card>            <div>              <div>                <h2>My Todos</h2>                {todos.map((todo, index) => { return <p key={index}>{todo}</p>; })}                <button onClick={addTodo}>Add Todo</button>              </div>              <hr />              <div>                Count: {count}                <button onClick={increment}>+</button>                <h2>Expensive Calculation</h2>                {calculation}              </div>            </div>            </Card>          </Card.Body>        </Card>      </div>
    </>);
};
/*********custome hook  *********/const CustomHook = () => {
    return (<>      <div className="reactConceptChip">        <Card style={{ width: '18rem' }}>          <Card.Body>            <Card.Title>CustomHook</Card.Title>            <Card.Text>              Hooks are reusable functions.<br />              When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.<br />              Custom Hooks start with "use". Example: useFetch.              {/* <div dangerouslySetInnerHTML={{                __html: `import { useState, useEffect } from 'react';            </br> const useFetch = (url) => {            </br>   const [data, setData] = useState(null);            </br>   useEffect(() => {            </br>     fetch(url)            </br>      .then((res) => res.json())            </br>      .then((data) => setData(data));            </br>   }, [url]);            </br>   return [data];            </br> };            </br> export default useFetch;`}} /> */}            </Card.Text>            <Card>
    </Card>          </Card.Body>        </Card>      </div>    </>);
};

export default ReactConcepts;