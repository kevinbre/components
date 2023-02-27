import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { CodeExample } from "../components/CodeExample";

export const Info: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-slate-800 text-white min-h-screen items-center flex flex-col py-20">
        <section className="max-w-full md:max-w-4xl flex justify-center flex-col items-center gap-7 p-10 md:p-0">
          <h1 className="font-bold text-2xl">Componentes</h1>
          <div className="flex flex-col items-center">
            <h2 className="font-md font-bold">¿Qué son los Componentes?</h2>
            <p>
              Los Componentes son funciones que reciben información y la
              muestran en pantalla. Usando componentes se pueden construir
              aplicaciones de manera modular, es decir, se puede separar una
              página web o aplicación en piezas más pequeñas y manejables. Esto
              hace que sea más fácil trabajar en ellas, modificarlas y
              mantenerlas en el tiempo.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-md font-bold">Ventajas de usar Componentes:</h2>
            <ul className="list-disc">
              <li>
                <span className="font-semibold underline">
                  Reutilización de código:
                </span>
                &nbsp; Los componentes son bloques de construcción que pueden
                ser reutilizados en diferentes partes de una aplicación, lo que
                ayuda a ahorrar tiempo y esfuerzo al evitar la necesidad de
                escribir el mismo código una y otra vez.
              </li>
              <li>
                <span className="font-semibold underline">Modularidad: </span>
                &nbsp; Los componentes permiten dividir una aplicación en partes
                más pequeñas y manejables. Cada componente tiene su propia
                lógica y puede ser desarrollado y probado de manera
                independiente, lo que facilita la identificación y solución de
                errores.
              </li>
              <li>
                <span className="font-semibold underline">
                  Facilidad de mantenimiento:
                </span>
                &nbsp; Los componentes separados permiten una mayor facilidad de
                mantenimiento, ya que un cambio en un componente no afectará a
                otros. Esto hace que sea más fácil mantener y actualizar una
                aplicación en el tiempo.
              </li>
              <li>
                <span className="font-semibold underline">
                  Desarrollo más rápido:
                </span>
                &nbsp; Los componentes son fáciles de entender y de desarrollar,
                lo que puede acelerar el proceso de desarrollo en una
                aplicación.
              </li>
              <li>
                <span className="font-semibold underline">
                  Reutilización de diseño:
                </span>
                &nbsp; Los componentes pueden ser diseñados y estilizados una
                vez, y luego reutilizados en diferentes partes de una
                aplicación. Esto permite mantener una consistencia en el diseño
                y en la interfaz de usuario de la aplicación en general. En
                resumen, utilizar componentes en React permite desarrollar
                aplicaciones de manera modular, reutilizable y mantenible, lo
                que puede acelerar el proceso de desarrollo y mejorar la calidad
                de la aplicación.
              </li>
            </ul>
          </div>
          <CodeExample />

          <Button onClick={() => navigate("/ejemplo")}>Ver ejemplo</Button>
        </section>
      </div>
    </>
  );
};
