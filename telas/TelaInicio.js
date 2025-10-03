import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

function TelaInicio() {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      {/* Foto no topo */}
      <Image
        source={require("../assets/fotos/lorrayne2005.jpeg")}
        style={estilos.foto}
      />

      {/* Biografia */}
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Biografia</Text>
        <Text style={estilos.texto}>
          Olá, meu nome é Lorrayne, mais conhecida pelo apelido PoliPoli, tenho 20 anos e sou estudante de Agronomia e Técnico em Desenvolvimento de Sistemas.
        </Text>
        <Text style={estilos.texto}>
          Sou uma pessoa delicada igual coice de Mula 🐴, comunicativa e sempre disposta a aprender coisas novas. Tenho interesse em tecnologia, programação, solo e animais.
        </Text>
        <Text style={estilos.texto}>
          Nos meus tempos livres, gosto de tomar um tereré bem gelado, assistir futebol e desenho animado, além de explorar novas músicas e livros.
        </Text>
      </View>

      {/* Hobbies */}
      <View style={[estilos.card, estilos.topicoFundo]}>
        <Text style={estilos.titulo}>Hobbies</Text>
        <Text style={estilos.topico}>• Jogar futebol</Text>
        <Text style={estilos.topico}>• Ler livros de ficção científica</Text>
        <Text style={estilos.topico}>• Assistir filmes e séries</Text>
        <Text style={estilos.topico}>• Explorar novas músicas</Text>
        <Text style={estilos.topico}>• Cozinhar</Text>
      </View>

      {/* Sonhos */}
      <View style={[estilos.card, estilos.topicoFundo]}>
        <Text style={estilos.titulo}>Sonhos</Text>
        <Text style={estilos.topico}>• Me tornar uma desenvolvedora de software de sucesso</Text>
        <Text style={estilos.topico}>• Contribuir para projetos inovadores na área de tecnologia</Text>
        <Text style={estilos.topico}>• Viajar pelo mundo conhecendo diferentes culturas</Text>
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

export default TelaInicio;
