import {byId} from '../categories.js'

const mocAction ={
  type:"ADD_CATEGORY",
  title:"Category One",
  id:"123"
};

const mocAction2 ={
  type:"ADD_CATEGORY",
  title:"Category Two",
  id:"234"
};

//const e = {undefined: {"title": "Run the test", "todos":[]}}

it("should return an empty Object", () =>{
  expect(byId(undefined, {type:"undefined"})).toEqual(
    {}
  );
})


it("should return initial state of correct output", () =>{
  expect(byId(undefined, mocAction)).toEqual(
    {["123"]:{
      title:"Category One",
      todos:[]
    }}
  );
})

const prevState = {["123"]:{
      title:"Category One",
      todos:[]
    }}

it("should take the prev State and add new category", () =>{
  expect(byId(prevState, mocAction2)).toEqual(
    {["123"]:{
      title:"Category One",
      todos:[]
    },
    ["234"]:{
      title:"Category Two",
      todos:[]}
    }
  );
})


