const showErrors = (error) => {
  const keyErrors = Object.keys(error.errors);
  console.log(keyErrors, "\n", error._message);
  console.log(
    "--------------------------------------------------------\nDetails: "
  );
  keyErrors.map((e) => console.log(error.errors[e].properties.message));
  console.log("--------------------------------------------------------");
};
module.exports = showErrors;
