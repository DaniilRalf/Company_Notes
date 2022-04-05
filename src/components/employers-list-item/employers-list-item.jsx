import './employers-list-item.css';

const EmployeesListItem = (props) => {

    let className = "list-group-item-name";
    if (props.increase === true){
        className = className + " premium"
    }

    return (
        <li className={"list-group-item"}>
            <span className={className}><b>{props.name}</b></span>
            <input type="text" className="list-group-item-input" defaultValue={props.price + "$"}/>
            <div className='list-group-item-btn'>
                <button type="button"
                    className="btn-cookie ">
                    <span className="">ПРЕМИЯ</span>
                </button>

                <button type="button"
                        className="btn-cookie">
                    <span className="">УДАЛИТЬ</span>
                </button>

            </div>
        </li>
    )
}

export default EmployeesListItem;