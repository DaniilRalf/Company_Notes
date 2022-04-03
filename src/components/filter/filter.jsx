import './filter.css';

const Filter = () =>{
    return(
        <div className="group-btn">
            <button 
                className="btn btn-active"
                type='button'>
                Все сотрудники
            </button>
            <button 
                className="btn btn-noactive"
                type='button'>
                На повышение
            </button>
            <button 
                className="btn btn-noactive"
                type='button'>
                Зарплата выше 1000$
            </button>
        </div>
    );
}
export default Filter;