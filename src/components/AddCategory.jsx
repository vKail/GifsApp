import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };  

  const onSubmit = (event) => {
    event.preventDefault();
    //Funciona, pero no es la mejor forma de hacerlo, ya que se pude hacer la logica en el padre
    //setCategories((categories) => [inputValue, ...categories]);
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={(event) => {onSubmit(event)}}>
      <input type="text" 
        placeholder="Add a category"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  )
}     

