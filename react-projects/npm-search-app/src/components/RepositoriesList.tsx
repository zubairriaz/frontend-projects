import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const {searchRespositories} = useActions();
  const [term, setTerm] = useState('');
  const {isLoading, error, data} = useTypedSelector((state)=>state.repositories)
  return (
    <div>
      <h3>Search Repositories</h3>
      <input value={term} onChange={e=>setTerm(e.target.value)}></input>
      <button onClick={()=>searchRespositories(term)}>Search</button>
      {error && <span>{error}</span>}
      {isLoading && <span>Loading...</span>}
      {!isLoading && !error && data.map(name=><li key={name}> {name}</li>)}


    </div>
  );
};

export default RepositoriesList;
