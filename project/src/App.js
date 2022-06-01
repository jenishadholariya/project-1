
import './App.css';
import Demo from './component/Demo';

function App() {
  let data=[
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];
  
  let fdata=data.filter((d,i)=>d.status===true && d.salary>=10000);

  let ans=fdata.reduce((acc,d,i)=>acc+d.salary+d.bonus,0)

  console.log(ans);
  return (
    <div>
      <table border="1">
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Bonus</th>
        <th>Status</th>
        <th>Total</th>
        <th>Main-Total</th>

        {
          fdata.map((d,i) => {

            let {name,age,salary,bonus,status}=d;
              return(
              <tr>
              <td>{name}</td>
              <td>{age}</td>
              <td>{salary}</td>
              <td>{bonus}</td>
              <td>{status.toString()}</td>
              <td>{d.salary+d.bonus}</td>
              <td>{ans}</td>
            </tr>
            )
          })
        }
      </table>
    </div>
  );
}


export default App;
