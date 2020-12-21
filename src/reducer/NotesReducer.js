
export  const initstate=[
    {id:1,title:"abcd",content:"efgh"}
  
]





export const reducer=(state,{type,payload})=>{
    switch (type) {
        case "ADD":
                        
                    return [...state,{id:Math.random(),  title:payload.title,content:payload.description}]
            
            case "REMOVE":
                    return   state.filter((note)=>{ return payload != note.id })
            case "UPDATE":
                  return  state.map(record=>{
                        if(payload.id === record.id)
                        {
                            return payload
                        }
                        else{
                            return record
                        }

                  })

                  
                    
        default:
            return state;
            
    }
    
}



