# Canathus
Custom form hook for React

Documentation: https://oflint-1.github.io/canathus/

# Getting Started
A guide to getting started with using canathus in your projects. 

## --Installation--

Canathus can be installed into your react application with one command:
```sh
npm install canathus
```

## --Basic Example--

This is a small example usage, to get up and running with canathus
```tsx
import { useInput, validate } from "canathus";

export function App() {
    // Setup input with validator
    const [title, setTitle] = useInput<string>("", (value) => {
        const valid = value.length > 0;
        return {
            valid,
            errorMsg: valid ? "" : "This field is required",
        };
    });

    const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate fields
    console.log(validate({ title }));
    };

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input
            value={title.value}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title"
        />
        <button>submit</button>
    </form>
    );
}
```

## --Creating Input Data--

In canathus, you use the useInput hook to create input data. It takes two arguments, a default value and then a validator function. The validator function is run whenever you validate your input.
```tsx
const [data, setData] = useInput("test", validator);
```

Here, we are setting the default value as "test", and setting a validator function.

## --Custom Validators--

Canathus is built to use custom validation for input data. The validator should return an object containing whether the current value is valid, and what the error message is.

Below is an example validator, which checks the length of a string:
```tsx
const validator = (value) => {
    const valid = value.length > 0;
    
    return {
        valid,
        errorMsg: valid ? "" : "This field is required",
    };
};
```


## --Recommended Workflow--

For readability purposes, it is recommended to store your validator functions in a separate directory called validators. These can then be imported into your react component containing the form.

First we can create our validator:
```tsx
/* validators/lengthValidator.ts */
export const lengthValidator = (value: string) => {
    const valid = value.length > 0;
    
    return {
        valid,
        errorMsg: valid ? "" : "This field is required",
    };
};
```

Now we can use this within our form: 
```tsx
/* App.ts */
import { useInput, validate } from "canathus";
import { lengthValidator } from "./validators/lengthValidator.js"

export function App() {
    // Setup input with validator
    const [title, setTitle] = useInput<string>("", lengthValidator);

    const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate fields
    console.log(validate({ title }));
    };

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input
            value={title.value}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title"
        />
        <button>submit</button>
    </form>
    );
}
```