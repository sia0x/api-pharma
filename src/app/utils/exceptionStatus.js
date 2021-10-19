class ExceptionStatus {
  constructor(err) {
    this.message = err.message;
    this.status = err.status;
  }
}

export default ExceptionStatus;
