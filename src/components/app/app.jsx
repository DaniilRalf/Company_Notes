import Info from '../info/info';
import Search from '../search/search';
import Filter from '../filter/filter';
import EmployeesList from '../employers-list/employers-list';

import './app.css';


function App(){
    return(
        <div className="app">
            <Info />
            <div className="search-penel">
                <Search />
                <Filter />
            </div>
            <EmployeesList />
        </div>
    );
}
export default App;