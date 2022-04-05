import EmployeesListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';




const EmployeesList = ({data}) => {

    const el = data.map(item =>{
        const {id, ...itemProps} = item;
        return(
            // <EmployeesListItem name={item.name} price={item.price} /> аналогичная форма записи, разворачиваем все значения 
            <EmployeesListItem key={id} {...itemProps} />    
        )
    })


    return (
        <ul className="app-list list-group">
            {el}
        </ul>
    )
}

export default EmployeesList;