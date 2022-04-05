import './employers-add.css'

const EmployersAdd = () => {
    return(
        <div className="employers-add">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form">
                <input type="text"
                    className="form-control"
                    placeholder="Как его зовут?" />
                <input type="number"
                    className="form-control"
                    placeholder="З/П в $?" />

                <button type="submit"
                        className="btn add-btn">Добавить</button>
            </form>
        </div>
    );
}
export default EmployersAdd;