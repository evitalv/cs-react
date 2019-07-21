export const cSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "Legal entity",
  type: "object",
  properties: {
    legalName: {
      description: "A legal entity's legal name",
      type: "string",
      minLength: 5
    },
    regNo: {
      description: "TBU",
      type: "string",
      nullable: true
    }
  }
};

export const cConfig = {
  errMessages: {
    legalName: {
      required: "A legal entity must have a legal name",
      minLength: "Legal name must be at least 5 characters"
    }
  }
};
