import "./FilterBar.css";

function FilterBar({
    selectedType,
    setSelectedType,
}) {
    const types = [
        "All",
        "Apartment",
        "House",
        "Cabin",
        "Hotel",
    ];

    return (
        <div className="filter-bar">

            {types.map((type) => (
                <button
                    key={type}
                    className={
                        selectedType === type
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setSelectedType(type)
                    }
                >
                    {type}
                </button>
            ))}

        </div>
    );
}

export default FilterBar;