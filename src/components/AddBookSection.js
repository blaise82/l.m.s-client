import React from 'react';
import dotenv from 'dotenv';
import Aux from '../hoc/Auxilliary';
import Toolbar from '../views/Navigation/ToolBar/ToolBar';
import AddBookSectionView from '../views/AddBookSectionView';
import getUserData from '../utils/jwtHandler';


dotenv.config();
const addBookSection = (props) => {
    const token = localStorage.getItem('token');
    const { email, isAdmin } = getUserData(token);
    return !isAdmin? 
     (<h1>Here we go with the dashboard for borrowers!</h1>)
    :(
        <Aux>
        <Toolbar adminEmail= {email}/>
      <main>
         <AddBookSectionView token={token}/>
      </main>
      </Aux>
    );
}

export default addBookSection;
