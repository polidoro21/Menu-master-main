import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";

function TelaContatos() {
  // Função para abrir o link
  const abrirLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Contatos</Text>
      <Text style={estilos.texto}>Email: lorraynefranca44@gmail.com</Text>
      <Text style={estilos.texto}>Telefone: (18) 99180-3040</Text>
      <Text style={estilos.texto}>Endereço: Rua Antoni Palini, 151</Text>

      <Text style={estilos.subtitulo}>Redes Sociais</Text>

      {/* WhatsApp */}
      <TouchableOpacity onPress={() => abrirLink("https://wa.me/5518991803040?text=Olá%20quero%20entrar%20em%20contato")}>
        <Text style={estilos.link}>WhatsApp</Text>
      </TouchableOpacity>

      {/* Instagram */}
      <TouchableOpacity onPress={() => abrirLink("https://www.instagram.com/fr4nca.sx_/?igsh=MXd0Z2NycDJtZmI0bw==")}>
        <Text style={estilos.link}>Instagram</Text>
      </TouchableOpacity>

      {/* X (Twitter) */}
      <TouchableOpacity onPress={() => abrirLink("https://x.com/lorraynefranca4?t=zrBi6o9XSvRo-OOUNT3cDg&s=09")}>
        <Text style={estilos.link}>X (Twitter)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E8F5E9",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1976D2",
    marginTop: 20,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    color: "#333",
  },
  link: {
    fontSize: 16,
    color: "#1565C0",
    textDecorationLine: "underline",
    marginBottom: 8,
  },
});

export default TelaContatos;
