import s from "./SearchBox.module.css"

const SearchBox = ({value, onFilter}) => { 
    return (
        <div className={s.searchWrapper }>
            <p className={s.searchTitle }>Find contacts by name</p>
            <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} className={s.searchInput } />
        </div>
    );
};

export default SearchBox;