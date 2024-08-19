import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      title: "Zgłoszenia",
      name: "requests",
      type: "document",
      fields: [
        {
          title: "Imie i nazwisko",
          name: "name",
          type: "string"
        },
        {
          title: "Email",
          name: "email",
          type: "string"
        },
        {
          title: "Numer telefonu",
          name: "phoneNumber",
          type: "string"
        },
        {
          title: "Producent",
          name: "factory",
          type: "string"
        },
        {
          title: "Adres postoju",
          name: "address",
          type: "string"
        },
        {
          title: "Typ maszyny",
          name: "machineType",
          type: "string"
        },
        {
          title: "Rok produkcji",
          name: "yearProduction",
          type: "number"
        },
        {
          title: "Numer WIN",
          name: "winNumber",
          type: "string"
        },
        {
          title: "Opis usterki",
          name: "description",
          type: "string"
        },
      ]
    }  
  ],
}
