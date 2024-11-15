## step1

1. lets create the Header component and Body component.
2. create the button tag in the header component.
3. add the toggle functionality to show the filters in filter component.

## step2

1. lets create the context api in the utils and constants file.
2. lets make the api call using the useEffect() and store the object in the statevariable. these all things should happened in the custom hook named as the useFetch() which takes url as as input and return the data, error and loading under the hooks folder.
3. add the url in the constants.js and return it.

## step3

1. added the css

## step4

1. created the MainCard components and Subcard components.
2. add default values to the select.
3. Rename the contextAPI as the filterContext which contains grouping value and ordering value.
4. Add the useRef() in the filters.js and get teh value of the selected filter.
5. to get the value from the filter and want to pass that as the value to the context and that value wil be used by the Body by providing that to the app.js
6. App.js is wrapped with the component which is function provider and that component takes the content in between that as the children. that children will be again returned by the component with the context provider values. filtercontext values will be filtervalues, setfiltervalues function. when we want the context values/ or update them then we will use the both filtervalues and setfiltervalues. I extracted the setFiltervalues in the filters.js file using the object destrcuting.

## step5

1. created the basic subCard.js
