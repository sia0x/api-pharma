class ExceptionValidation {
  constructor(err) {
    this.message = err.message;
    this.fieldWithError = err.fieldWithError;
  }
}

export default ExceptionValidation;
