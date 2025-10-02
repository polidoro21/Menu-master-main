import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

function TelaSobre() {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      {/* Foto no topo */}
      <Image
        source={require("../assets/fotos/vet.jpg")}
        style={estilos.foto}
      />

      {/* Biografia */}
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Biografia</Text>
        <Text style={estilos.texto}>
          Cursos: Técnico em Desenvolvimento de Sistemas, Graduação em Agronomia (em andamento) e formação em Técnico Veterinário de porte médio e grande.
        </Text>
        <Text style={estilos.texto}>
          Habilidades: Desenvolvimento Web, Análise de Dados, Conhecimento em Agricultura e Meio Ambiente.
        </Text>
        <Text style={estilos.texto}>
          Experiências: Estágio em empresa de tecnologia, participação em projetos acadêmicos relacionados à agricultura sustentável, trabalho voluntário em ONG ambiental.
        </Text>
      </View>

      {/* Cursos */}
      <View style={[estilos.card, estilos.topicoFundo]}>
        <Text style={estilos.titulo}>Cursos</Text>
        <Text style={estilos.topico}>• Técnico em Desenvolvimento de Sistemas</Text>
        <Text style={estilos.topico}>• Graduação em Agronomia (em andamento)</Text>
        <Text style={estilos.topico}>• Técnico Veterinário de porte médio e grande</Text>
      </View>

      {/* Habilidades */}
      <View style={[estilos.card, estilos.topicoFundo]}>
        <Text style={estilos.titulo}>Habilidades</Text>
        <Text style={estilos.topico}>• Desenvolvimento Web</Text>
        <Text style={estilos.topico}>• Análise de Dados</Text>
        <Text style={estilos.topico}>• Conhecimento em Agricultura e Meio Ambiente</Text>
      </View>

      {/* Experiências */}
      <View style={[estilos.card, estilos.topicoFundo]}>
        <Text style={estilos.titulo}>Experiências</Text>
        <Text style={estilos.topico}>• Estágio em empresa de tecnologia</Text>
        <Text style={estilos.topico}>• Projetos acadêmicos relacionados à agricultura sustentável</Text>
        <Text style={estilos.topico}>• Trabalho voluntário em ONG ambiental</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E8F5E9",
  },
  foto: {
    width: 120,
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#1976D2",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  topicoFundo: {
    backgroundColor: "#E0F7FA",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 8,
  },
  topico: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 5,
    paddingLeft: 10,
  },
});

export default TelaSobre;
