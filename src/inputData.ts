interface inputData {
  value: any;
  error: boolean;
  errorMsg: string;
  errorStyle: "error" | "";
  validate: () => boolean;
}
