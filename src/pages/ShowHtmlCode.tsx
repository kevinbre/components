import { useNavigate } from "react-router-dom";
import { Button, CodeExample } from "../components";

export const ShowHtmlCode: React.FC = () => {
  const navigate = useNavigate();
  const listSpanClass = "font-semibold underline";

  return (
    <div className="bg-neutral-900 text-white min-h-screen items-center flex flex-col py-20">
      <section className="max-w-full md:max-w-4xl flex justify-center flex-col items-center gap-7 p-10 md:p-0 ">
        <h1 className="font-bold text-2xl">🗿 HTML 🗿</h1>
        <div className="flex flex-col items-center">
          <h2 className="font-md font-bold text-purple-500">¿Qué es HTML?</h2>
          <p>
            HTML es utilizado para describir la estructura y el contenido de una
            página web. A través del uso de etiquetas HTML, se pueden definir
            elementos como encabezados, párrafos, listas, imágenes, enlaces,
            formularios y otros elementos que se utilizan para crear el
            contenido de la página web.
          </p>
        </div>
        <div className="flex flex-col items-center p-4">
          <h2 className="font-md font-bold text-purple-500">
            Desventajas de HTML:
          </h2>
          <ul className="list-disc">
            <li>
              <span className={`${listSpanClass}`}>
                Dificultad para mantener la coherencia visual:
              </span>
              &nbsp; Cuando se utilizan solo HTML y CSS, mantener la coherencia
              visual en un sitio web puede ser un desafío. Dado que los estilos
              se definen en diferentes lugares y las estructuras HTML pueden
              variar, puede resultar difícil lograr una apariencia visual
              coherente en todo el sitio.
            </li>
            <li>
              <span className={`${listSpanClass}`}>
                Dificultad para mantener y actualizar el código:{" "}
              </span>
              &nbsp; Con HTML puro, cada página web puede ser vista como un
              documento independiente, lo que significa que si se desea
              actualizar un elemento común en todas las páginas, será necesario
              modificar manualmente cada página. Esto puede resultar tedioso y
              propenso a errores.
            </li>
            <li>
              <span className={`${listSpanClass}`}>
                Falta de modularidad y reutilización de código:
              </span>
              &nbsp; Sin el uso de componentes, puede ser difícil reutilizar el
              código en todo el sitio web. Si un elemento común necesita ser
              utilizado en diferentes partes del sitio, es posible que se tenga
              que copiar y pegar el código en cada lugar, lo que puede resultar
              en una base de código extensa y difícil de mantener.
            </li>
            <li>
              <span className={`${listSpanClass}`}>
                Dificultad para implementar la interactividad:
              </span>
              &nbsp; HTML puro no tiene la capacidad de implementar
              interactividad dinámica, lo que significa que se necesita
              JavaScript para agregar efectos y comportamientos interactivos a
              los elementos HTML. Esto puede resultar en una complejidad
              adicional en el desarrollo y en una base de código más grande.
            </li>
          </ul>
        </div>
        <CodeExample show="HTML" />
        <Button onClick={() => navigate("/components")}>Componentes</Button>
      </section>
    </div>
  );
};
