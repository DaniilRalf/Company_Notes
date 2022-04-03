import './employers-list-item.css';

const EmployeesListItem = () => {
    return (
        <li className="list-group-item">
            <span className="list-group-item-name">John Smith</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
            <div className='list-group-item-btn'>
                <button type="button"
                    className="btn-cookie ">
                    <i className="">П</i>
                </button>

                <button type="button"
                        className="btn-cookie">
                    <i className="">Х</i>
                </button>

            </div>
        </li>
    )
}

export default EmployeesListItem;