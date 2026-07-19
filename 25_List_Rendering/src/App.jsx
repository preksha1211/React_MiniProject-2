import UserCard from "./UserCard";


function App() {

   const arr = ["manas" , "muskan" ,"mahek"];
    
   const users =[
               {id : 1 , name : "mahek", age:12},
               {id : 2 , name : "muskan",age:92},
               {id : 3 , name : "manas",age:22}
   ]
   
   const data = [
    ['react' , 'java' , 'c++'],
    ['preksha' , 'kujau' , 'natata']
   ]

  return (
    <> 
       
      {/* Normal Array */} 
      {arr.map((item)=>{
        return <h1 key={item}>{item}</h1>
      })}

      {/*  Array of objects */} 
      {users.map((user)=>{
        console.log(user);
        return (
          <div>
            <p>{user.id}</p>
            <h1>{user.name}</h1>
          </div>
        )
      })}

      {/*  Array of arrays */} 
      {data.map((item, index) => {
        return (
          <div key={index}>
            {item.map((nestedItem, nestedIndex) => {
              return (
                <h1 key={nestedIndex}>{nestedItem}</h1>
              );
            })}
          </div>
        );
      })}
       
      
        {/*  components rendering */} 
      {users.map((user)=>{
        return(
         user.age >18 && <UserCard key={user.id} userDetails={user}/>
        )
      })}
    </>
  )
}

export default App
