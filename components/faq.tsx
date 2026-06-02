import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    q: "¿Qué es un Gaussian Splat y por qué se ve tan bien?",
    a: `Un Gaussian Splat es una representación 3D donde la escena se modela como millones de pequeñas elipses gaussianas en lugar de triángulos (como en los videojuegos). Eso permite capturar vidrios, reflejos, translucidez, plantas y telas con un fotorrealismo que los renders poligonales no pueden alcanzar. El resultado es una escena que literalmente parece una foto, pero que se puede recorrer libremente en primera persona.`,
  },
  {
    q: "¿Funciona en mi celular? ¿Y con datos móviles?",
    a: `Funciona en cualquier dispositivo con soporte para WebGL2: iPhone 12 en adelante, Android con Chrome actualizado, y cualquier browser de escritorio moderno. Con datos móviles depende del ancho de banda disponible — la primera carga puede tardar unos segundos más, pero una vez cargado el tour funciona fluidamente porque toda la data está en el cliente.`,
  },
  {
    q: "¿Cuánto pesa cada tour?",
    a: `Depende del tamaño y complejidad de la propiedad. Un departamento típico de 60–90 m² pesa entre 80 MB y 200 MB. Usamos compresión agresiva y streaming progresivo, así que el tour empieza a ser usable antes de que termine la descarga completa. No es algo que vayas a notar en una red razonable.`,
  },
  {
    q: "¿Puedo embeberlo en mi propio sitio o en mi listing de ZonaProp?",
    a: `En tu propio sitio: sí, con un simple iframe. Te damos el código listo para pegar. En ZonaProp y MercadoLibre: el embed en el listing depende de si la plataforma permite iframes externos (actualmente limitado), pero podés poner el link del tour directamente en la descripción o en fotos con QR. También podés linkedear desde Instagram o WhatsApp.`,
  },
  {
    q: "¿En qué se diferencia esto de Matterport?",
    a: `Matterport genera modelos de malla 3D (triángulos) y trabaja con teleportación entre puntos fijos con un mapa de planta. Los Gaussian Splats son mucho más fotorrealistas (especialmente en materiales especulares), el viewer pesa menos, corre en cualquier dispositivo sin app, y el movimiento es libre en primera persona. La contrapartida: todavía no generamos planos técnicos exportables ni mediciones automáticas, que Matterport sí tiene.`,
  },
  {
    q: "¿Cuánto tarda desde la captura hasta tener el link?",
    a: `El proceso completo tarda entre 24 y 48 horas desde la captura. La sesión de captura en la propiedad dura 30–45 minutos para una unidad de 80 m². El entrenamiento del modelo corre en la nube — no hay intervención tuya. Te avisamos por WhatsApp cuando el link está listo.`,
  },
  {
    q: "¿Hacen cobertura fuera de Buenos Aires?",
    a: `Por ahora operamos en el AMBA. Para propiedades en otras provincias o en LATAM, estamos armando acuerdos con operadores locales. Si tenés una propiedad en otro lado, mandanos un mensaje igual — dependiendo del volumen lo podemos coordinar o conectarte con alguien de la red.`,
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
          // preguntas frecuentes
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-10">FAQ.</h2>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
