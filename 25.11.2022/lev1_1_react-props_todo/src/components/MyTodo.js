const Datenbank = [
  "Bug Grocery",
  "Send Email",
  "Finish Assignment",
  "Write Blog",
  "Bake Cake",
];

const MyTodo = () => {
  return (
    <main>
      <h1>My Todos</h1>
      {Datenbank.map((object, index) => (
        <li key={index}>{object}</li>
      ))}
    </main>
  );
};

export default MyTodo;
