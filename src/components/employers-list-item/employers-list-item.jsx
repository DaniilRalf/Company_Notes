import './employers-list-item.css';

const EmployeesListItem = () => {
    return (
        <li className="list-group-item">
            <span className="list-group-item-name"><b>John Smith</b></span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
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