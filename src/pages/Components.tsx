import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { CodeExample } from "../components/CodeExample";
import { TfiPencilAlt } from "react-icons/tfi";

export const Components: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-neutral-900 text-white min-h-screen items-center flex flex-col py-20">
        <section className="max-w-full md:max-w-4xl flex justify-center flex-col items-center gap-7 p-10 md:p-0">
          <h1 className="font-bold text-2xl">馃獎 Componentes 馃獎</h1>
          <div className="flex flex-col items-center">
            <h2 className="font-md font-bold text-purple-500">
              驴Qu茅 son los Componentes?
            </h2>
            <p>
              Los Componentes son funciones que reciben informaci贸n y la
              muestran en pantalla. Usando componentes se pueden construir
              aplicaciones de manera modular, es decir, se puede separar una
              p谩gina web o aplicaci贸n en piezas m谩s peque帽as y manejables. Esto
              hace que sea m谩s f谩cil trabajar en ellas, modificarlas y
              mantenerlas en el tiempo.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <h2 className="font-md font-bold text-purple-500">
              Ventajas de usar Componentes:
            </h2>
            <ul className="list-disc">
              <li>
                <span className="font-semibold underline ">
                  Reutilizaci贸n de c贸digo:
                </span>
                &nbsp; Los componentes son bloques de construcci贸n que pueden
                ser reutilizados en diferentes partes de una aplicaci贸n, lo que
                ayuda a ahorrar tiempo y esfuerzo al evitar la necesidad de
                escribir el mismo c贸digo una y otra vez.
              </li>
              <li>
                <span className="font-semibold underline">Modularidad: </span>
                &nbsp; Los componentes permiten dividir una aplicaci贸n en partes
                m谩s peque帽as y manejables. Cada componente tiene su propia
                l贸gica y puede ser desarrollado y probado de manera
                independiente, lo que facilita la identificaci贸n y soluci贸n de
                errores.
              </li>
              <li>
                <span className="font-semibold underline">
                  Facilidad de mantenimiento:
                </span>
                &nbsp; Los componentes separados permiten una mayor facilidad de
                mantenimiento, ya que un cambio en un componente no afectar谩 a
                otros. Esto hace que sea m谩s f谩cil mantener y actualizar una
                aplicaci贸n en el tiempo.
              </li>
              <li>
                <span className="font-semibold underline">
                  Desarrollo m谩s r谩pido:
                </span>
                &nbsp; Los componentes son f谩ciles de entender y de desarrollar,
                lo que puede acelerar el proceso de desarrollo en una
                aplicaci贸n.
              </li>
              <li>
                <span className="font-semibold underline">
                  Reutilizaci贸n de dise帽o:
                </span>
                &nbsp; Los componentes pueden ser dise帽ados y estilizados una
                vez, y luego reutilizados en diferentes partes de una
                aplicaci贸n. Esto permite mantener una consistencia en el dise帽o
                y en la interfaz de usuario de la aplicaci贸n en general. En
                resumen, utilizar componentes en React permite desarrollar
                aplicaciones de manera modular, reutilizable y mantenible, lo
                que puede acelerar el proceso de desarrollo y mejorar la calidad
                de la aplicaci贸n.
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
