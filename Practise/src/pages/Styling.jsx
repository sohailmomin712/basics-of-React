const Styling = () => {
  return (
    <div>
      <h1 className="external">Adding CSS using External CSS</h1>
      <h2 style={{ backgroundColor: "aqua", color: "black" }}>
        Adding Inline CSS
      </h2>
      <h3 className={style.success}>Adding the custom modules css</h3>
      {/* step 1: create custom.modules.css file */}
      {/* step 2: go to the file and take any class name and add style to it */}
      {/* step 3: Then import it */}
      {/* step 4: import style from and file name*/}
      {/* step 5: import style from  ./custom.modules.css*/}
      {/* step 6: add the same class name as in custom css file but write it in {} curly braces and add style before it eg className={style.success}*/}
    </div>
  );
};

export default Styling;
