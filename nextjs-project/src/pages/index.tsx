import { SearchBar } from "../components/SearchBar"

export default function Home() {
  return (
    <main className="flex flex-col m-16" >
      <div>
        <h1 className="my-4 text-xl">The Component created by GPT4 ↓</h1>
        <SearchBar placeholder='input texts...' onSearch={() => {console.log('click!!')}} />
      </div>
    </main>
  )
}
