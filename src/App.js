import Header from './components/Header'
import AddItem from './components/AddItem'
import Items from './components/Items'
import { useState, useEffect } from 'react'


function App() {

  const [showAddButton, setShowAddButton] = useState(false)

  const [itemsArr, setItems] = useState([])

  useEffect(() => {
      const getItems = async () => {

      const itemsFromBackEnd = await fetchItems()
      setItems(itemsFromBackEnd)
    }

    getItems()
  }, [])

  const fetchItems = async () => {
    const response = await fetch('http://localhost:8080/api/all');
    const data = await response.json()

    console.log('Data from BACKEND')
    console.log(data)
    return data
  }

  const fetchItem = async (id) => {
    const response = await fetch(`http://localhost:8080/api/${id}`)
    const data = await response.json()

    return data
  }


  return (
    
    <div className="App">
      <div className='container'>
        <div className='left-container'>
        <Header title='Adding items' 
          toggleAddForm={() => {
            setShowAddButton(!showAddButton)
          }} 
          showAddButton={showAddButton}/>

        { showAddButton ? <AddItem/> : ''}

        </div>

        <div className='right-container'>
          <Items items={itemsArr}/>
        </div>

      </div>
    </div>
  );
        
}

export default App;
