import List from "./components/list"

function App() {
  // 1. assume we successfully got the list of fighters from the server
  const fighterArr = ["Paul", "Jin", "Hwoarang", "Kazuya", "Law"];

  // 2. assume we didn't get any list from the server
    // let fighterArr;   
  // 3. assume we got an empty list from the server
    // let fighterArr = [];

  return (
    <>
      <h1 className="text-4xl text-center font-bold text-red-500">We firstly set up Tailwind CSS in a Vite project via Framework Guides</h1>
      <List list={fighterArr} />

    </>
  )
}

export default App
