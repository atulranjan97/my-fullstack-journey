import List from "./components/list";

function App() {

  const fighterArr = ["Paul", "Jin", "Hwoarang", "Kazuya", "Law"]

  return (
    <>
      <h1 className="text-5xl">Setting up Tailwind CSS in a Vite project via Tailwind CLI</h1>
      <List list={fighterArr} />
    </>
  )

}

export default App;