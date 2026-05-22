// src/lib/getReadings.js

export async function getReadings() {
  try {
    const response = await fetch("https://lc.kbs.sk/json/dnes.json");

    if (!response.ok) {
      throw new Error("Nepodarilo sa načítať čítania");
    }

    const data = await response.json();

    // bezpečné spracovanie
    return {
      title: data.title || "Dnešné čítania",
      subtitle: data.subtitle || "",
      date: data.date || "",

      readings: [
        {
          type: "1. čítanie",
          reference: data.first_reading?.reference || "",
          text: data.first_reading?.text || ""
        },

        {
          type: "Žalm",
          reference: data.psalm?.reference || "",
          text: data.psalm?.text || ""
        },

        {
          type: "Evanjelium",
          reference: data.gospel?.reference || "",
          text: data.gospel?.text || ""
        }
      ].filter((item) => item.text)
    };

  } catch (error) {
    console.error("CHYBA getReadings:", error);

    return {
      title: "Liturgické čítania",
      subtitle: "",
      date: "",
      readings: []
    };
  }
}