/*el componente FlatList para mostrar las preguntas y respuestas, y el componente 
TouchableOpacity para permitir expandir y contraer las respuestas, un contenedor View 
con estilo box alrededor de cada sección de preguntas frecuentes. Esto crea una caja alrededor de las preguntas y respuestas dentro de cada sección.
Puedes ajustar el estilo de la caja (box) según tus preferencias. 
También puedes agregar más preguntas y respuestas en el estado faqData para cada sección..
ScrollView para hacer que la lista de preguntas frecuentes sea desplazable. Cada pregunta y respuesta están contenidas en una caja representada por 
el TouchableOpacity. Al presionar en una pregunta, se abre o cierra la respuesta correspondiente.

El diseño es responsivo para dispositivos móviles, y la lista se adapta automáticamente al tamaño de la pantalla gracias a los estilos definidos en
el StyleSheet.*/

import React, { useState } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
//import { StatusBar } from 'expo-status-bar';

const FAQList = () => {
  const [faqs, setFaqs] = useState([
    {
      id: '1',
      question: '¿Qué es una manga gástrica?',
      answer: 'El cirujano extrae parte del estómago y construye un tubo estrecho para dejar su estómago mucho más pequeño que antes.',
      isOpen: false,
    },
    {
      id: '2',
      question: '¿Qué es un Bypass gástrico?',
      answer: 'Se conecta la primera parte del estómago directamente al intestino delgado dejando un pequeño estomago de 15 a 30 ml.',
      isOpen: false,
    },
    {
      id: '3',
      question: '¿Cuánto bajare de peso luego de la cirugía?',
      answer: 'Esto depende caso a caso, se recomienda consultar con especialistas (Médico cirujano o nutricionista).',
      isOpen: false,
    },
    {
      id: '4',
      question: '¿Cuántos litros de agua debo beber diario?',
      answer: 'Se recomienda mantenerse hidratado en el postoperatorio, no existe una cantidad determinada de agua que debe beber, consulte con cirujano o nutricionista',
      isOpen: false,
    },
    {
      id: '5',
      question: '¿Cuándo volveré a comer normal?',
      answer: 'Luego de la cirugía existen varias fases donde va cambiando la alimentación, no existe un tiempo determinado, además se debe tener en consideración que va a consumir menos de lo que se acostumbraba.',
      isOpen: false,
    },
    {
      id: '6',
      question: '¿Puedo hacer ejercicio luego de la cirugía?',
      answer: 'Se recomienda esperar un mes al menos desde la cirugía y el alta medica del cirujano, siempre debe ser guiado por profesionales.',
      isOpen: false,
    },
    {
      id: '7',
      question: '¿Puedo conducir después de la cirugía?',
      answer: 'Se recomienda no conducir hasta después de la tercera semana de la cirugía, porque esto requiere de esfuerzo físico, siempre consulte con especialista..',
      isOpen: false,
    },
    {
      id: '8',
      question: '¿Tengo que tomar algún remedio?',
      answer: 'Solo debe ingerir los medicamentos recetados por los médicos que están controlando el postoperatorio en caso de prescripción medica de otro doctor se recomienda consultar con su medico cirujano.',
      isOpen: false,
    },
    {
      id: '9',
      question: '¿En caso de dolor puedo tomar algún remedio?',
      answer: '.',
      isOpen: false,
    },
    {
      id: '10',
      question: '¿Si tengo dolor que debo hacer?',
      answer: 'En primera instancia se debe consultar con su medico cirujano de lo contrario se recomienda ir al centro asistencial más cercano..',
      isOpen: false,
    },
    {
      id: '11',
      question: '¿Debo asistir a controles luego de la operación?',
      answer: 'Si, de la asistencia a los controles depende el éxito de la operación ya que se debe seguir monitoreando el proceso.',
      isOpen: false,
    },
    {
      id: '12',
      question: '¿Qué puedo comer?',
      answer: '.',
      isOpen: false,
    },
    {
      id: '13',
      question: '¿Debo hacer reposo?',
      answer: '.',
      isOpen: false,
    },
    {
      id: '14',
      question: '¿Puedo usar medias de compresión?',
      answer: '.',
      isOpen: false,
    },
    {
      id: '15',
      question: '¿Hay alguna contraindicación?',
      answer: '.',
      isOpen: false,
    },
    {
      id: '16',
      question: '',
      answer: '.',
      isOpen: false,
    },
  ]);

  const toggleAnswer = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) => {
        if (faq.id === id) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      })
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Preguntas Frecuentes</Text>
        {faqs.map((faq) => (
          <TouchableOpacity
            key={faq.id}
            style={[styles.faqContainer, faq.isOpen && styles.faqContainerOpen]}
            onPress={() => toggleAnswer(faq.id)}
          >
            <Text style={styles.question}>{faq.question}</Text>
            {faq.isOpen && <Text style={styles.answer}>{faq.answer}</Text>}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  faqContainerOpen: {
    backgroundColor: '#EAEAEA',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
  },
});

export default FAQList;
