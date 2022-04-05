import Info from '../info/info';
import Search from '../search/search';
import Filter from '../filter/filter';
import EmployeesList from '../employers-list/employers-list';
import EmployersAdd from '../employers-add/employers-add';
import './app.css';


const data = [
    {name: "Ralf Style", price: 300, increase: false, id: 1},
    {name: "Ralf Style", price: 300, increase: false, id: 2},
    {name: "Ralf Style", price: 300, increase: true, id: 3},
    {name: "Ralf Style", price: 300, increase: false, id: 4},
    {name: "Ralf Style", price: 300, increase: false, id: 5},
];


function App(){
    return(
        <div className="app">
            <Info />
            <div className="search-penel">
                <Search />
                <Filter />
            </div>
            <EmployeesList data={data} />
            <EmployersAdd />
        </div>
    );
}
export default App;