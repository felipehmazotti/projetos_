// importação do componente busca
import "./busca.css";
// fim da importação do componente busca

// função do componete busca
function Busca(props){
    return <div className="input-group">
        <input type="text" className="form-control busca" placeholder={props.texto} />
        <button className="btn btn-primary" type="button" id="button-addon2">Buscar</button>
    </div>
}
// fim da função do componente busca

// exportação do componente busca
export default Busca;