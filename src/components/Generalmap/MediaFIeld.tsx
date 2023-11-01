// type InputProp = {
//   type: any[]; // Replace 'any[]' with the specific type you intend to use for 'value'
// };

const MediaField = () => {
  return (
    <>
      <>
        <input
          type="file"
          // name={value.name}
          id=""
          onChange={(e: any) => {
            console.log(e.target.value);
          }}
        />
      </>
    </>
  );
};

export default MediaField;
