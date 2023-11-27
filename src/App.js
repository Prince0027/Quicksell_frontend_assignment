import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/Navbar/Navbar';

import DashView from './components/KanbanBoard/Board';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';


const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return (
    <div style={{paddingTop : "10px"}} >
      <TopNav/>
      <hr style={{marginTop : "10px"}} />
      <DashView/>
    </div>
  )
}

export default App