import "../styles/header.css"

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex flex-row justify-start gap-5 items-center content-end">
      <h1 className="text-2xl font-bold">MAP OF SAINTS</h1>
      <div className="flex gap-5 justify-end">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"> test1 </button>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"> test2 </button>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"> test3 </button>
      </div>
    </header>
  );
}