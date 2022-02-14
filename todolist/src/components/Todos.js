import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
function Todos(props) {
  return (
    <ul className={classes.todos}>
      {props.data.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          des={item.des}
          remove={props.remove}
        />
      ))}
    </ul>
  );
}

export default Todos;
