import Busca from "../../components/busca/busca.jsx";
import Menu from "../../components/menu/menu.jsx";

function Page_Atividades() {
    return <>
        <div>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        <Menu page="atividades" />
                    </div>

                    <div className="col py-3 me-3">
                        <div className="mb-5">
                            <Busca texto="Busca por Negócios" />
                        </div>

                        <div className="d-flex justify-content-between">
                            <h2 style={{ color: 'black' }}>Atividades...</h2>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </>
}

export default Page_Atividades;