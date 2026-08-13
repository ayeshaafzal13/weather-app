export default function Search({search, setSearch, handleSearch}){
    return <div className="search-engine">
        <input 
           type="text"
           placeholder="Enter City Name"
           name="search"
           value={search}
           onChange={(event) => setSearch(event.target.value)}  // ← Changed from onClick
           onKeyDown={(e) => e.key === "Enter" && handleSearch()} // ← Press Enter to search
        />
        <button onClick={handleSearch}>
          🔍 Search Weather
        </button>
    </div>
}