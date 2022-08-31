
<img 
align="left"
  width="480" height="520"
 alt="Screenshot 2022-08-31 at 9 43 31 PM" src="https://user-images.githubusercontent.com/79451605/187727581-25bade2b-8c95-421f-858c-13b73c3f1fee.png"> 
  ___


  <p>
    <h4>
      Expert teams of digital product strategists, developers, and designers.
    </h4>
  </p>

   

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

```json
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
   
  ``` 

**Creating a component:** `react-boss component`

  
# Projects using it

- [React Template](https://github.com/amitwaghmaretorinit/react_template)
