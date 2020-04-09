const isState={
    message:'',
    signal:false,
    
   }

   const JsonLoginData={
    username:"hruday@gmail.com",
    password :'hruday123'
   }

const reducer1 =(state=isState,action)=>{
    console.log(action);
    if(action.type === 'LOGIN'){
        if(action.data.user === JsonLoginData.username && action.data.pass === JsonLoginData.password){
            return {
                message:'Successful Login',
                signal:true,
                user:[{
                    "id":1,
                    "name":"test1",
                    "age" : "11",
                    "gender":"male",
                    "email" : "test1@gmail.com",
                    "phoneNo" : "9415346313"
                    },
                    {
                    "id" : 2,
                    "name":"test2",
                    "age" : "12",
                    "gender":"male",
                    "email" : "test2@gmail.com",
                    "phoneNo" : "9415346314"
                    },
                    {
                    "id":3,
                    "name":"test3",
                    "age" : "13",
                    "gender":"male",
                    "email" : "test3@gmail.com",
                    "phoneNo" : "9415346315"
                    },
                    {
                    "id":4,
                    "name":"test4",
                    "age" : "14",
                    "gender":"male",
                    "email" : "test4@gmail.com",
                    "phoneNo" : "9415346316"
                    },
                    {
                    "id":5,
                    "name":"test5",
                    "age" : "15",
                    "gender":"male",
                    "email" : "test5@gmail.com",
                    "phoneNo" : "9415346317"
                    },
                    {
                    "id":6,
                    "name":"test6",
                    "age" : "16",
                    "gender":"male",
                    "email" : "test6@gmail.com",
                    "phoneNo" : "9415346318"
                    }
                   ]
            };
        }
        return {
            message:'Invalid User ID', 
            signal:false 
        };
       
    }
    if(action.type === 'MISSING'){
        if(action.data.user === ''){
            return {
                message:'Please Give User Name',
                signal:false
            };
        }else{

        
        return {
            message:'Please Give password', 
            signal:false 
        };
    }
       
    }
    return state;
}

export default reducer1;