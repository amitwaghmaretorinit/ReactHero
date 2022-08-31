


   <img  align="center"
  width="100%" height="520" alt="Screenshot 2022-08-31 at 9 49 34 PM" src="https://user-images.githubusercontent.com/79451605/187729529-978a6325-d679-4d91-aca7-acef7cd3e72d.png">
 
<!--   -->
<br/>
## Installation

### Globally install react-boss

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
