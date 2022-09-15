import { useState, useEffect} from 'react';
import Preloader from './components/preloader';
import './App.css';
import User from './components/user';

function App() {
  const [data, setData] = useState([])
  const [id, setId] = useState(null)
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  useEffect(() => {
    if (id) {
      setLoading(true)
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
    }
  }, [id])

  const getId = (id) => {
    setId(id)

  }
  
  return (
    <div className="App">
      <ul className='users'>
        {data.map(el => <li className={id === el.id ? 'active' : null} key={el.id} onClick={() => getId(el.id)}>
          <p>{el.name}</p>
        </li>
      )}
      </ul>
      <div className="App__wrap">
        {loading && <Preloader/>}
        {Boolean(Object.keys(user).length) && <User {...user}/>}
      </div>
    </div>
  );
}

export default App;
