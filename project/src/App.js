
import './App.css';
import Demo from './component/Demo';

function App() {
  
  // let arr=[10,20,30,40,50];

  // let arr2=[...arr];  
  // console.log(arr2);

  // let arr3=[99,...arr,100];
  // console.log(arr3);

  // let [a,b,c,d,e]=arr;
  // console.log(e);

  let obj={
    id:'101',
    name:'jenisha'
  };

  let obj2={...obj};
  console.log(obj);

  let obj3={
    ...obj,
    id:"102",
    name:"jeni",
    location:"surat",
    
  };
  console.log(obj3);

  let [id,name,location]=obj3;
  console.log(id);

  return (
    <div>

    </div>
  );
}

export default App;
