const getFacts = () => {
    return fetch('http://catfacts.cloud/facts')
    .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch facts");
      }
      return response.json()
     })
  }

  const getFactByID = (id) => {
    return fetch('http://catfacts.cloud/facts/'+id)
    .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch fact");
      }
      return response.json()
     })
  }

export const postFact = (dataIn) => {
    //console.log(dataIn)
    fetch('http://catfacts.cloud/facts', {
        method: 'POST',
        body: JSON.stringify(dataIn),
        headers: {"Content-Type": "application/json"}
        
        }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));

};

export const deleteFact=(id)=>{
    
    return fetch('http://catfacts.cloud/facts/'+id, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        },
        
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      
    
}
  
export default getFacts;