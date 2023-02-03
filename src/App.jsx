import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  const localPaciente = JSON.parse(localStorage.getItem("pacientes")) ?? []
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //solo una vez se ejecuta cuando viene vacio pueden agregar varios efects y como se agregan asi aparece el orden
  useEffect(() => {
    console.log("1")
    const obtenerLS = () => {
          setPacientes(localPaciente)
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    console.log("2")
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
