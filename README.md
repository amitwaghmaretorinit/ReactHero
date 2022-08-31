<img align="left" src="https://github.com/wednesday-solutions/react-floki/blob/master/react_floki_github.svg" width="480" height="520" />

<div>
  <a href="https://www.wednesday.is?utm_source=gthb&utm_medium=repo&utm_campaign=serverless" align="left" style="margin-left: 0;">
    <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f5879492fafecdb3e5b0e75_wednesday_logo.svg">
  </a>
  <p>
    <h1 align="left">React Floki
    </h1>
  </p>

  <p>
A CLI tool that works with the react template and allows you to scaffold  modules, components and stitches them all together preventing wastage of time in setup and boilerplate code.
  </p>

  ___


  <p>
    <h4>
      Expert teams of digital product strategists, developers, and designers.
    </h4>
  </p>

  <div>
    <a href="https://www.wednesday.is/contact-us?utm_source=gthb&utm_medium=repo&utm_campaign=serverless" target="_blank">
      <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f6ae88b9005f9ed382fb2a5_button_get_in_touch.svg" width="121" height="34">
    </a>
    <a href="https://github.com/wednesday-solutions/" target="_blank">
      <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f6ae88bb1958c3253756c39_button_follow_on_github.svg" width="168" height="34">
    </a>
  </div>

  ___
<!--   -->

## Installation

### Globally install react-generate

`npm install -g react-boss`

**OR**

`yarn global add react-boss`
 
## Documentation

### Help

To get a list of commands and usage hints use

```
react-boss --help
```

### Creating a new React Application

```
react-boss init  
```
 
### Generating modules and components

**Creating a container or component:** `react-boss module` 

 - The react-boss module requires a schema like below (schema.json). 
 - The react-boss module will create a CRUD module for you with validations as you defined in the schema.

        ````
        ``
        {
    "crud": {
      "name": {
        "type": "string",
        "label": "Product Name",
        "required": "true",
        "placeholder": "Enter your product name",
        "inputType": "text"
      },
      "price": {
        "type": "number",
        "label": "Price",
        "required": "false",
        "placeholder": "Enter your price",
        "inputType": "number"
      },
      "category": {
        "type": "string",
        "label": "Category",
        "required": "false",
        "placeholder": "Enter your category",
        "inputType": "text"
      },
      "img": {
        "type": "string",
        "label": "Image",
        "required": "false",
        "placeholder": "Enter your img url",
        "inputType": "text"
      }
      
       
    },
    "list": {
      "name": { "width": "40%", "title": "Name" ,"key":"name"},
      "price": { "width": "20%", "title": "price","key":"price" },
      "category": { "width": "40%", "title": "Category","key":"category" },
      "img": { "width": "40%", "title": "Image","key":"img" }
      
    }
  }
  ``
        ````

**Creating a component:** `react-generate gcom`

**Creating a container:** `react-generate gcon`

### Forcefully generating components and containers

**Forcefully creating a container or component:** `react-generate gf`

**Forcefully creating a component:** `react-generate gcomf`

**Forcefully creating a container:** `react-generate gconf`

### Generating tests for all existing components and containers

**Generate test for all components in directory:** `react-generate --all component <path-to-components>`

**Generate test for all containers in directory:** `react-generate --all containers <path-to-containers>`

### Generating a testUtils file with some utility functions for tests

**Generate a test util file:** `react-generate gtutil`

### Generating a utility for a loadable file using React 16 lazy and Suspense

**Generating a utility for a loadable file :** `react-generate gloadable`

# Advanced

## Example Usages

**Creating a test by specifying type, path and name:** `react-generate gt component src/app Button`

**Creating a test for an existing component by specifying path and name:** `react-generate gtcom src/app Button`

**Creating a test for an existing container by specifying path and name:** `react-generate gtcon src/app HomePage`

**Creating a component/container by specifying type, path and name:** `react-generate g component src/app Button`

**Creating a component by specifying path and name:** `react-generate gcom src/app Button`

**Creating a container by specifying path and name:** `react-generate gcon src/app HomePage`

**Generate test for all components in directory:** `react-generate --all component src/app/components`

**Generate test for all containers in directory:** `react-generate --all container src/app/containers`

# Projects using it

- [React Template](https://github.com/wednesday-solutions/react-template)
