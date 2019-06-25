export const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "Legal entity",
  type: "object",
  properties: {
    id: {
      description: "The unique internal identificator for a legal entity",
      type: "number",
      minimum: 0
    },
    legalName: {
      description: "A legal entity's legal name",
      type: "string",
      minLength: 2
    },
    legalForm: {
      description: "TBU",
      type: "string"
    },
    country: {
      description: "TBU",
      type: "string"
    },
    note: {
      description: "TBU",
      type: "string",
      nullable: true
    }
  },
  required: ["id", "legalName"]
};

export const config = {
  errMessages: {
    legalName: {
      required: "A legal entity must have a legal name",
      minLength: "Legal name must be at least 2 characters"
    }
  }
};
