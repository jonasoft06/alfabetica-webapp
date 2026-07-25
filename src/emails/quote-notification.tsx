import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type QuoteNotificationEmailProps = {
  tipoPublicacion: string;
  numeroPaginas: string;
  tamano: string;
  ejemplares: string;
  maquetacion: string;
  disenoPortada: string;
  tipoPapel: string;
  cubierta: string;
  tramites: string;
  detalles?: string;
  nombre: string;
  correo: string;
  telefono: string;
  ciudad: string;
};

function Field({ label, value }: { label: string; value: string }) {
  return (
    <Text style={{ fontSize: "14px", color: "#333", margin: "4px 0" }}>
      <strong>{label}:</strong> {value}
    </Text>
  );
}

export default function QuoteNotificationEmail({
  tipoPublicacion,
  numeroPaginas,
  tamano,
  ejemplares,
  maquetacion,
  disenoPortada,
  tipoPapel,
  cubierta,
  tramites,
  detalles,
  nombre,
  correo,
  telefono,
  ciudad,
}: QuoteNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nueva solicitud de cotización de {nombre}</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", padding: "40px 20px" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "32px",
            borderRadius: "8px",
            maxWidth: "560px",
          }}
        >
          <Heading style={{ fontSize: "20px", color: "#0095A5" }}>
            Nueva solicitud de cotización
          </Heading>

          <Section>
            <Field label="Nombre/Empresa" value={nombre} />
            <Field label="Correo" value={correo} />
            <Field label="Teléfono" value={telefono} />
            <Field label="Ciudad" value={ciudad} />
          </Section>

          <Hr />

          <Section>
            <Field label="1. Tipo de publicación" value={tipoPublicacion} />
            <Field label="2. Número de páginas estimadas" value={numeroPaginas} />
            <Field label="3. Tamaño del libro" value={tamano} />
            <Field label="4. Número de ejemplares" value={ejemplares} />
            <Field label="5. Maquetación" value={maquetacion} />
            <Field label="6. Diseño de portada" value={disenoPortada} />
            <Field label="7. Tipo de papel" value={tipoPapel} />
            <Field label="8. Tipo de cubierta" value={cubierta} />
            <Field label="9. Trámites" value={tramites} />
          </Section>

          {detalles && (
            <>
              <Hr />
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "bold" }}>
                10. Detalles adicionales:
              </Text>
              <Text style={{ fontSize: "14px", color: "#555" }}>{detalles}</Text>
            </>
          )}
        </Container>
      </Body>
    </Html>
  );
}